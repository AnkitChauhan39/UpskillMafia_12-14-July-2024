import { useAuth0 } from "@auth0/auth0-react";
import React, { memo, useCallback } from "react";
import { BsBuildingCheck } from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import { useParams } from "react-router-dom";

const ProfilePopUp = memo(() => {
  const { logout } = useAuth0();
  const { accountType } = useParams();
  //   console.log(accountType);
  const logoutHandler = useCallback(() => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  }, []);
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-[0_0_4px_grey] cursor-pointer z-50">
      {accountType == "indiRP" && (
        <div className="joinOrg text-xl p-2 px-4 flex gap-2 items-center hover:bg-gray-200 active:bg-gray-300">
          <BsBuildingCheck size="1.5rem" /> Join organisation
        </div>
      )}
      <div
        className="logout text-xl p-2 px-4 flex gap-2 items-center bg-red-500 text-white hover:bg-red-700 active:bg-red-800"
        onClick={logoutHandler}
      >
        <MdLogout size="1.5rem" /> Logout
      </div>
    </div>
  );
});

export default ProfilePopUp;
