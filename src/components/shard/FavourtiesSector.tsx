import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";

const FavourtiesSector = () => {
  return (
    <Card
      className="p-6 gap-4 flex flex-col"
      style={{ height: "-webkit-fill-available" }}
    >
      <CardHeader className="">Faviourties</CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="flex">
          <div className="min-w-[75px] min-h-[75px] max-w-[75px] max-h-[75px]">
            <img
              src="https://randomuser.me/api/portraits/women/26.jpg"
              alt=""
            />
          </div>
          <div className="flex justify-center text-left flex-col gap-4 ml-4">
            <div>UserId</div>
            <div>3 Live Polls</div>
          </div>
        </div>
        <div className="flex">
          <div className="min-w-[75px] min-h-[75px] max-w-[75px] max-h-[75px]">
            <img
              src="https://randomuser.me/api/portraits/women/25.jpg"
              alt=""
            />
          </div>
          <div className="flex justify-center text-left flex-col gap-4 ml-4">
            <div>UserId</div>
            <div>3 Live Polls</div>
          </div>
        </div>
        <div className="flex">
          <div className="min-w-[75px] min-h-[75px] max-w-[75px] max-h-[75px]">
            <img src="https://randomuser.me/api/portraits/men/30.jpg" alt="" />
          </div>
          <div className="flex justify-center text-left flex-col gap-4 ml-4">
            <div>UserId</div>
            <div>3 Live Polls</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FavourtiesSector;
