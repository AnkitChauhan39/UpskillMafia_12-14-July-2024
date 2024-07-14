import React, { memo, useCallback, useMemo, useState } from "react";
import PrimaryBtn from "../../components/Primary Btn/PrimaryBtn";

const ServiceLocatorForm = memo(() => {
  const [formData, setFormData] = useState({
    address: "",
    pincode: "",
  });
  const inputFilelds = useMemo(
    () => [
      {
        name: "address",
        type: "text",
        placeholder: "Enter your Address",
      },
      {
        name: "pincode",
        type: "text",
        placeholder: "Area PINCODE",
      },
    ],
    []
  );
  const changeHandler = useCallback(() => {}, []);
  return (
    <>
      <div className="Form flex gap-4 items-center mx-auto max-w-full  justify-center lg:flex-row flex-col">
        {inputFilelds.map((elem, index) => {
          return (
            <>
              <input
                key={elem.placeholder}
                type={elem.type}
                placeholder={elem.placeholder}
                className={`border rounded-full p-4 max-w-96 w-full`}
                onChange={changeHandler}
              />
              {index < inputFilelds.length - 1 && (
                <div className="text-center text-xl">or</div>
              )}
            </>
          );
        })}
      </div>
      <PrimaryBtn className="text-white p-4 rounded-full px-8 max-w-full mt-4 mx-auto block">
        Find Services
      </PrimaryBtn>
    </>
  );
});

export default ServiceLocatorForm;
