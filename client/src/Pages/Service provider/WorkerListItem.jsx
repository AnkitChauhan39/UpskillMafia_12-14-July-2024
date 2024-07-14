import React, { memo } from "react";
import { BsPersonCheck } from "react-icons/bs";
import { BsPersonExclamation } from "react-icons/bs";
import { TbStarsFilled } from "react-icons/tb";
import { SlOptionsVertical } from "react-icons/sl";

const WorkerListItem = memo(({ workerName, ratings, availability }) => {
  return (
    <div className="sm:p-4 p-2 rounded-xl shadow-[0_0_8px_lightgray] flex items-center sm:gap-10 gap-4 sm:max-w-[450px] w-1/2">
      <div className="name flex-1 capitalize text-xl font-bold">
        {workerName}
      </div>
      <div className="availability flex flex-col items-center gap-2">
        {availability ? (
          <BsPersonCheck color="green" size="1.5rem" title="Available" />
        ) : (
          <BsPersonExclamation
            color="red"
            size="1.5rem"
            title="Not available"
          />
        )}
        <div className="text">Availability</div>
      </div>
      <div className="ratings text-xl text-center">
        <TbStarsFilled size="2rem" className="mx-auto" />
        {ratings}%
      </div>
      <div className="options">
        <SlOptionsVertical
          className="p-2 active:bg-gray-200 rounded-full cursor-pointer"
          size="2.5rem"
        />
      </div>
    </div>
  );
});
export default WorkerListItem;
