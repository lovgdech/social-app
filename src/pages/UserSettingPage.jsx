import { MessageCircleWarning } from "lucide-react";

import { Button } from "@/components/ui/button";

function UserSettingPage() {
  return (
    <form className="w-full h-max flex flex-col gap-4 mt-4 bg-white p-4 border border-stone-300 rounded-lg">
      <h3 className="text-center text-xl font-medium">Email & Password</h3>
      <p>Update your email and or password.</p>
      <div className="flex flex-col gap-1">
        <label className="font-medium" htmlFor="password">
          Current Password (required to update email or change current password)
        </label>
        <input
          className="py-2 px-4 text-base outline-teal-500 rounded-lg border bg-stone-50 max-w-[450px]"
          type="password"
          id="password"
          name="password"
        />
        <p className="text-sm hover:underline w-max">Lost your password?</p>
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-medium" htmlFor="email">
          Account Email
        </label>
        <input
          className="py-2 px-4 text-base outline-teal-500 rounded-lg border bg-stone-50 max-w-[450px]"
          type="email"
          id="email"
          name="email"
          value="demo@metafans.com"
        />
      </div>
      <div className="w-full flex border border-stone-300 items-center rounded-md overflow-hidden mt-4">
        <button className="w-10 h-10 flex bg-sky-500 text-white items-center justify-center flex-shrink-0">
          <MessageCircleWarning size="20" />
        </button>
        <p className="px-4 text-sm md:text-base">
          Click on the &#34;Generate Password&#34; button to change your
          password.
        </p>
      </div>
      <div className="flex gap-2 justify-end">
        <Button className="w-max" type="button" variant="destructive">
          Generate Password
        </Button>
        <Button className="w-max" onClick={(e) => e.preventDefault()}>
          Save Changes
        </Button>
      </div>
    </form>
  );
}

export default UserSettingPage;
