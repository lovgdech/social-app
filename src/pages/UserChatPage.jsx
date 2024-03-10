import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import InboxMemberItem from "../components/inbox/InboxMemberItem";

function UserChatPage() {
  return (
    <div className="relative w-full h-max border border-stone-300 rounded-lg bg-white mt-4 overflow-hidden">
      <div className="w-full flex border-b border-stone-300">
        <div className="w-44 sm:max-w-[350px] md:w-full flex items-center justify-between h-16 px-2">
          <input
            className="w-full px-2 py-2 border border-stone-300 bg-stone-50 text-black rounded-full outline-teal-500"
            type="text"
            placeholder="Search member..."
          />
        </div>
        <div className="flex-1 flex items-center px-2 flex-shrink-0">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="/assets/images/chat-avatar.jpg"
            alt="chat avatar"
          />
          <div className="ml-2">
            <p className="text-base font-medium leading-3">SnowBell</p>
            <span className="text-[11px] text-stone-500">
              Active 1 year ago
            </span>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[420px] sm:h-[520px] flex overflow-hidden">
        <div className="w-max lg:w-full h-full lg:max-w-[300px] overflow-auto flex flex-col py-2">
          <InboxMemberItem />
          <InboxMemberItem />
          <InboxMemberItem />
          <InboxMemberItem />
          <InboxMemberItem />
          <InboxMemberItem />
          <InboxMemberItem />
          <InboxMemberItem />
          <InboxMemberItem />
          <InboxMemberItem />
          <InboxMemberItem />
          <InboxMemberItem />
        </div>
        <div className="h-full flex-1 flex flex-col overflow-hidden">
          <div className="w-full h-full overflow-scroll overflow-x-hidden px-4 bg-stone-100 border-b py-4">
            <ul className="w-full h-full flex flex-col gap-2 items-end">
              <p className="text-center w-full text-sm">March 3,2024</p>
              <li className="relative text-white bg-sky-600 rounded-md w-max max-w-[75%] lg:max-w-[50%]">
                <p className="text-left px-2 py-4 pt-1">Hello</p>
                <span className="text-[10px] absolute bottom-[1px] right-2">
                  01:56 am
                </span>
              </li>
              <li className="relative text-white bg-sky-600 rounded-md w-max max-w-[75%] lg:max-w-[50%]">
                <p className="text-left px-2 py-4 pt-1">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                  consequuntur vitae, vel temporibus tempore nisi aperiam, quae
                  itaque sequi, autem ipsa. Ipsa reprehenderit excepturi non
                  dolores veniam? Atque, sunt. Error!
                </p>
                <span className="text-[10px] absolute bottom-[1px] right-2">
                  01:56 am
                </span>
              </li>
              <li className="relative text-white bg-sky-600 rounded-md w-max max-w-[75%] lg:max-w-[50%]">
                <p className="text-left px-2 py-4 pt-1">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                  consequuntur vitae, vel t
                </p>
                <span className="text-[10px] absolute bottom-[1px] right-2">
                  01:56 am
                </span>
              </li>
              <li className="relative text-white bg-sky-600 rounded-md w-max max-w-[75%] lg:max-w-[50%]">
                <p className="text-left px-2 py-4 pt-1">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                  consequuntur vitae, vel te, quae itaque sequi, autem ipsa.
                  Ipsa reprehenderit excepturi non dolores veniam? Atque, sunt.
                  Error!
                </p>
                <span className="text-[10px] absolute bottom-[1px] right-2">
                  01:56 am
                </span>
              </li>
              <li className="relative text-white bg-sky-600 rounded-md w-max max-w-[75%] lg:max-w-[50%]">
                <p className="text-left px-2 py-4 pt-1">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                  consequuntur vitae, vel temporibus temporea. Ipsa
                  reprehenderit excepturi non dolores veniam? Atque, sunt.
                  Error!
                </p>
                <span className="text-[10px] absolute bottom-[1px] right-2">
                  01:56 am
                </span>
              </li>
              <li className="relative text-white bg-sky-600 rounded-md w-max max-w-[75%] lg:max-w-[50%]">
                <p className="text-left px-2 py-4 pt-1">
                  Lorem ipsum, dolor sit amet consectenderit excepturi non
                  dolores veniam? Atque, sunt. Error!
                </p>
                <span className="text-[10px] absolute bottom-[1px] right-2">
                  01:56 am
                </span>
              </li>
              <li className="relative text-white bg-sky-600 rounded-md w-max max-w-[75%] lg:max-w-[50%]">
                <p className="text-left px-2 py-4 pt-1">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                  consequuntur vitaError!
                </p>
                <span className="text-[10px] absolute bottom-[1px] right-2">
                  01:56 am
                </span>
              </li>
              <li className="relative text-white bg-sky-600 rounded-md w-max max-w-[75%] lg:max-w-[50%]">
                <p className="text-left px-2 py-4 pt-1">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                  consequuntur vitae, vel tempor Ipsa reprehenderit excepturi
                  non dolores veniam? Atque, sunt. Error!
                </p>
                <span className="text-[10px] absolute bottom-[1px] right-2">
                  01:56 am
                </span>
              </li>
              <li className="relative text-white bg-sky-600 rounded-md w-max max-w-[75%] lg:max-w-[50%]">
                <p className="text-left px-2 py-4 pt-1">
                  Lorem ipsum, dolor sitnt. Error!
                </p>
                <span className="text-[10px] absolute bottom-[1px] right-2">
                  01:56 am
                </span>
              </li>
              <li className="relative text-white bg-sky-600 rounded-md w-max max-w-[75%] lg:max-w-[50%]">
                <p className="text-left px-2 py-4 pt-1">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                  consequuntur vitae, vel temporIpsa reprehenderit excepturi non
                  dolores veniam? Atque, sunt. Error!
                </p>
                <span className="text-[10px] absolute bottom-[1px] right-2">
                  01:56 am
                </span>
              </li>
              <li className="relative text-white bg-sky-600 rounded-md w-max max-w-[75%] lg:max-w-[50%]">
                <p className="text-left px-2 py-4 pt-1">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                  consequuntu, autem ipsa. Ipsa reprehenderit excepturi non
                  dolores veniam? Atque, sunt. Error!
                </p>
                <span className="text-[10px] absolute bottom-[1px] right-2">
                  01:56 am
                </span>
              </li>
            </ul>
          </div>
          <form className="w-full flex px-4 flex-shrink-0 py-4">
            <input
              className="py-2 px-4 text-base border border-stone-300 rounded-md flex-1 outline-teal-500"
              type="text"
              placeholder="Aa"
            />
            <Button onClick={(e) => e.preventDefault()}>
              <Send size={20} />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserChatPage;
