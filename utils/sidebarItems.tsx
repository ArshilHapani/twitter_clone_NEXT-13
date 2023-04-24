import { RiHome7Fill } from "react-icons/ri";
import { BiHash } from "react-icons/bi";
import { HiOutlineBell, HiOutlineUser } from "react-icons/hi2";
import { MdOutlineMail } from "react-icons/md";
import { FiBookmark } from "react-icons/fi";
import { FaTwitterSquare } from "react-icons/fa";
import { VscVerified } from "react-icons/vsc";
import { SlOptions } from "react-icons/sl";

export const sidebarItems = [
  {
    tooltipLabel: "Home",
    icon: <RiHome7Fill />,
  },
  {
    tooltipLabel: "Explore",
    icon: <BiHash />,
  },
  {
    tooltipLabel: "Notifications",
    icon: <HiOutlineBell />,
  },
  {
    tooltipLabel: "Messages",
    icon: <MdOutlineMail />,
  },
  {
    tooltipLabel: "Bookmarks",
    icon: <FiBookmark />,
  },
  {
    tooltipLabel: "Twitter Blue",
    icon: <FaTwitterSquare />,
  },
  {
    tooltipLabel: "Verified Organization",
    icon: <VscVerified />,
  },
  {
    tooltipLabel: "Profile",
    icon: <HiOutlineUser />,
  },
  {
    tooltipLabel: "More",
    icon: <SlOptions />,
  },
];
