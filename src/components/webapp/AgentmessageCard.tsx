import { ReactNode } from "react";

export default function MessageCard({
  user,
  message,
}: {
  message?: ReactNode | string;
  date?: string;
  user: "agent" | "client";
}) {
  return (
    <section
      className={` ${
        user === "agent" ? "self-start" : "self-end"
      } flex flex-row gap-2 items-center`}
    >
      <span
        className={` ${
          user === "agent"
            ? "bg-white px-[17px]  rounded-br-none "
            : "bg-agent-main px-[38px] text-white rounded-bl-none"
        } max-w-[60vw] break-all text-xs font-medium   rounded-lg py-[16px] `}
      >
        {message}
      </span>
    </section>
  );
}
