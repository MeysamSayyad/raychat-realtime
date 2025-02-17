import { Dispatch } from "react";
import ConversationCard from "./conversationCard";
import { MessageData } from "../../types/main";
import { Link } from "react-router";

export default function ConversationList({
  selectedChat,
  setSelectedChat,
  conversations,
}: {
  selectedChat: string;
  setSelectedChat: Dispatch<string>;
  conversations: MessageData[];
}) {
  return (
    <section
      dir="rtl"
      className=" max-h-screen  py-[24px] flex flex-col items-start "
    >
      <span className="pr-[24px] font-normal mb-[26px] text-[20px] flex w-full items-center justify-between">
        {" "}
        <h1 className="">لیست کاربران</h1>
        <Link to={"/client"}>
          <span className=" text-xs px-2 bg-agent-main text-white rounded-full py-1 ">
            Client&#128279;
          </span>
        </Link>
      </span>

      <div className=" overflow-y-auto flex flex-col w-full items-center">
        {/* user list */}
        {conversations?.map((item, index) => {
          return (
            <ConversationCard
              key={`${item.clientId}-${index}`}
              onClick={() => setSelectedChat(item?.clientId)}
              name={item?.clientId}
              selected={selectedChat == item?.clientId}
              unread={item?.unread}
            />
          );
        })}
      </div>
    </section>
  );
}
