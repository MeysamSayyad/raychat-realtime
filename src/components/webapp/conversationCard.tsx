export default function ConversationCard({
  name,
  onClick,
  selected,
  unread,
}: {
  name: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  selected?: boolean;
  unread: string;
}) {
  return (
    <div
      onClick={onClick}
      className={` ${
        selected ? " bg-agent-yellow" : " bg-white"
      } py-[12px]  border w-full pl-3 pr-[24px] cursor-pointer  border-gray-200 flex justify-between items-center`}
    >
      <span className=" flex flex-row justify-start items-center">
        <p className=" text-sm text-gray-500">کاربر :</p>
        <p className=" text-[14px]">{name}</p>
      </span>
      <span className="  relative text-xs text-white w-[20px] flex items-center justify-center rounded-full   h-[20px] bg-agent-main">
        <span className=" absolute rounded-full top-0.5 left-0.5 bg-agent-main h-[16px] animate-ping w-[16px]"></span>
        <p className="z-10"> {unread}</p>
      </span>
    </div>
  );
}
