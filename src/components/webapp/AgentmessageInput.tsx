import { useEffect, useState } from "react";

import TextArea from "../utils/Input";

export default function AgentMessageInput({
  sendMessage,
  selectedChat,
}: {
  sendMessage: (text: string) => void;
  selectedChat: string;
}) {
  const [message, setMessage] = useState("");
  useEffect(() => {
    setMessage("");
  }, [selectedChat]);

  return (
    <section className="backdrop-blur-xs w-full   border border-gray-300   rounded-lg right-[10px] flex flex-row items-center   ">
      <span className=" h-[58px] flex items-center border-gray-300 pr-[12px]  pl-[15px] border-l  justify-center">
        <img src="/icons/Bookmark.svg" />
      </span>
      <section className="  shadow   w-full  p-1 gap-[6px]  flex  items-center justify-center">
        <div className="p-3 flex  w-full items-center justify-center">
          <span className=" w-full flex items-center gap-2">
            <TextArea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="  w-full"
              placeholder="اینجا بنویسید ..."
            />
          </span>
        </div>
        <button
          onClick={() => {
            // send Message and set Input Value to ''
            sendMessage(message);
            setMessage("");
          }}
          disabled={message.trim() === ""}
          className=" cursor-pointer p-3 shrink-0 text-white rounded-full transition-all flex gap-[9px] items-center justify-center bg-agent-main disabled:bg-gray-400 "
        >
          <p className=" text-[13px]">ارسال پیام</p>
          <img src="/icons/Send.svg" />
        </button>
      </section>
    </section>
  );
}
