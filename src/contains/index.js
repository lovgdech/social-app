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
    path: "/",
    icon: GanttChartSquare,
  },
  {
    title: "My Profile",
    path: "/user/profile",
    icon: User,
  },
  {
    title: "Notifications",
    path: "/user/notifications",
    icon: Bell,
  },
  {
    title: "My Photos",
    path: "/user/photos",
    icon: Camera,
  },
  {
    title: "Inbox",
    path: "/user/chats",
    icon: MessageCircle,
  },
  {
    title: "My Friends",
    path: "/user/friends",
    icon: UserPlus,
  },
  {
    title: "My Groups",
    path: "/user/groups",
    icon: Users,
  },
  {
    title: "Settings",
    path: "/user/setting",
    icon: Settings,
  },
];

export const navLinks = [
  {
    path: "/",
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
    data: [
      "Latest Activity",
      "What’s New",
      "Most popular topics",
      "Write New Post",
    ],
  },
  {
    path: "/blogs",
    title: "blogs",
    icon: ChevronDown,
    data: [" Blog Default", "Blog Classic", "Blog Grid"],
  },
  {
    path: "/photos",
    title: "photos",
  },
  // {
  //   path: "/shops",
  //   title: "shops",
  //   icon: ChevronDown,
  //   data: [" Product", "Cart", "Checkout", "My account"],
  // },/user
];

export const forums = [
  {
    title: "Metafans common room",
    sub: "Get to know other learners, share your learning tips and stay up to date on the latest new and events from MetaFans",
    data: [
      {
        title: "Welcome & Announcements",
        sub: "Announcements and Updates",
        topics: "3",
        replies: "4",
        group: "Get free access to a hands-on data science project!",
      },
      {
        title: "Community Help & Questions",
        sub: "Find guidance and ask for help",
        topics: "6",
        replies: "11",
        group: "Can’t upgrade to pay for a Professional Certificate program",
      },
      {
        title: "Networking & Social Discussion",
        sub: "Meet other learners and get to more",
        topics: "5",
        replies: "11",
        group:
          "Research on forum participation as a predictor of course completion",
      },
      {
        title: "Job Search Resources",
        sub: "Resources and guides",
        topics: "2",
        replies: "4",
        group: "Job Search Webinars & Events",
      },
    ],
  },
  {
    title: "COMMUNITY GROUPS",
    sub: "Find answers, ask questions, and connect with our community around the world.",
    data: [
      {
        title: " Private: MetaFans Community",
        sub: "A private group for people who are creating or who have created a private authoring community on MetaFans.",
        topics: "2",
        replies: "1",
        group: "[MetaFans for the Military Community] Let’s Connect!",
      },
      {
        title: " Language Learners",
        sub: "Are you learning English? Are you looking for people to practice or study with? This is a group for anyone",
        topics: "3",
        replies: "4",
        group:
          "Introduce yourself here to the English Language Learners group!",
      },
    ],
  },
  {
    title: "INFORMATION / VIP FILE",
    sub: "You Can Download File For Vip Account",
    data: [
      {
        title: "Welcome & Announcements",
        sub: "Announcements and Updates",
        topics: "3",
        replies: "4",
        group: "Get free access to a hands-on data science project!",
      },
      {
        title: "Welcome & Announcements",
        sub: "Announcements and Updates",
        topics: "3",
        replies: "4",
        group: "Get free access to a hands-on data science project!",
      },
      {
        title: "Welcome & Announcements",
        sub: "Announcements and Updates",
        topics: "3",
        replies: "4",
        group: "Get free access to a hands-on data science project!",
      },
    ],
  },
  {
    title: "$$$",
    sub: "How to Make Money In Internet",
    data: [
      {
        title: "Welcome & Announcements",
        sub: "Announcements and Updates",
        topics: "3",
        replies: "4",
        group: "Get free access to a hands-on data science project!",
      },
      {
        title: "Welcome & Announcements",
        sub: "Announcements and Updates",
        topics: "3",
        replies: "4",
        group: "Get free access to a hands-on data science project!",
      },
      {
        title: "Welcome & Announcements",
        sub: "Announcements and Updates",
        topics: "3",
        replies: "4",
        group: "Get free access to a hands-on data science project!",
      },
    ],
  },
];
