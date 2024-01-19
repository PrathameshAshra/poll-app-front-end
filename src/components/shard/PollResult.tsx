import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "../ui/card";
import { Progress } from "../ui/progress";
import {
  TypographyH3,
  TypographyMuted,
  TypographyP,
  TypographySmall,
} from "../ui/typography";
import { Heart } from "lucide-react";
import { Button } from "../ui/button";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { pollsAtom } from "@/page/polls/atoms";
import { useAtom } from "jotai";

type ViewMode = {
  isEditMode: boolean;
};
const PollResult = ({ isEditMode }: ViewMode) => {
  return (
    <Card className="p-6 gap-4 flex flex-col">
      <div className="flex">
        <div className="min-w-[75px] min-h-[75px] max-w-[75px] max-h-[75px]">
          <img
            src="https://randomuser.me/api/portraits/women/26.jpg"
            alt=""
            className="rounded"
          />
        </div>
        <div className="flex justify-center text-left flex-col  ml-4">
          <div>
            <TypographyH3>UserName</TypographyH3>
          </div>
          <div></div>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
            laborum molestias, dolorem beatae ea obcaecati. Molestiae
            voluptatibus ullam, reiciendis debitis inventore nesciunt
            voluptatum? Corrupti harum nobis mollitia reprehenderit dolores
            soluta.
          </div>
        </div>
      </div>
      <hr className={`border-t border-gray-300 `} />
      <div className="flex flex-col gap-6">
        {!isEditMode ? (
          <>
            <OptionWithPercentage />
            <OptionWithPercentage />
            <OptionWithPercentage />{" "}
          </>
        ) : (
          <RadioGroup defaultValue="option-one">
            <OptionWithLike></OptionWithLike>
            <OptionWithLike></OptionWithLike>
            <OptionWithLike></OptionWithLike>
          </RadioGroup>
        )}
      </div>
      <hr className={`border-t border-gray-300 `} />

      <div className="flex justify-between">
        <TypographyMuted>1200 Reactions </TypographyMuted>
        <TypographyMuted>Closed on: 15:00 PM 15-01-2024</TypographyMuted>
      </div>
    </Card>
  );
};

export default PollResult;

const OptionWithPercentage = () => {
  return (
    <div className="flex flex-col gap-1">
      <TypographyP>Option1</TypographyP>
      <Progress value={33} className="mb-2" />
      <TypographySmall>33%</TypographySmall>
    </div>
  );
};
const OptionWithLike = () => {
  return (
    <div className="flex flex-row justify-between gap-1 ">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-two" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
    </div>
  );
};
