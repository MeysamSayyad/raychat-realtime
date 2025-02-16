import { useEffect, useRef, useState } from "react";
import ConversationList from "../components/webapp/conversationList";
import { socket } from "../socket";
import { MessageData, MessageObject, Messages } from "../types/main";

import MessageCard from "../components/webapp/AgentmessageCard";
import AgentMessageInput from "../components/webapp/AgentMessageInput";

export default function Webapp() {
  const [selectedChat, setSelectedChat] = useState("");

  const [conversations, setConversations] = useState<MessageData[]>([]);
  const [update, setUpdate] = useState(false);
  const [messages, setMessages] = useState<MessageObject[]>([]);
  const chatRef = useRef<HTMLDivElement>(null);
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
    setConversations((perv) =>
      perv.map((item) => {
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
      })
    );
  };
  const GetuserMessages = (userMessages: Messages) => {
    // get current user massages based on ClientId

    if (userMessages?.success) {
      setMessages(userMessages?.data?.messages);
    }
  };
  useEffect(() => {
    if (chatRef?.current) {
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
      <div className=" shrink-0 w-[16%]">
        <ConversationList
          conversations={conversations}
          selectedChat={selectedChat}
          setSelectedChat={setSelectedChat}
        />
      </div>
      <div className="  w-full max-h-screen">
        {/* ChatSection */}
        <div
          ref={chatRef}
          className="pt-[25px] pl-[31px] pr-[28px] pb-20  flex flex-col gap-[27px] w-full max-h-screen overflow-y-auto "
        >
          {messages?.map((item) => {
            return (
              <MessageCard
                message={item.text}
                user={item.isFromAgent ? "agent" : "client"}
                key={item.id}
              />
            );
          })}
          <AgentMessageInput sendMessage={sendMessage} />
        </div>
      </div>
    </section>
  );
}
