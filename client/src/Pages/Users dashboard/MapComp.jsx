import React, { useEffect, useState } from 'react';
import L from "leaflet"
import 'leaflet/dist/leaflet.css';

const MapComp = () => {
  const [userId] = useState('user-' + Math.random().toString(36).substr(2, 9));

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    const updateUserLocation = (latitude, longitude) => {
      fetch('https://upskillmafia-12-14-july-2024.onrender.com/api/updateLocation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: userId, latitude, longitude }),
      });
    };

    const fetchNearbyUsers = async (latitude, longitude) => {
      const response = await fetch(`https://upskillmafia-12-14-july-2024.onrender.com/api/getNearbyUsers?lat=${latitude}&lng=${longitude}`);
      return await response.json();
    };

    const success = (pos) => {
      const crd = pos.coords;
      console.log("Your current position is:");
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);

      const map = L.map('map').setView([crd.latitude, crd.longitude], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      const marker = L.marker([crd.latitude, crd.longitude]).addTo(map)
        .bindPopup('You are here!<br><button id="schedulePickupBtn">Schedule Pickup</button>')
        .openPopup();

      updateUserLocation(crd.latitude, crd.longitude);

      fetchNearbyUsers(crd.latitude, crd.longitude).then(users => {
        users.forEach(user => {
          L.marker([user.latitude, user.longitude]).addTo(map)
            .bindPopup(`${user.name}<br><button>Schedule Pickup</button>`);
        });
      });
    };

    const error = (err) => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [userId]);

  return (
    <>
      <h1 className='text-2xl font-bold'>EcoSathi User Map</h1>
      <div id="map" className='rounded-xl' style={{ height: '400px', width: '100%' }}></div>
    </>
  );
};

export default MapComp;
