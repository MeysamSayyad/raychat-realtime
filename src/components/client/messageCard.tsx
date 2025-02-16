import React from "react";

export default function MessageCard({ user }: { user: "agent" | "client" }) {
  return (
    <section
      className={` ${
        user === "agent" ? "self-start" : "self-end"
      } flex flex-row gap-2 items-center`}
    >
      {user === "agent" ? (
        <span className=" !font-mono  self-start relative bg-client-100 rounded-full flex items-center justify-center border border-white text-[13px] w-[30px] h-[30px] ">
          JD
        </span>
      ) : (
        <span className=" text-gray-600 text-[9px]">
          <p>۱۱:۲۳ ب.ظ</p>
        </span>
      )}
      <span
        className={` ${
          user === "agent"
            ? "bg-white border-gray-light rounded-br-none border"
            : "bg-client-200 text-white rounded-bl-none"
        } max-w-[60vw] break-all text-xs font-medium   rounded-lg p-2`}
      >
        fgfghbgfhbfghfghfghfghghgfhhghghfghfghfghfghfghgfhgfh
      </span>
      {user === "agent" && (
        <span className=" text-gray-600 text-[9px]">
          <p>۱۱:۲۳ ب.ظ</p>
        </span>
      )}
    </section>
  );
}
