import React from "react";
import PollView from "./pollView";
import { TypographyH2 } from "../ui/typography";
import PollResult from "./PollResult";
import { Poll } from "./types";
import { useAtom } from "jotai";
import { pollsAtom } from "@/page/polls/atoms";

const PollToDo = () => {
  const [polls, setPolls] = useAtom(pollsAtom);

  return (
    <div className="flex flex-col p-4">
      <div>
        <TypographyH2>Heading</TypographyH2>
      </div>
      <div>
        {polls ? (
          polls.map((i) => <PollResult key={i.id} isEditMode={true} />)
        ) : (
          <>No Polls Found</>
        )}
      </div>
    </div>
  );
};

export default PollToDo;
