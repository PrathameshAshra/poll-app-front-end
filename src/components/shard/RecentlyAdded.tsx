import React from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import PollResult from "./PollResult";

const RecentlyAdded = () => {
  return (
    <div className="flex flex-col p-4">
      <div className="flex align-middle justify-between">
        <h2 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Recently Closed
        </h2>
        <Button variant="outline">Create a poll</Button>
      </div>
      <Carousel>
        <CarouselContent>
          <CarouselItem className="basis-1/2">
            <PollResult />
          </CarouselItem>
          <CarouselItem className="basis-1/2">
            <PollResult />
          </CarouselItem>
          <CarouselItem className="basis-1/2">
            <PollResult />
          </CarouselItem>
          <CarouselItem className="basis-1/2">
            <PollResult />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default RecentlyAdded;
