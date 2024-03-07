import { Outlet } from "react-router-dom";

import UserNavigation from "../components/user/UserNavigation";
import UserInfomation from "../components/user/UserInfomation";

function UserLayout() {
  return (
    <div className="w-full h-full overflow-auto px-5 no-scrollbar pb-32">
      <UserInfomation />
      <UserNavigation />
      <Outlet />
    </div>
  );
}

export default UserLayout;
