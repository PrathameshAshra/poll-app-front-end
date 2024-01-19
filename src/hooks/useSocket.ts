// useSocket.ts
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

const useSocket = (serverUrl: string) => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const newSocket = io(serverUrl);

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, [serverUrl]);

  return socket;
};

export default useSocket;
