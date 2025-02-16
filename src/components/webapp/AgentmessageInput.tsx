import { useState } from "react";
import Input from "../utils/Input";

export default function AgentMessageInput({
  sendMessage,
}: {
  sendMessage: (text: string) => void;
}) {
  const [message, setMessage] = useState("");

  return (
    <section className="w-[80%] left-[20px] border border-gray-300   rounded-lg right-[10px] flex flex-row items-center  bottom-[16px] fixed">
      <span className=" h-[58px] flex items-center border-gray-300 pr-[12px]  pl-[15px] border-l  justify-center">
        <img src="/icons/Bookmark.svg" />
      </span>
      <section className="  shadow backdrop-blur-xs  w-full  p-1 gap-[6px]  flex  items-center justify-center">
        <div className="p-3 flex  w-full items-center justify-center">
          <span className=" w-full flex items-center gap-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="  w-full"
              placeholder="اینجا بنویسید ..."
            />
          </span>
        </div>
        <button
          onClick={() => {
            setMessage(""), sendMessage(message);
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
