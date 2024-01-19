import React from "react";
import { Card, CardHeader } from "../ui/card";
import { Archive, Settings } from "lucide-react";

const SettingsCard = () => {
  return (
    <Card className="p-6 gap-4 flex flex-col">
      <CardHeader className="">Settings</CardHeader>
      <div className="flex flex-row ">
        <Settings /> <div>Settings</div>
      </div>
      <div className="flex flex-row ">
        <Archive /> <div>Arvhived</div>
      </div>
    </Card>
  );
};

export default SettingsCard;
