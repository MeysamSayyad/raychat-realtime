import { Dispatch } from "react";
import ConversationCard from "./conversationCard";
import { MessageData } from "../../types/main";

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
      <h1 className="pr-[24px] font-normal mb-[26px] text-[20px]">
        لیست کاربران
      </h1>
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
