import ActiveUser from "@/components/home/ActiveUser";
import MemberList from "../components/home/MemberList";
import { Search } from "lucide-react";
import MemberItem from "../components/member/MemberItem";

function MemberPage() {
  return (
    <div className="w-full h-full mt-5 px-5 overflow-hidden flex gap-4">
      <div className="flex-1 flex-col gap-2 overflow-y-auto flex no-scrollbar pb-32">
        <div className="w-full bg-white border border-stone-300 rounded-lg flex items-center justify-between px-4">
          <p className=" relative font-medium border-b-2 px-2 border-teal-500 py-3">
            Active members
            <span className="absolute -right-6 text-[12px] py-[2px] px-2 bg-teal-500 rounded-full text-white top-1">
              9
            </span>
          </p>
          <div className="flex items-center gap-1">
            <Search className="text-stone-500" size={20} />
            <input
              className="p-2 text-base outline-none"
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>

        <div className="w-full grid grid-cols-3 gap-2">
          <MemberItem />
          <MemberItem />
          <MemberItem />
          <MemberItem />
          <MemberItem />
          <MemberItem />
          <MemberItem />
          <MemberItem />
          <MemberItem />
        </div>

        <p className="text-black text-sm mt-2">Viewing 1 - 9 of 9 members</p>
      </div>
      <div className="w-[300px] flex-col gap-2 overflow-y-auto flex no-scrollbar pb-32">
        <ActiveUser />
        <MemberList />
      </div>
    </div>
  );
}

export default MemberPage;
