import {
  Bell,
  Camera,
  ChevronDown,
  GanttChartSquare,
  MessageCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";

export const links = [
  {
    title: "My Timeline",
    path: "/activity",
    icon: GanttChartSquare,
  },
  {
    title: "My Profile",
    path: "/profile",
    icon: User,
  },
  {
    title: "Notifications",
    path: "/notifications",
    icon: Bell,
  },
  {
    title: "My Photos",
    path: "/photos",
    icon: Camera,
  },
  {
    title: "Inbox",
    path: "/chats",
    icon: MessageCircle,
  },
  {
    title: "My Friends",
    path: "/friends",
    icon: UserPlus,
  },
  {
    title: "My Groups",
    path: "/groups",
    icon: Users,
  },
  {
    title: "Settings",
    path: "/setting",
    icon: Settings,
  },
];

export const navLinks = [
  {
    path: "/activity",
    title: "Activity",
  },
  {
    path: "/groups",
    title: "Groups",
  },
  {
    path: "/members",
    title: "members",
  },
  {
    path: "/forums",
    title: "forums",
    icon: ChevronDown,
  },
  {
    path: "/blog",
    title: "blog",
    icon: ChevronDown,
  },
  {
    path: "/photos",
    title: "photos",
  },
  {
    path: "/shops",
    title: "shops",
    icon: ChevronDown,
  },
];
