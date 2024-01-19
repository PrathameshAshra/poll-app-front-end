import { Poll } from "@/components/shard/types";
import axios from "axios";
import firebase from "firebase/app";
import { getAuth } from "firebase/auth";
import { firebaseApp } from "./firebase.auth.service";

const pollInstance = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 1000,
});

export default pollInstance;
const getAuthToken = async () => {
  try {
    const token = localStorage.getItem("Token");
    return "Bearer " + token;
  } catch (err) {
    console.log("getAuthToken", err);
  }
};
// Add a request interceptor
pollInstance.interceptors.request.use(
  async function (config) {
    // Do something before request is sent
    const token = await getAuthToken();
    if (!token) {
      return config;
    }
    config.headers.Authorization = token;

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
pollInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export const getPolls = (userId: string) => {
  return pollInstance
    .get<Poll[]>(`/polls/user/${userId}`)
    .then(({ status, data }) => {
      if (status !== 200) {
        throw new Error("No Records found");
      }
      return data;
    });
};
export const postPoll = async (data: Poll) => {
  try {
    return await pollInstance.post<string>("/polls", data);
  } catch (error) {
    console.warn(error);
    throw error;
  }
};
export const addReaction = async (optionId: string, pollId: string) => {
  try {
    return await pollInstance.post<string>("/reactions", {
      optionId: optionId,
      pollId: pollId,
    });
  } catch (error) {
    console.warn(error);
    throw error;
  }
};
