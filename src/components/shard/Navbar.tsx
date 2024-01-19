import { PanelRightDashed, RotateCcw } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";

const Navbar = () => {
  return (
    <div className="bg-[#F18A3C] px-6 flex flex-row justify-between h-[60px] items-center">
      <p>LogoF</p>
      <div className="flex flex-row gap-5 items-center">
        <div>
          <Input type="email" placeholder="Email" />
        </div>
        <div>
          <RotateCcw />
        </div>
        <div>
          <PanelRightDashed />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
