import React from "react";
import { Card } from "../ui/card";

function NotificationPanel() {
  return (
    <Card className="flex flex-col bg-white h-full">
      <div>Heading</div>
      <div className=" ">
        <Notification />
      </div>
    </Card>
  );
}

export default NotificationPanel;

const Notification = () => {
  return (
    <>
      <div className="flex">
        <div className="min-w-[75px] min-h-[75px] max-w-[75px] max-h-[75px]">
          <img src="https://randomuser.me/api/portraits/women/26.jpg" alt="" />
        </div>
        <div className="flex justify-center text-left flex-col gap-4 ml-4">
          <div>UserId</div>
          <div>Created a poll</div>
        </div>
      </div>
    </>
  );
};
