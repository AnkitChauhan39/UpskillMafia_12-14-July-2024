import React, { memo } from "react";
import { GrUserWorker } from "react-icons/gr";
import { TbStarsFilled } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";

const OrgJoinRequestNotification = memo(
  ({ workerName, workerDetails, avgRating, address }) => {
    return (
      <div className="flex items-center gap-4 flex-1 p-4 rounded-xl shadow-[0_0_8px_lightgray]">
        <div className="icon"><GrUserWorker size="2rem" /></div>
        <div className="workerDetails flex-1">
          <div className="name">{workerName}</div>
          <div className="description">{workerDetails}</div>
        </div>
        <div className="address flex-1"><CiLocationOn size="1.5rem" className="mx-auto" />{address}</div>
        <div className="avgRatings"><TbStarsFilled size="1.5rem" className="mx-auto" />{avgRating}</div>
      </div>
    );
  }
);
export default OrgJoinRequestNotification;
