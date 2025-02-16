import { useAuth0 } from "@auth0/auth0-react";
import React, { memo, useCallback, useState } from "react";
import { BsBuildingAdd } from "react-icons/bs";
import PrimaryBtn from "../../components/Primary Btn/PrimaryBtn";
import ProfilePopUp from "./ProfilePopUp";

const UsersNavBar = memo(() => {
  const { user } = useAuth0();
  const [showProfilePopup, setShowProfilePopup] = useState(false);
  const clickHandler = useCallback(() => {
    setShowProfilePopup((prevState) => !prevState);
  }, []);
  return (
    <div className="flex justify-between items-center shadow-[0_0_4px_grey] min-[400px]:p-4 p-2 rounded-full sm:w-11/12 sm:mx-auto w-full">
      <div className="flex items-center gap-4 relative">
        <div
          className={`absolute top-24 ${
            showProfilePopup ? "left-0" : "-left-96 opacity-0"
          } transition-all duration-500`}
          onClick={clickHandler}
        >
          <ProfilePopUp />
        </div>
        <div
          className="profile rounded-full overflow-hidden aspect-square min-[400px]:w-16 w-14 cursor-pointer"
          onClick={clickHandler}
        >
          <img
            src={user?.picture}
            alt={user?.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="name font-bold min-[400px]:text-xl text-base">
          {user?.name}
        </div>
      </div>
      <PrimaryBtn className="createOrganistion flex items-center gap-2 self-stretch rounded-full shadow-[0_0_4px_gray] text-xl px-6 bg-green-500 text-white">
        <BsBuildingAdd size="1.5rem" />
        <div className="sm:block hidden">Create organisation</div>
      </PrimaryBtn>
    </div>
  );
});

export default UsersNavBar;
