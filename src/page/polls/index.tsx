// import { AuthContext } from "@/Routes/authenticatedRoute";
// import PollAdd from "@/components/shard/PollAdd";
// import PollsView from "@/components/shard/pollView";
// import { Poll } from "@/components/shard/types";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   Dialog,
//   DialogClose,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import useSocket from "@/hooks/useSocket";
// import { getPolls } from "@/service/polls.service";
// import { Copy } from "lucide-react";
// import React, { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

import { AuthContext } from "@/Routes/authenticatedRoute";
import FavourtiesSector from "@/components/shard/FavourtiesSector";
import WelcomeHeading from "@/components/shard/Heading";
import NotificationPanel from "@/components/shard/NotificationPanel";
import PollToDo from "@/components/shard/PollToDo";
import RecentlyAdded from "@/components/shard/RecentlyAdded";
import SettingsCard from "@/components/shard/settingsCard";
import { Poll } from "@/components/shard/types";
import { getPolls } from "@/service/polls.service";
import { useAtom } from "jotai";
import { Heading } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pollsAtom } from "./atoms";

// type SocketMessage = {
//   optionId: string;
//   pollId: string;
//   reaction: string;
//   userId: string;
// };

// // Your existing updatePolls function
// const updatePolls = (
//   polls: Poll[] | null,
//   pollId: string,
//   userId: string,
//   optionId: string
// ) => {
//   if (!polls) return null;
//   const rewPolls = polls.map((poll) => {
//     if (poll.id !== pollId) {
//       return poll;
//     }
//     const newOptions = poll.options.map((option) => {
//       if (option.id !== optionId) {
//         return option;
//       }
//       return {
//         ...option,
//         like: option.like + 1,
//         userIds: [...option.userIds, userId],
//       };
//     });
//     return {
//       ...poll,
//       options: newOptions,
//     };
//   });
//   console.log(rewPolls, "Pigv");
//   return rewPolls;
// };

// const PollsPage = () => {
//   const [polls, setPolls] = useState<Poll[] | null>(null);
//   const socket = useSocket("ws://localhost:3000/");
//   const [messages, setMessages] = useState<string[]>([]);

//   const { user } = useContext(AuthContext);
//   const { externalUser } = useParams();
//   console.log(polls);
//   useEffect(() => {
//     if (!socket) return;

//     socket.on("reaction", (item: SocketMessage) => {
//       console.log(item, "Got from server");
//       setPolls((prevPolls) =>
//         updatePolls(prevPolls, item.pollId, item.userId, item.optionId)
//       );
//     });

//     return () => {
//       socket.disconnect();
//     };
//   }, [socket]);

//   useEffect(() => {
//     const fetchPolls = async () => {
//       if (!user?.uid) {
//         return;
//       }
//       const polls = await getPolls(externalUser || user?.uid);
//       if (!polls) {
//         setPolls(null);
//         return;
//       }

//       setPolls(polls);
//     };
//     fetchPolls();
//     return () => {};
//   }, [user, externalUser]);

//   if (!user) {
//     return <>No User Found</>;
//   }
//   const addPoll = () => {};
//   const copyToClipboard = async () => {
//     const shareLink = window.location + user?.uid;
//     await navigator.clipboard.writeText(shareLink);
//   };
//   return (
//     <Dialog>
//       <div className="flex">
//         <div className="bg-gray-800 text-white h-screen w-1/6 p-4">
//           <h2 className="text-2xl font-semibold mb-4">Poll App</h2>
//           <nav>{/* Add more NavLink components for other sections */}</nav>
//         </div>
//         <div className="flex-1 p-4">
//           <div className="flex justify-between">
//             <h2 className="text-2xl font-semibold mb-4">Main Section</h2>
//             <DialogTrigger asChild>
//               <Button onClick={addPoll} type="button">
//                 +
//               </Button>
//             </DialogTrigger>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <PollsView
//               key={"1"}
//               poll={{
//                 caption: "Poll",
//                 id: "2",
//                 options: [
//                   {
//                     createdAt: "",
//                     id: "",
//                     like: 12,
//                     name: "testomg",
//                     userIds: [],
//                   },
//                 ],
//               }}
//               type={"Single"}
//             />
//             {/* {polls ? (
//               Object.values(polls).map((poll, index) => (
//                 <PollsView
//                   key={poll.id}
//                   poll={poll}
//                   type={index % 2 === 0 ? "Single" : "Multiple"}
//                 />
//               ))
//             ) : (
//               <>No Poll Found</>
//             )} */}
//           </div>
//         </div>
//         <DialogContent className="sm:max-w-md">
//           <DialogHeader>
//             <DialogTitle>Add a new Poll</DialogTitle>
//             <DialogDescription>
//               Anyone who has this link will be able to view this.
//             </DialogDescription>
//           </DialogHeader>
//           <PollAdd></PollAdd>
//           <div className="flex items-center space-x-2">
//             <div className="grid flex-1 gap-2">
//               <Label htmlFor="link" className="sr-only">
//                 Link
//               </Label>
//               <Input
//                 id="link"
//                 defaultValue={window.location + user?.uid}
//                 readOnly
//               />
//             </div>
//             <Button
//               type="submit"
//               size="sm"
//               className="px-3"
//               onClick={copyToClipboard}
//             >
//               <span className="sr-only">Copy</span>
//               <Copy className="h-4 w-4" />
//             </Button>
//           </div>
//           <DialogFooter className="sm:justify-start">
//             <DialogClose asChild>
//               <Button type="button" variant="secondary">
//                 Close
//               </Button>
//             </DialogClose>
//           </DialogFooter>
//         </DialogContent>
//       </div>
//     </Dialog>
//   );
// };

// export default PollsPage;
const PollsPage = () => {
  const [polls, setPolls] = useAtom(pollsAtom);
  const { user } = useContext(AuthContext);
  const { externalUser } = useParams();

  useEffect(() => {
    const fetchPolls = async () => {
      if (!user?.uid) {
        return;
      }
      const polls = await getPolls(externalUser || user?.uid);
      if (!polls) {
        setPolls(null);
        return;
      }

      setPolls(polls);
    };
    fetchPolls();
    return () => {};
  }, [user, externalUser]);
  return (
    <div
      className={`grid grid-cols-12 gap-4 p-4  h-full`}
      // style={{
      //   height: `calc(100vh - 60px)`,
      // }}
    >
      <div className={`col-span-3 h-full rounded-md flex flex-col`}>
        <div className="flex flex-col h-full  ">
          <WelcomeHeading />
          <FavourtiesSector />
          <SettingsCard />
        </div>
      </div>

      <div className={`col-span-9 h-full rounded-md flex flex-col`}>
        <div className="flex flex-col  ">
          <RecentlyAdded />
          <PollToDo />
        </div>
      </div>

      {/* <div className={`col-span-3 h-full p-4 rounded-md`}>
      <NotificationPanel />
    </div> */}
    </div>
  );
};
export default PollsPage;
