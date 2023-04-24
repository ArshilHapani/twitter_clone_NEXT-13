import React from "react";
import { Tooltip, Avatar } from "@mui/material";
import { GiFeather } from "react-icons/gi";
import { sidebarItems } from "@/utils/sidebarItems";
import userAvatar from "../assets/Snapchat-1795123412.jpg";
import Image from "next/image";

const Sidebar = () => {
    return (
        <div className="p-4 flex flex-col justify-evenly h-full md:ml-8 w-fit items-center ml-0 ">
            {sidebarItems.map((item, index) => (
                <div key={Math.random() + Date.now() + index + item.tooltipLabel} className="h-fit w-fit sidebar-icons " >
                    <Tooltip title={item.tooltipLabel} placement="bottom">
                        <i className="text-3xl text-white cursor-pointer">{item.icon}</i>
                    </Tooltip>
                </div>
            ))}
            {/* add a tweet button */}
            <Tooltip title="Tweet" placement="bottom" >
                <div className=" cursor-pointer h-14 w-14 mb-4 rounded-full bg-[#1d9bf0] flex items-center justify-center" >
                    <i className="text-3xl text-white">
                        <GiFeather />
                    </i>
                </div>
            </Tooltip>
            {/* Profile */}
            <Tooltip title="Accounts" placement="bottom" >
                <div>
                    <Image src={userAvatar} alt="Profile" className=" cursor-pointer h-12 w-12 rounded-full object-cover" />
                </div>
            </Tooltip>
        </div>
    );
};

export default Sidebar;
