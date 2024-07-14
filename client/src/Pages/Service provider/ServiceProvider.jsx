import React, { memo, useCallback, useMemo, useState } from "react";
import PrimaryBtn from "../../components/Primary Btn/PrimaryBtn";
import { FaUserPlus } from "react-icons/fa";
import WorkerListItem from "./WorkerListItem";
import WorkNotification from "./WorkNotification";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { GiMoneyStack } from "react-icons/gi";
import { BsBuildingAdd, BsBuildingCheck } from "react-icons/bs";

const ServiceProvider = memo(() => {
  const [userDetails, setUserDetails] = useState({
    isOrganisation: true,
    Notification: [
      {
        type: "workNotification",
        workTitle: "Clean Up Community Park",
        workDescription:
          "Organize a team to clean up litter and debris from the community park.",
        address: "123 Park Lane, Greenfield",
        expectedTimeToCompleteWork: "4 hours",
        budget: "$150",
      },
      {
        type: "workNotification",
        workTitle: "Recycling Center Assistance",
        workDescription:
          "Help sort and process recyclables at the local recycling center.",
        address: "456 Recycling Rd, Eco City",
        expectedTimeToCompleteWork: "6 hours",
        budget: "$200",
      },
      {
        type: "workNotification",
        workTitle: "Neighborhood Waste Collection",
        workDescription:
          "Collect household waste from designated pick-up points in the neighborhood.",
        address: "789 Community St, Clean Town",
        expectedTimeToCompleteWork: "3 hours",
        budget: "$120",
      },
      {
        type: "workNotification",
        workTitle: "Event Clean-Up Crew",
        workDescription:
          "Assist with post-event clean-up at the town hall after community events.",
        address: "101 Event Blvd, Gather Ville",
        expectedTimeToCompleteWork: "5 hours",
        budget: "$180",
      },
      {
        type: "workNotification",
        workTitle: "Riverbank Litter Removal",
        workDescription:
          "Remove litter and debris along the riverbank to promote a cleaner environment.",
        address: "202 River Rd, Water Town",
        expectedTimeToCompleteWork: "4 hours",
        budget: "$160",
      },
      {
        type: "workNotification",
        workTitle: "Beach Clean-Up Day",
        workDescription:
          "Join a team to clean up the beach, removing plastics and other waste materials.",
        address: "303 Beachside Ave, Coastal City",
        expectedTimeToCompleteWork: "6 hours",
        budget: "$220",
      },
      {
        type: "joinrequest",
        workerName: "Amit Kumar",
        workerDetails:
          "Experienced in sorting and recycling waste materials, reliable and hardworking.",
        avgRating: 4.5,
        totalWork: "540 Hours",
        address: "123 Green Street, Eco City",
      },
      {
        type: "joinrequest",
        workerName: "Sita Devi",
        totalWork: "540 Hours",
        workerDetails:
          "Specializes in collecting plastic waste and has extensive knowledge of recycling processes.",
        avgRating: 4.8,
        address: "456 Clean Avenue, Greenfield",
      },
      {
        type: "joinrequest",
        workerName: "Ravi Singh",
        totalWork: "540 Hours",
        workerDetails:
          "Dedicated worker with experience in waste management and composting.",
        avgRating: 4.6,
        address: "789 Recycle Road, Eco City",
      },
      {
        type: "joinrequest",
        workerName: "Meena Patel",
        totalWork: "540 Hours",
        workerDetails:
          "Expert in segregating different types of waste, efficient and punctual.",
        avgRating: 4.7,
        address: "101 Waste Lane, Clean Town",
      },
      {
        type: "joinrequest",
        workerName: "Vijay Sharma",
        totalWork: "540 Hours",
        workerDetails:
          "Has been working in waste collection for over 5 years, known for reliability and thoroughness.",
        avgRating: 4.4,
        address: "202 Litter Street, Metro City",
      },
    ],
    workers: [
      { name: "birju", availability: true, ratings: 80 },
      { name: "munna", availability: false, ratings: 88 },
    ],
    history: [],
    earnings: [],
  });

  // join and create organisation
  // notification
  // history
  // total earnings
  // if organistion:
  // rag pickers working under
  // service reviews

  const removeNotification = useCallback((e) => {
    const notificationid = e.currentTarget.id;
    setUserDetails((prevState) => {
      const Notifications = [...prevState.Notification];
      Notifications.splice(notificationid, 1);
      return { ...prevState, Notification: Notifications };
    });
  }, []);
  return (
    <div className="p-4 flex flex-col gap-4">
      {/* header */}
      <div className="header flex gap-4 flex-wrap">
        <div className="joinOrganistion flex items-center gap-2 p-4 rounded-full shadow-[0_0_4px_gray] text-xl px-6 max-[600px]:mx-auto">
          <BsBuildingCheck size="1.5rem" /> Join organisation
        </div>
        <div className="createOrganistion flex items-center gap-2 p-4 rounded-full shadow-[0_0_4px_gray] text-xl px-6 max-[600px]:mx-auto">
          <BsBuildingAdd size="1.5rem" /> Create organisation
        </div>
      </div>
      <hr />
      {/* notification */}
      <h1 className="sm:text-3xl font-bold text-xl">Notifications:</h1>
      <div className="notificationList flex flex-col gap-4" key={"notificationList"}>
        {userDetails.Notification.length !== 0 ? (
          userDetails.Notification.map((elem, index) => {
            return (
              <WorkNotification
                key={elem.workTitle}
                totalWork={elem.totalWork}
                workerName={elem.workerName}
                workerDetails={elem.workerDetails}
                type={elem.type}
                avgRating={elem.avgRating}
                workTitle={elem.workTitle}
                workDescription={elem.workDescription}
                address={elem.address}
                expectedTimeToCompleteWork={elem.expectedTimeToCompleteWork}
                budget={elem.budget}
                removeNotification={removeNotification}
                id={index}
              />
            );
          })
        ) : (
          <div className="text-gray-500 p-4 shadow-[inset_0_0_4px_lightgray] rounded-xl" key={"noNotification"}>
            No Notifications yet!
          </div>
        )}
      </div>
      <hr />
      <div className="flex items-center justify-between">
        <h1 className="sm:text-3xl font-bold text-xl">Workers:</h1>
        <PrimaryBtn
          className={"p-4 rounded-full flex items-center gap-2 px-6 text-white"}
        >
          <FaUserPlus size="1.5rem" /> Add worker
        </PrimaryBtn>
      </div>
      <div className="workerList flex flex-wrap gap-4">
        {userDetails.workers.length !== 0 ? (
          userDetails.workers.map((elem) => {
            return (
              <WorkerListItem
                key={elem.name}
                workerName={elem.name}
                ratings={elem.ratings}
                availability={elem.availability}
              />
            );
          })
        ) : (
          <div className="text-gray-500 p-4 shadow-[inset_0_0_4px_lightgray] rounded-xl">
            No worker here! Try adding workers from the button on the top right.
          </div>
        )}
      </div>
      <hr />
      <h1 className="sm:text-3xl font-bold text-xl">Work History:</h1>
      <div className="historyList">
        {userDetails.history.length !== 0 ? (
          userDetails.history.map(() => {})
        ) : (
          <div className="text-gray-500 p-4 shadow-[inset_0_0_4px_lightgray] rounded-xl">
            No work history!
          </div>
        )}
      </div>
      <hr />
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

export default ServiceProvider;
