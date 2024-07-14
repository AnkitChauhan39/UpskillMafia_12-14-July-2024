import React, { memo, useCallback, useMemo } from "react";
import PrimaryBtn from "../../components/Primary Btn/PrimaryBtn";
import SecondaryBtn from "../../components/Secondary Btn/SecondaryBtn";
import SERVER_URL from "../../constants.mjs";
import { useAuth0 } from "@auth0/auth0-react";

const IndividualReg = memo(() => {
  const { user } = useAuth0();
  const inputFields = useMemo(
    () => [
      {
        placeHolder: "Name in your aadhar card",
        type: "text",
      },
      {
        placeHolder: "Aadhar number",
        type: "number",
      },
      {
        placeHolder: "Date of Birth",
        type: "Date",
      },
      {
        placeHolder: "Mobile number",
        type: "number",
      },
      {
        placeHolder: "Address",
        type: "text",
      },
      {
        placeHolder: "Enter 5-digit otp",
        type: "number",
      },
    ],
    []
  );

  const sendOtp = useCallback(() => {
    const email = e.target.id;
    console.log(email);
    fetch(`${SERVER_URL}/auth/verifyOTP`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then(({ otp }) => console.log(otp))
      .catch((err) => console.log(err));
  }, []);

  const getMinDate = useCallback(() => {
    const today = new Date();
    const minDate = new Date(
      today.getFullYear() - 100,
      today.getMonth(),
      today.getDate()
    );
    return minDate.toISOString().split("T")[0];
  }, []);

  const getMaxDate = useCallback(() => {
    const today = new Date();
    const maxDate = new Date(
      today.getFullYear() - 18,
      today.getMonth(),
      today.getDate()
    );
    return maxDate.toISOString().split("T")[0];
  }, []);
  return (
    <div className="h-dvh grid place-items-center">
      <div className=" flex flex-col items-center gap-4 w-fit justify-center rounded-xl p-8 shadow-[0_0_4px_grey]">
        <div className="heading text-5xl mb-4 font-bold ">
          Create an account
        </div>
        <div className="formFields flex flex-col w-fit gap-4">
          {inputFields.map((elem) => (
            <>
              <input
                key={elem.placeHolder}
                type={elem.type}
                placeholder={elem.placeHolder}
                className={`border rounded-full p-4 min-w-96 ${
                  elem.type == "Date" ? "peer" : ""
                }`}
                min={getMinDate()}
                max={getMaxDate()}
              />
              {elem.type == "Date" && (
                <div
                  className="text-xs -mt-4 peer-hover:block hidden text-center"
                  key={elem.placeHolder}
                >
                  {elem.placeHolder}
                </div>
              )}
            </>
          ))}
        </div>
        <div className="flex justify-evenly w-full">
          <SecondaryBtn id={user?.email} onClick={sendOtp}>
            Send otp
          </SecondaryBtn>
          <PrimaryBtn className="text-white p-4 rounded-full px-8">
            Next
          </PrimaryBtn>
        </div>
      </div>
    </div>
  );
});

export default IndividualReg;
