import MessageCard from "../components/client/messageCard";
import MessageInput from "../components/client/messageInput";

export default function Client() {
  return (
    <section
      dir="rtl"
      className=" overflow-hidden w-full max-h-[100vh]  flex flex-col items-center"
    >
      <div className="w-full gap-2 py-[15px] px-[12px] flex items-center justify-start h-[64px] bg-client-200  ">
        {/* header section */}
        <span className="  relative bg-client-100 rounded-full flex items-center justify-center border-2 border-white w-[36px] h-[36px] ">
          JD
          <span className=" bg-green-500 absolute border-2 border-white rounded-full w-[10px] h-[10px] top-0 right-0"></span>
        </span>
        <span className=" text-white flex flex-col items-start ">
          <p className=" text-sm">پشتیبانی آنلاین</p>
          <p className=" text-xs opacity-90 font-light">
            پاسخگوی سوالات شما هستیم
          </p>
        </span>
      </div>
      <div className=" pb-16  overflow-y-auto gap-2 px-3 py-2 flex flex-col w-full items-start">
        {/* chat section */}
        <MessageCard user="agent" />
        <MessageCard user="client" />
        <MessageCard user="agent" />
        <MessageCard user="client" />
        <MessageCard user="agent" />
        <MessageCard user="client" />
        <MessageCard user="agent" />
        <MessageCard user="client" />
        <MessageCard user="agent" />
        <MessageCard user="client" />
        <MessageCard user="agent" />
        <MessageCard user="client" />
        <MessageCard user="agent" />
        <MessageCard user="client" />
        <MessageCard user="agent" />
        <MessageCard user="client" />
        <MessageCard user="agent" />
        <MessageCard user="client" />
        <MessageCard user="agent" />
        <MessageCard user="client" />
        <MessageCard user="agent" />
        <MessageCard user="client" />
        <span className=" w-full relative px-[10px]">
          <MessageInput />
        </span>
      </div>
    </section>
  );
}
