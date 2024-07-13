import React from "react";
import { memo } from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { GiTakeMyMoney } from "react-icons/gi";
import { LuHeartHandshake } from "react-icons/lu";
import { GrUserWorker } from "react-icons/gr";
import { TbStarsFilled } from "react-icons/tb";
import { CiCircleCheck } from "react-icons/ci";
import { RxCrossCircled } from "react-icons/rx";
import { RxCheckCircled } from "react-icons/rx";
import { RiDeleteBin6Line } from "react-icons/ri";

const WorkNotification = memo(
  ({
    type = "",
    workTitle,
    workDescription,
    workerName,
    workerDetails,
    totalWork,
    avgRating,
    address,
    expectedTimeToCompleteWork,
    budget,
    id,
    removeNotification,
  }) => {
    return (
      <div className="hireRequest flex items-center p-4 rounded-xl shadow-[0_0_8px_lightgray] gap-8 flex-1 flex-wrap text-center md:text-left md:flex-row flex-col">
        <div className="icons">
          {type.toLowerCase() == "joinrequest" ? (
            <GrUserWorker size="2rem" />
          ) : (
            <LuHeartHandshake size="2rem" />
          )}
        </div>
        {type.toLowerCase() == "joinrequest" ? (
          <div className="workerDetails flex-1">
            <div className="workTitle text-xl font-semibold">{workerName}</div>
            <div className="workDescription text-gray-500">{workerDetails}</div>
          </div>
        ) : (
          <div className="workDetails flex-1">
            <div className="workTitle text-xl font-semibold">{workTitle}</div>
            <div className="workDescription text-gray-500">
              {workDescription}
            </div>
          </div>
        )}
        <div className="flex-1 flex items-center gap-8 md:flex-nowrap flex-wrap justify-center">
          <div className="Address grow flex gap-2 items-center sm:min-w-72 mx-auto">
            <CiLocationOn size="2rem" />
            {address}
          </div>
          {type.toLowerCase() == "joinrequest" ? (
            <>
              <div className="avgRatings">
                <IoTimeOutline size="1.5rem" className="mx-auto" />
                {totalWork}
              </div>
              <div className="avgRatings">
                <TbStarsFilled size="1.5rem" className="mx-auto" />
                {avgRating}
              </div>
            </>
          ) : (
            <>
              <div className="expectedTimeToCompleteWork">
                <IoTimeOutline size="2rem" className="mx-auto" />
                {expectedTimeToCompleteWork}
              </div>
              <div className="budget">
                <GiTakeMyMoney size="2rem" className="mx-auto" />
                {budget}
              </div>
            </>
          )}
          {type.toLowerCase() == "joinrequest" && (
            <div className="flex md:flex-col">
              <RxCheckCircled
                size="3rem"
                className="p-2 cursor-pointer active:text-gray-500 text-green-500"
              />
              <RxCrossCircled
                size="3rem"
                className="p-2 cursor-pointer active:text-gray-500 text-red-500"
              />
            </div>
          )}
          <div id={id} onClick={removeNotification}>
            <RiDeleteBin6Line
              size="2.5rem"
              className="p-2 active:bg-gray-200 cursor-pointer rounded-xl text-red-500 active:text-red-900"
            />
          </div>
        </div>
      </div>
    );
  }
);

export default WorkNotification;
