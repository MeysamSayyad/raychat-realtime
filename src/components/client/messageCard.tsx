import { ReactNode } from "react";

export default function MessageCard({
  user,
  message,
  date,
}: {
  message?: ReactNode | string;
  date?: string;
  user: "agent" | "client";
}) {
  const convertToJalali = () => {
    if (date) {
      let options: Intl.DateTimeFormatOptions = {
        minute: "2-digit",
        hour12: true,
        hourCycle: "h12",
        hour: "numeric",
      };
      const dateObject = new Date(date).toLocaleDateString("fa-IR", options);
      let dateString = dateObject.replace("قبل‌ازظهر", "ق.ظ");
      dateString = dateString.replace("بعدازظهر", "ب.ظ");
      return dateString;
    }
  };
  convertToJalali();
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
        <span className=" lg:text-[10px] text-gray-600 text-[9px]">
          <p>{convertToJalali()}</p>
        </span>
      )}
      <span
        className={` ${
          user === "agent"
            ? "bg-white border-gray-light rounded-br-none border"
            : "bg-client-200 text-white rounded-bl-none"
        } max-w-[60vw] break-words lg:text-[15px] whitespace-pre-line text-xs font-medium   rounded-lg p-2`}
      >
        {message}
      </span>
      {user === "agent" && (
        <span className=" text-gray-600 lg:text-[10px] text-[9px]">
          <p>{convertToJalali()}</p>
        </span>
      )}
    </section>
  );
}
