import React, { memo, useState } from "react";
import { GiMoneyStack, GiReceiveMoney } from "react-icons/gi";
import UsersNavBar from "./UsersNavBar";
import MapComp from "./MapComp";
import ServiceLocatorForm from "./ServiceLocatorForm";

const UsersDashboard = memo(() => {
  const [userDetails, setUserDetails] = useState({
    history: [],
    earnings: [],
  });
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="header"><UsersNavBar /></div>
      <div className="map">
        <MapComp />
      </div>
      <div className="text-center text-xl">or</div>
      <div className="form">
        <h1 className="text-center text-2xl mb-8 font-bold">Locate services using address/pincode</h1>
        <ServiceLocatorForm />
      </div>
      <div className="listOfserviceProviders"></div>
      <h1 className="sm:text-3xl font-bold text-xl">Work History:</h1>
      <div className="historyList">
        {userDetails?.history.length !== 0 ? (
          userDetails?.history.map(() => {})
        ) : (
          <div className="text-gray-500 p-4 shadow-[inset_0_0_4px_lightgray] rounded-xl">
            No work history!
          </div>
        )}
      </div>
      <h1 className="sm:text-3xl font-bold text-xl">Earnings:</h1>
      <div className="earningsSection flex gap-4 flex-wrap">
        <div className="todaysEarning p-4 rounded-full flex items-center gap-4 shadow-[0_0_8px_lightgray] px-10 max-[600px]:mx-auto">
          <div className="icon">
            <GiReceiveMoney size="3rem" />
          </div>
          <div className="earningDetails">
            <div className="amount text-3xl font-bold">$10</div>
            <div className="description">Today's Earnings</div>
          </div>
        </div>
        <div className="totalEarning p-4 rounded-full flex items-center gap-4 shadow-[0_0_8px_lightgray] px-10 max-[600px]:mx-auto">
          <div className="icon">
            <GiMoneyStack size="3rem" />
          </div>
          <div className="earningDetails">
            <div className="amount text-3xl font-bold">$5252</div>
            <div className="description">Total Earnings</div>
          </div>
        </div>
      </div>
      <div className="earningHistory">
        {/* {userDetails.earnings.length !== 0 ? (
          userDetails.earnings.map((elem) => {})
        ) : ( */}
        <div className="text-gray-500 p-4 shadow-[inset_0_0_4px_lightgray] rounded-xl">
          No Earnings yet!
        </div>
        {/* )} */}
      </div>
    </div>
  );
});
export default UsersDashboard;
