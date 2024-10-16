import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { HiOutlineMail, HiOutlineUser } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import { IoNotificationsSharp } from "react-icons/io5";

interface TwitterSidebarButton {
  title: string;
  icons: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icons: <GoHome />,
  },
  {
    title: "Explore",
    icons: <IoIosSearch />,
  },
  {
    title: "Notification",
    icons: <IoNotificationsSharp />,
  },
  {
    title: "Message",
    icons: <HiOutlineMail />,
  },
  {
    title: "Profile",
    icons: <HiOutlineUser />,
  },
];

const Sidebar: React.FC = () => {
  return (
    <div className="col-span-3  pt-6">
      <div className="text-3xl h-fit w-fit hover:bg-gray-500 p-2 rounded-full cursor-pointer transition-all">
        <BsTwitterX />
      </div>
      <div className="mt-4 text-2xl p-1">
        <ul>
          {sidebarMenuItems.map((items) => (
            <li
              className="flex justify-start items-center gap-4 hover:bg-gray-500 rounded-full cursor-pointer transition-all px-2 py-2 w-fit"
              key={items.title}
            >
              <span>{items.icons}</span>
              <span>{items.title}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 pr-6 font-semibold">
          <button className="text-lg bg-[#1d9bf0] hover:bg-sky-400 cursor-pointer p-3 rounded-full w-full ">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
