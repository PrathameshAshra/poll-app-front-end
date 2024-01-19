import { addReaction, getPolls, postPoll } from "@/service/polls.service";
import { useContext, useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";

import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "@radix-ui/react-label";
import { Poll, Option } from "./types";
import useWebsocket from "../hooks/useWebSocket";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Checkbox } from "@radix-ui/react-checkbox";
import { AuthContext } from "@/Routes/authenticatedRoute";
import { Heart, Timer } from "lucide-react";
import { TypographyH3, TypographyP, TypographySmall } from "../ui/typography";
import Divider from "./divider";
const websocketUrl = "ws://localhost:8080";

type PollViewType = {
  type?: "Single" | "Multiple";
  poll: Poll;
};
const PollsView = ({ type = "Single", poll }: PollViewType) => {
  const handleOptionClick = async (optionId: string) => {
    const res = await addReaction(optionId, poll.id);
  };
  return (
    <Card className="p-6">
      <div className="flex justify-between">
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
        <div>
          <Timer />
        </div>
      </div>
      <div>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5"></div>
          <div className="flex flex-col space-y-1.5">
            {poll.options.map((field) => {
              return (
                <>
                  <OptionView
                    key={field.name}
                    name={field.name}
                    like={field.like}
                    userIds={field.userIds}
                    onClick={handleOptionClick}
                    id={field.id}
                    createdAt={field.createdAt}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PollsView;

type OptionsEvent = {
  onClick: (e: string) => void;
};
const OptionView = ({
  name,
  like,
  userIds,
  id,
  onClick,
}: Option & OptionsEvent) => {
  const { user } = useContext(AuthContext);
  if (!user?.uid) {
    return <>Cant display Option for unauthenticated user</>;
  }
  if (!name) {
    return <>Cant display Option without name</>;
  }
  const isReacted = userIds?.includes(user.uid);
  return (
    <>
      <div className="flex flex-row gap-1 items-center justify-between">
        <h5 className="text-xl font-semibold tracking-tight">Caption</h5>
        <div className="flex  gap-2 items-center">
          <p>300</p>
          <Button variant="outline" size="icon">
            <Heart className="h-4 w-4 " />
          </Button>
        </div>
      </div>
      <Divider />
    </>
    // <div className="flex justify-between align-middle border-b-slate-400 border-b-2">
    //   <p>Caption</p>
    //   <div className="flex gap-4">
    //     300 <Heart />
    //   </div>
    // </div>
  );
};
