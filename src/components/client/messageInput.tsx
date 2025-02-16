import { useState } from "react";
import Input from "../utils/Input";

export default function MessageInput() {
  const [message, setMessage] = useState("");
  return (
    <section className=" fixed rounded-lg shadow backdrop-blur-xs  w-full  left-[10px] right-[10px] p-1 bottom-[16px] gap-[6px]  flex  items-center justify-center">
      <div className="p-3 flex  w-full items-center justify-center">
        {" "}
        <span className=" w-full flex items-center gap-2">
          <img src="/icons/Voice.svg" />
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className=" w-full"
            placeholder="اینجا بنویسید ..."
          />
        </span>
        <span className=" flex items-center gap-1">
          {" "}
          <img src="/icons/Emoji.svg" />
          <img src="/icons/Attach.svg" />
        </span>
      </div>
      <button
        disabled={message.trim() === ""}
        className=" w-[42px] shrink-0 rounded-full transition-all flex items-center justify-center bg-client-200 disabled:bg-gray-400 h-[42px] "
      >
        <img src="/icons/Send.svg" />
      </button>
    </section>
  );
}
