"use client";

import { useEffect } from "react";

const WIDGET_CONTAINER_ID = "chat-win";
const WIDGET_ORIGIN = "https://api.swipies.app";
const WIDGET_LAUNCHER_SRC =
  "https://api.swipies.app/next-chats/widget?shared_id=19ead202d9ba11f084927698e8e9bab8&from=chat&auth=mCQGqjz_JIx2xnhDBDkFqkmwzy9xWSaZ&locale=en&mode=master&streaming=false";

type ChatMessage =
  | { type: "CREATE_CHAT_WINDOW"; src: string }
  | { type: "TOGGLE_CHAT"; isOpen: boolean }
  | { type: "SCROLL_PASSTHROUGH"; deltaY: number }
  | Record<string, never>;

const ChatWidget = () => {
  useEffect(() => {
    const handleMessage = (event: MessageEvent<ChatMessage>) => {
      if (event.origin !== WIDGET_ORIGIN || !event.data?.type) return;

      if (event.data.type === "CREATE_CHAT_WINDOW") {
        const existing = document.getElementById(WIDGET_CONTAINER_ID);
        if (existing) return;

        const iframe = document.createElement("iframe");
        iframe.id = WIDGET_CONTAINER_ID;
        iframe.src = event.data.src;
        iframe.style.cssText =
          "position:fixed;bottom:104px;right:24px;width:380px;height:500px;border:none;background:transparent;z-index:9998;display:none";
        iframe.allow = "microphone;camera";
        iframe.frameBorder = "0";
        document.body.appendChild(iframe);
      } else if (event.data.type === "TOGGLE_CHAT") {
        const chatWindow = document.getElementById(
          WIDGET_CONTAINER_ID,
        ) as HTMLIFrameElement | null;
        if (chatWindow) {
          chatWindow.style.display = event.data.isOpen ? "block" : "none";
        }
      } else if (event.data.type === "SCROLL_PASSTHROUGH") {
        window.scrollBy(0, event.data.deltaY);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
      const existing = document.getElementById(WIDGET_CONTAINER_ID);
      existing?.remove();
    };
  }, []);

  return (
    <iframe
      src={WIDGET_LAUNCHER_SRC}
      style={{
        position: "fixed",
        bottom: 0,
        right: 0,
        width: "100px",
        height: "100px",
        border: "none",
        background: "transparent",
        zIndex: 9999,
      }}
      frameBorder="0"
      allow="microphone;camera"
      title="Swipies chat launcher"
    />
  );
};

export default ChatWidget;

