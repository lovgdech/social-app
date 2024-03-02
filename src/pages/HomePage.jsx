import Blog from "../components/home/Blog";
import ActiveUser from "../components/home/ActiveUser";
import CreatePost from "../components/home/CreatePost";
import HeaderPosts from "../components/home/HeaderPosts";
import GroupsList from "../components/home/GroupsList";
import Post from "../components/home/Post";
import MemberList from "../components/home/MemberList";

function HomePage() {
  return (
    <div className="w-full h-full px-5 mt-5 flex gap-5 justify-between">
      <div className="flex-1 w-[300px] h-full overflow-hidden overflow-y-auto flex flex-col gap-2 pb-32 no-scrollbar">
        <Blog />
      </div>
      <div className="flex-[2] h-full overflow-hidden overflow-y-auto flex flex-col gap-2 no-scrollbar pb-32">
        <CreatePost />
        <HeaderPosts />
        <Post like={true} comment={true} image={true} />
        <Post like={true} image={false} share={true} />
        <Post image={true} />
        <Post comment={true} />
      </div>
      <div className="flex-1 w-[300px] h-full overflow-hidden overflow-y-auto flex flex-col gap-2 no-scrollbar pb-32">
        <ActiveUser />
        <GroupsList />
        <MemberList />
      </div>
    </div>
  );
}

export default HomePage;
