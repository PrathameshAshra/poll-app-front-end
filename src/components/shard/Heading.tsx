import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";

const WelcomeHeading = () => {
  return (
    <Card className="p-6 gap-4 flex flex-col">
      <div className="flex justify-center">
        <img
          src="https://randomuser.me/api/portraits/women/24.jpg"
          alt=""
          className="rounded-full"
        />
      </div>

      <div className="flex justify-center text-center flex-col gap-4">
        <div>Heading</div>
        <div>
          Please add your content here. Keep it short and simple. And smile :)
        </div>
      </div>
    </Card>
  );
};

export default WelcomeHeading;
