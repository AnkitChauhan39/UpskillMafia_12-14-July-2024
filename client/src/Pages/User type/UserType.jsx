import React, { memo, useCallback, useMemo, useState } from "react";
import PrimaryBtn from "../../components/Primary Btn/PrimaryBtn";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import SERVER_URL from "../../constants.mjs";

const UserType = memo(() => {
  const { user } = useAuth0();
  const navigate = useNavigate();
  const [userType, setUserType] = useState(-1);
  const userTypes = useMemo(
    () => ["client", "Individual Worker", "Organisation"],
    []
  );
  const clickHandler = useCallback((e) => {
    const userTypeId = e.target.id;
    setUserType(userTypeId);
  }, []);

  const sendUserDetail = useCallback(() => {
    fetch(`${SERVER_URL}/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userInfo: user }),
    })
      .then((res) => res.json())
      .then(({ message }) => {
        console.log(message);
        navigate(`/userDash/${btoa(user?.email)}`);
      });
  }, [user]);

  const redirect = useCallback(() => {
    if (Number(userType) == 0) {
      //navigate to user page
      // console.log(Number(userType));
      sendUserDetail();
    } else if (Number(userType) == 1) {
      // console.log(Number(userType));
      //navigate to individual registration page
      navigate("/individualReg");
    } else {
      // console.log(Number(userType));
      //navigate to organistion registration
      navigate("/orgReg");
    }
  }, [userType]);

  return (
    <div className="flex flex-col gap-4 items-center h-dvh justify-center">
      <h1 className="text-4xl font-bold">User Type</h1>
      {userTypes.map((elem, index) => {
        return (
          <div
            key={elem}
            className={`p-4 cursor-pointer rounded-full w-80 text-center transition-all duration-500 ${
              Number(userType) === index
                ? "shadow-[0_0_4px_green] bg-green-500 text-white font-bold"
                : "shadow-[0_0_4px_grey]"
            }`}
            id={index}
            onClick={clickHandler}
          >
            {elem}
          </div>
        );
      })}
      <PrimaryBtn
        className={"text-white p-4 rounded-full px-8 w-fit"}
        onClick={redirect}
        disabled={Number(userType) < 0}
      >
        Next
      </PrimaryBtn>
    </div>
  );
});

export default UserType;
