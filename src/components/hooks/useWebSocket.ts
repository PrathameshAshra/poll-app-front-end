// useWebsocket.ts
import { useEffect, useState } from "react";

type MessageHandler = (data: any) => void;

interface WebSocketConfig {
  onOpen?: () => void;
  onClose?: () => void;
  onError?: (error: Event) => void;
}

const useWebsocket = (
  url: string,
  config?: WebSocketConfig
): {
  send: (data: any) => void;
  connect: () => void;
  disconnect: () => void;
  addMessageHandler: (handler: MessageHandler) => void;
  removeMessageHandler: (handler: MessageHandler) => void;
} => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [messageHandlers, setMessageHandlers] = useState<MessageHandler[]>([]);

  const connect = () => {
    try {
      console.log(url);
      const newSocket = new WebSocket(url);

      newSocket.onopen = () => {
        if (config?.onOpen) {
          config.onOpen();
        }
      };

      newSocket.onclose = () => {
        if (config?.onClose) {
          config.onClose();
        }
      };

      newSocket.onerror = (error) => {
        if (config?.onError) {
          config.onError(error);
        }
      };

      newSocket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        console.log("data", event, "socket get");
        messageHandlers.forEach((handler) => handler(data));
      };

      setSocket(newSocket);
    } catch (error) {
      console.warn(error, "Handling error");
    }
  };

  const disconnect = () => {
    if (socket) {
      socket.close();
    }
  };

  const send = (data: any) => {
    if (socket) {
      socket.send(JSON.stringify(data));
    }
  };

  const addMessageHandler = (handler: MessageHandler) => {
    setMessageHandlers((prevHandlers) => [...prevHandlers, handler]);
  };

  const removeMessageHandler = (handler: MessageHandler) => {
    setMessageHandlers((prevHandlers) =>
      prevHandlers.filter((prevHandler) => prevHandler !== handler)
    );
  };

  useEffect(() => {
    return () => {
      disconnect();
    };
  }, []);

  return {
    send,
    connect,
    disconnect,
    addMessageHandler,
    removeMessageHandler,
  };
};

export default useWebsocket;
