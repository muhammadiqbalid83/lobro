"use client";

import Image from "next/image";
import { assets } from "../assets/assets";
import {
  CircleHelp,
  History,
  MessageSquare,
  Plus,
  Settings,
} from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const [extended, setExtended] = useState(false);
  return (
    <div className="min-h-screen inline-flex flex-col justify-between bg-[#f4f4f5] px-[25px] py-[15px]">
      <div className="top">
        <Image
          className="w-5 block cursor-pointer"
          src={assets.menu_icon}
          onClick={() => setExtended((prev) => !prev)}
        />
        <div className="mt-[20px] inline-flex items-center gap-2 px-[10px] py-[10px] bg-[#18181b] text-white rounded-full cursor-pointer text-sm">
          <Plus />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="flex flex-col">
            <p className="mt-[30px] mb-5">Recent</p>
            <div className="flex items-start gap-2 p-2 pr-10 rounded-lg cursor-pointer hover:bg-black hover:text-white">
              <MessageSquare className="w-5" />
              <p>What is react ...</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="bottom flex flex-col">
        <div className="bottom-item recent-entry flex gap-2">
          <CircleHelp className="w-5" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry flex gap-2">
          <History className="w-5" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry flex gap-2">
          <Settings className="w-5" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
}
