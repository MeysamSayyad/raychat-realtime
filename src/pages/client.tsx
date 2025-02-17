import { useEffect, useRef, useState } from "react";
import MessageCard from "../components/client/messageCard";
import MessageInput from "../components/client/messageInput";
import { socket } from "../socket";

import { MessageObject, Messages } from "../types/main";
import { Link } from "react-router";

export default function Client() {
  const [name, setName] = useState("");
  const [clientId, setClientId] = useState("");
  const [messages, setMessages] = useState<MessageObject[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const sendMessage = (text: string) => {
    socket.emit("user-message", {
      clientId: clientId,
      text: text,
    });

    // socket.emit("get-client-conversations", { clientId }, GetuserMessages);
  };
  const UpdateMessages = (val: MessageObject) => {
    // add new messages

    setMessages((prevmessage) => [...prevmessage, val]);
  };
  const GetuserMessages = (userMessages: Messages) => {
    // get all current messages
    if (userMessages?.success) {
      setMessages(userMessages?.data?.messages);
    }
  };
  const RegisterClient = () => {
    // register client and store clientID
    if (!localStorage?.clientId) {
      const clientId = `${
        (Date.now() % 10000) + Math.floor(Math.random() * 1000)
      }`;
      setClientId(`${clientId}`);

      localStorage.setItem("clientId", `${clientId}`);
      localStorage.setItem("name", name);
      socket.emit("register-user", {
        clientId: `${clientId}`,
        name: name,
      });
      setIsAuthenticated(true);
    } else {
      const name = localStorage.getItem("name");
      const clientId = localStorage.getItem("clientId");
      setClientId(`${clientId}`);
      socket.emit("register-user", {
        clientId: clientId,
        name: name,
      });

      setIsAuthenticated(true);
    }
  };
  useEffect(() => {
    socket.on("message", UpdateMessages);
    if (localStorage?.clientId && localStorage?.name) {
      RegisterClient();
    }
    return () => {
      socket.off("message");
    };
  }, []);
  useEffect(() => {
    if (chatRef?.current) {
      // scroll messages down every time new message arrives
      chatRef.current.scrollTop = chatRef?.current?.scrollHeight;
    }
  }, [messages]);
  useEffect(() => {
    if (isAuthenticated && clientId) {
      socket.emit(
        "get-client-conversations",
        { clientId: clientId },
        GetuserMessages
      );
    }
  }, [isAuthenticated]);
  return (
    <section
      dir="rtl"
      className=" overflow-hidden w-full max-h-[100vh]  flex flex-col items-center"
    >
      <div className="w-full py-[15px] px-[12px] flex items-center justify-between h-[64px] bg-client-200  ">
        {/* header section */}
        <span className=" flex items-center justify-start gap-2">
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
        </span>
        <Link to={"/webapp"}>
          <span className=" text-xs px-2 bg-agent-main text-white rounded-full py-1 ">
            Webapp&#128279;
          </span>
        </Link>
      </div>
      <div
        ref={chatRef}
        className=" pb-20  overflow-y-auto gap-2 px-3 py-2 flex flex-col w-full items-start"
      >
        {/* chat section */}
        {!isAuthenticated && (
          <MessageCard
            user="agent"
            message={
              <span
                className={` p-3 gap-2 break-after-all flex items-start flex-col justify-center `}
              >
                {/* register Form */}
                <p className=" break-normal">
                  روزت بخیر برای ادامه نام خودت رو ثبت کن.
                </p>
                <span className=" gap-1 text-sm  flex items-center  justify-center">
                  <input
                    id="name"
                    placeholder="نام خود را وارد کنید."
                    className="!text-sm outline-0  group !border-b transition-all !border-solid hover:border-gray-400 border-white focus:border-gray-400"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <button
                    onClick={RegisterClient}
                    disabled={name.trim() === ""}
                    className=" w-[22px] cursor-pointer shrink-0 rounded-full transition-all flex items-center justify-center bg-client-200 disabled:bg-gray-400 h-[22px] "
                  >
                    <img width={10} src="/icons/Send.svg" />
                  </button>
                </span>
              </span>
            }
          />
        )}
        {messages?.map((item) => {
          // mapping through messages
          return (
            <MessageCard
              message={item.text}
              user={item.isFromAgent ? "agent" : "client"}
              date={item.timestamp}
              key={item.id}
            />
          );
        })}
        <span
          className=" flex justify-center items-center left-0
bottom-[16px] w-full fixed px-[10px]"
        >
          {/* message Input Field */}
          <MessageInput sendMessage={sendMessage} />
        </span>
      </div>
    </section>
  );
}
