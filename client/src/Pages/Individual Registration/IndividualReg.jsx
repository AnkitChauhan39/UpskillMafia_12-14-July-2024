import React, { memo, useCallback, useMemo, useState } from "react";
import PrimaryBtn from "../../components/Primary Btn/PrimaryBtn";
import SecondaryBtn from "../../components/Secondary Btn/SecondaryBtn";
import SERVER_URL from "../../constants.mjs";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const IndividualReg = memo(() => {
  const { user } = useAuth0();
  const navigate = useNavigate();
  const [otpFromBackend, setOtpFromBackend] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    aadharNo: "",
    dob: "",
    phoneNo: "",
    address: "",
    otp: "",
  });
  const [errors, setErrors] = useState({});

  const validate = useCallback(() => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.aadharNo) {
      newErrors.aadharNo = "Aadhar number is required";
    } else if (!/^\d{12}$/.test(formData.aadharNo)) {
      newErrors.aadharNo = "Aadhar number must be 12 digits";
    }
    if (!formData.dob) {
      newErrors.dob = "Date of Birth is required";
    } else {
      const dob = new Date(formData.dob);
      const minDate = new Date(getMinDate());
      const maxDate = new Date(getMaxDate());
      if (dob > maxDate || dob < minDate) {
        newErrors.dob = "You must be at least 18 years old";
      }
    }
    if (!formData.phoneNo) {
      newErrors.phoneNo = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phoneNo)) {
      newErrors.phoneNo = "Phone number must be 10 digits";
    }
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.otp) {
      newErrors.otp = "OTP is required";
    } else if (!/^\d{6}$/.test(formData.otp)) {
      newErrors.otp = "OTP must be 6 digits";
    } else {
      if (otpFromBackend != formData.otp) {
        newErrors.otp = "Incorrect otp!";
      }
    }

    setErrors((prevState) => newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const inputFields = useMemo(
    () => [
      {
        name: "name",
        placeHolder: "Name in your aadhar card",
        type: "text",
      },
      {
        name: "aadharNo",
        placeHolder: "Aadhar number",
        type: "number",
      },
      {
        name: "dob",
        placeHolder: "Date of Birth",
        type: "Date",
      },
      {
        name: "phoneNo",
        placeHolder: "Mobile number",
        type: "number",
      },
      {
        name: "address",
        placeHolder: "Address",
        type: "text",
      },
      {
        name: "otp",
        placeHolder: "Enter 5-digit otp",
        type: "number",
      },
    ],
    []
  );

  const changeHandler = useCallback((e) => {
    const key = e.target.name;
    console.log(key);
    setFormData((prevState) => ({ ...prevState, [key]: e.target.value }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission
      console.log("Form is valid. Submitting...", formData);
      delete formData.otp;
      console.log("Formdata after deletion", formData);
      fetch(`${SERVER_URL}/auth`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userInfo: user,
          kycData: formData,
        }),
      })
        .then((res) => res.json())
        .then(({ message }) => {
          console.log(message);
          navigate("/serviceProvider/indiRP"); //indiRP -> individual rag picker
        }) 
        .catch((err) => console.log(err));
    } else {
      console.log("Form has errors.");
      console.log(errors);
    }
  };

  const sendOtp = useCallback((e) => {
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
      .then(({ OTP: otp }) => {
        console.log(otp);
        setOtpFromBackend(otp);
      })
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
          {inputFields.map((elem) => {
            return (
              <>
                {elem.type == "Date" ? (
                  <input
                    key={elem.placeHolder}
                    type={elem.type}
                    value={formData[elem.name]}
                    name={elem.name}
                    placeholder={elem.placeHolder}
                    className={`border rounded-full p-4 min-w-96
                      peer ${
                        errors[elem.name] && errors[elem.name] != ""
                          ? "border-2 border-red-500"
                          : ""
                      }`}
                    min={getMinDate()}
                    max={getMaxDate()}
                    onChange={changeHandler}
                  />
                ) : (
                  <input
                    key={elem.placeHolder}
                    type={elem.type}
                    value={formData[elem.name]}
                    name={elem.name}
                    placeholder={elem.placeHolder}
                    className={`border rounded-full p-4 min-w-96 ${
                      errors[elem.name] && errors[elem.name] != ""
                        ? "border-2 border-red-500"
                        : ""
                    }`}
                    onChange={changeHandler}
                  />
                )}
                {elem.type == "Date" && (
                  <div
                    className="text-xs -mt-4 peer-hover:block hidden text-center"
                    key={"dob placehoder"}
                  >
                    {elem.placeHolder}
                  </div>
                )}
                <div
                  className={`text-red-500 text-xs -mt-4 text-center ${
                    errors[elem.name] !== "" ? "block" : "hidden"
                  }`}
                >
                  {errors[elem.name]}
                </div>
              </>
            );
          })}
        </div>
        <div className="flex justify-evenly w-full">
          <SecondaryBtn id={user?.email} onClick={sendOtp}>
            Send otp
          </SecondaryBtn>
          <PrimaryBtn
            className="text-white p-4 rounded-full px-8"
            onClick={handleSubmit}
          >
            Next
          </PrimaryBtn>
        </div>
      </div>
    </div>
  );
});

export default IndividualReg;
