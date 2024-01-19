import { Poll } from "@/components/shard/types";
import { atom } from "jotai";
export const pollsAtom = atom<Poll[] | null>(null);
