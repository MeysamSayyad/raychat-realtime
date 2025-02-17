import { useEffect, useRef, useState } from "react";
import ConversationList from "../components/webapp/conversationList";
import { socket } from "../socket";
import { MessageData, MessageObject, Messages } from "../types/main";

import AgentMessageInput from "../components/webapp/AgentmessageInput";
import AgentMessageCard from "../components/webapp/AgentmessageCard";

export default function Webapp() {
  const [selectedChat, setSelectedChat] = useState("");

  const [conversations, setConversations] = useState<MessageData[]>([]);
  const [update, setUpdate] = useState(false);
  const [messages, setMessages] = useState<MessageObject[]>([]);
  const chatRef = useRef<HTMLDivElement>(null);
  const exitChat = () => {
    setSelectedChat("");
  };
  const sendMessage = (text: string) => {
    socket.emit("agent-message", {
      clientId: selectedChat,
      text: text,
    });
    setUpdate((perv) => !perv);

    // socket.emit("get-client-conversations", { clientId }, GetuserMessages);
  };
  const UpdateConversation = (data: { conversation: MessageData }) => {
    // update conversations that get new message
    setSelectedChat((perv) => {
      if (perv === data.conversation.clientId) {
        setMessages(data.conversation.messages);
      }
      return perv;
    });

    setConversations((perv) => {
      if (
        perv.filter((item) => item.clientId == data?.conversation?.clientId)
          .length <= 0
      ) {
        return [...perv, data.conversation];
      } else {
        return perv.map((item) => {
          return {
            ...item,
            messages:
              item.clientId == data?.conversation?.clientId
                ? data.conversation.messages
                : item.messages,
            unread:
              item.clientId == data?.conversation?.clientId
                ? data?.conversation?.unread
                : item.unread,
          };
        });
      }
    });
  };
  const GetuserMessages = (userMessages: Messages) => {
    // get current user massages based on ClientId

    if (userMessages?.success) {
      setMessages(userMessages?.data?.messages);
    }
  };
  useEffect(() => {
    if (chatRef?.current) {
      // scroll messages down every time new message arrives
      chatRef.current.scrollTop = chatRef?.current?.scrollHeight;
    }
  }, [messages]);
  useEffect(() => {
    socket.emit("register-agent");
    socket.on("existing-conversations", (data) => {
      setConversations(data?.conversations);
    });
    socket.on("new-user-message", UpdateConversation);
    return () => {
      socket.off("existing-conversations");
      socket.off("new-user-message");
    };
  }, []);
  useEffect(() => {
    socket.emit(
      "get-client-conversations",
      { clientId: selectedChat },
      GetuserMessages
    );
  }, [update, selectedChat]);
  return (
    <section
      dir="rtl"
      className=" overflow-clip h-full flex items-start w-full "
    >
      {/* sideBar */}
      <div className=" bg-white h-screen  shrink-0 w-full lg:min-w-[220px] lg:w-[16%]">
        <ConversationList
          conversations={conversations}
          selectedChat={selectedChat}
          setSelectedChat={setSelectedChat}
        />
      </div>

      <div
        className={`lg:static z-30 fixed ${
          selectedChat ? "block" : "hidden"
        } lg:block  bg-white  w-full h-full lg:max-h-screen`}
      >
        {selectedChat === "" ? (
          <div className=" w-full h-screen flex justify-center items-center">
            <span>برای مشاهده پیام ها یک کاربر را انتخاب کنید.</span>
          </div>
        ) : (
          <>
            <div className="w-full lg:hidden gap-2 py-[15px] px-[12px] flex items-center justify-between h-[64px] bg-agent-main  ">
              <span className=" w-full text-white flex justify-self-start  items-center ">
                <p className=" text-sm ">کاربر :</p>
                <p className=" text-[14px]">{selectedChat}</p>
              </span>
              <button
                onClick={exitChat}
                className=" cursor-pointer p-1 rounded-full text-sm text-white"
              >
                &#9664;
              </button>
            </div>
            {/* ChatSection */}
            <div
              ref={chatRef}
              className="pt-[25px] pl-[31px] pr-[28px] lg:pb-22 pb-38  flex flex-col gap-[27px] w-full max-h-screen overflow-y-auto "
            >
              {messages?.map((item) => {
                // mapping through messages
                return (
                  <AgentMessageCard
                    message={item.text}
                    user={item.isFromAgent ? "agent" : "client"}
                    key={item.id}
                  />
                );
              })}
              <span className=" bottom-[16px] lg:w-[80%] w-full pl-[15px] px-[10px] fixed items-center flex justify-center left-0">
                {selectedChat && (
                  <AgentMessageInput
                    selectedChat={selectedChat}
                    sendMessage={sendMessage}
                  />
                )}
              </span>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
