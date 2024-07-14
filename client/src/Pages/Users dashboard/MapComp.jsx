import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import SERVER_URL from "../../constants.mjs";
import { useAuth0 } from "@auth0/auth0-react";

const MapComp = () => {
  const [userId] = useState("user-" + Math.random().toString(36).substr(2, 9));
  const { user } = useAuth0();

  useEffect(() => {
    if (user) {
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      };

      const updateUserLocation = (latitude, longitude) => {
        fetch(`${SERVER_URL}/map/updateLocation`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: userId,
            latitude,
            longitude,
            email: user.email,
            userName: user.name,
          }),
        })
          .then((response) => response.json())
          .then((data) => console.log("Location updated:", data))
          .catch((error) => console.error("Error updating location:", error));
      };

      const fetchNearbyUsers = async (latitude, longitude) => {
        try {
          const response = await fetch(
            `${SERVER_URL}/map/getNearbyUsers?lat=${latitude}&lng=${longitude}`
          );
          const data = await response.json();
          // console.log("Nearby users fetched:", data);
          return data;
        } catch (error) {
          console.error("Error fetching nearby users:", error);
          return [];
        }
      };

      const success = (pos) => {
        const crd = pos.coords;
        console.log("Your current position is:");
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);

        const map = L.map("map").setView([crd.latitude, crd.longitude], 13);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        const marker = L.marker([crd.latitude, crd.longitude])
          .addTo(map)
          .bindPopup("You are here!")
          .openPopup();

        updateUserLocation(crd.latitude, crd.longitude);

        fetchNearbyUsers(crd.latitude, crd.longitude).then((users) => {
          if (users.length === 0) {
            console.log("No nearby users found.");
          }
          users.forEach((user) => {
            // console.log(
            //   `Adding marker for user: ${user.name} at ${user.latitude}, ${user.longitude}`
            // );
            L.marker([user.latitude, user.longitude])
              .addTo(map)
              .bindPopup(
                `${user.userName}<br><button style="border: 2px solid black; padding: 0.5rem; border-radius: 8px;">Schedule Pickup</button>`
              );
          });
        });
        setInterval(() => {
          fetchNearbyUsers(crd.latitude, crd.longitude).then((users) => {
            if (users.length === 0) {
              console.log("No nearby users found.");
            }
            users.forEach((user) => {
              // console.log(
              //   `Adding marker for user: ${user.name} at ${user.latitude}, ${user.longitude}`
              // );
              L.marker([user.latitude, user.longitude])
                .addTo(map)
                .bindPopup(
                  `${user.name}<br><button style="border: 2px solid black; padding: 0.5rem; border-radius: 8px;">Schedule Pickup</button>`
                );
            });
          });
        }, 10000);
      };

      const error = (err) => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      };

      navigator.geolocation.getCurrentPosition(success, error, options);
    }
  }, [userId, user]);

  return (
    <>
      <h1 className="text-2xl font-bold">EcoSathi User Map</h1>
      <div
        id="map"
        className="rounded-xl z-10"
        style={{ height: "400px", width: "100%" }}
      ></div>
    </>
  );
};

export default MapComp;
