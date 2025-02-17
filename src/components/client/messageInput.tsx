import { useRef, useState } from "react";

import EmojiSelector from "./EmojiSelector";
import TextArea from "../utils/Input";

export default function MessageInput({
  sendMessage,
}: {
  sendMessage: (text: string) => void;
}) {
  const [message, setMessage] = useState("");
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);

  const EmojiPickerRef = useRef<HTMLSpanElement>(null);
  const ToggleEmojiPicker = (newValue?: boolean) => {
    setOpenEmojiPicker(newValue ? newValue : !openEmojiPicker);

    openEmojiPicker !== true && EmojiPickerRef.current?.focus();
  };
  const AddEmoji = (value: string) => {
    setMessage(message + value);
  };

  return (
    <section className=" h-auto  rounded-lg shadow backdrop-blur-xs  w-full  p-1  gap-[6px]  flex  items-center justify-center">
      <div className="p-3 border border-gray-400  rounded-xl flex  w-full items-center justify-center">
        <span className=" w-full flex items-center gap-2">
          <img src="/icons/Voice.svg" />
          <TextArea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className=" w-full"
            placeholder="اینجا بنویسید ..."
          />
        </span>
        <span className=" flex items-center gap-1">
          <span className="relative flex flex-col items-center">
            <span
              ref={EmojiPickerRef}
              className=" -left-1 outline-0 bottom-12 absolute "
              tabIndex={0}
              onBlur={() => ToggleEmojiPicker(false)}
            >
              {openEmojiPicker && <EmojiSelector onSelect={AddEmoji} />}
            </span>
            <img
              className=" cursor-pointer"
              onClick={() => ToggleEmojiPicker()}
              src="/icons/Emoji.svg"
            />
          </span>

          <img src="/icons/Attach.svg" />
        </span>
      </div>
      <button
        onClick={() => {
          setMessage(""), sendMessage(message);
        }}
        disabled={message.trim() === ""}
        className=" cursor-pointer w-[42px] shrink-0 rounded-full transition-all flex items-center justify-center bg-client-200 disabled:bg-gray-400 h-[42px] "
      >
        <img src="/icons/Send.svg" />
      </button>
    </section>
  );
}
