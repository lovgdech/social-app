import {
  Camera,
  File,
  GlobeIcon,
  Lock,
  Smile,
  User,
  Users,
  Video,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@radix-ui/react-dialog";
import { useState } from "react";

function CreatePost() {
  const [mode, setMode] = useState({
    icon: <GlobeIcon className="mr-2" size={16} />,
    title: "Public",
  });

  const [value, setValue] = useState("public");

  function handleChangeMode() {
    if (value === "public") {
      setMode({
        icon: <GlobeIcon className="mr-2" size={16} />,
        title: "Public",
      });
    }
    if (value === "friend") {
      setMode({
        icon: <User className="mr-2" size={16} />,
        title: "Friends",
      });
    }
    if (value === "private") {
      setMode({
        icon: <Lock className="mr-2" size={16} />,
        title: "Only me",
      });
    }
    if (value === "group") {
      setMode({
        icon: <Users className="mr-2" size={16} />,
        title: "Groups",
      });
    }
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-full border flex h-max border-stone-300 px-4 py-2 bg-white items-center gap-2 rounded-lg cursor-pointer">
          <img
            className="w-9 h-9 rounded-full object-cover"
            src="/assets/images/avatar.jpg"
            alt="avatar"
          />
          <p className="text-stone-500 flex-1 text-left">
            What&#39;s on your mind?
          </p>
          <Camera className="text-stone-500" size={20} />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle asChild>
            <h4 className="text-center border-b pb-5">Create post</h4>
          </DialogTitle>
        </DialogHeader>
        <div className="w-full flex items-center gap-2">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="/assets/images/avatar.jpg"
            alt=""
          />
          <div>
            <h4 className="text-lg font-medium text-black">John</h4>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="h-8 text-sm" size="sm" variant="outline">
                  {mode.icon}
                  {mode.title}
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle asChild>
                    <h4 className="text-center border-b pb-5">
                      Who can see your post?
                    </h4>
                  </DialogTitle>
                </DialogHeader>
                <form className="w-full">
                  <div className="flex items-center w-full gap-2 justify-between hover:bg-stone-100 px-4 rounded-md py-1">
                    <label
                      className="flex-1 flex items-center gap-2"
                      htmlFor="public"
                    >
                      <Button variant="ghost" size="icon">
                        <GlobeIcon />
                      </Button>
                      <div>
                        <p className="font-medium text-lg">Public</p>
                        <span className="text-sm">
                          Visible to anyone, on or off this site
                        </span>
                      </div>
                    </label>
                    <input
                      className="w-5 h-5"
                      type="radio"
                      id="public"
                      name="mode"
                      value="public"
                      onChange={(e) => setValue(e.target.value)}
                      defaultChecked
                    />
                  </div>
                  <div className="flex items-center w-full gap-2 justify-between hover:bg-stone-100 px-4 rounded-md py-1">
                    <label
                      className="flex-1 flex items-center gap-2"
                      htmlFor="friend"
                    >
                      <Button variant="ghost" size="icon">
                        <User />
                      </Button>
                      <div>
                        <p className="font-medium text-lg">Friends</p>
                        <span className="text-sm">
                          Visible only to your connections
                        </span>
                      </div>
                    </label>
                    <input
                      className="w-5 h-5"
                      type="radio"
                      id="friend"
                      name="mode"
                      value="friend"
                      onChange={(e) => setValue(e.target.value)}
                    />
                  </div>
                  <div className="flex items-center w-full gap-2 justify-between hover:bg-stone-100 px-4 rounded-md py-1">
                    <label
                      className="flex-1 flex items-center gap-2"
                      htmlFor="private"
                    >
                      <Button variant="ghost" size="icon">
                        <Lock />
                      </Button>
                      <div>
                        <p className="font-medium text-lg">Only me</p>
                        <span className="text-sm">Visible only to you</span>
                      </div>
                    </label>
                    <input
                      className="w-5 h-5"
                      type="radio"
                      id="private"
                      name="mode"
                      value="private"
                      onChange={(e) => setValue(e.target.value)}
                    />
                  </div>
                  <div className="flex items-center w-full gap-2 justify-between hover:bg-stone-100 px-4 rounded-md py-1">
                    <label
                      className="flex-1 flex items-center gap-2"
                      htmlFor="group"
                    >
                      <Button variant="ghost" size="icon">
                        <Users />
                      </Button>
                      <div>
                        <p className="font-medium text-lg">Post in Group</p>
                        <span className="text-sm">
                          Visible to members of a group
                        </span>
                      </div>
                    </label>
                    <input
                      className="w-5 h-5"
                      type="radio"
                      id="group"
                      name="mode"
                      value="group"
                      onChange={(e) => setValue(e.target.value)}
                    />
                  </div>
                </form>
                <DialogFooter>
                  <DialogClose asChild>
                    <div className="flex items-center gap-2">
                      <Button variant="destructive">Cancel</Button>
                      <Button onClick={handleChangeMode} type="button">
                        Save
                      </Button>
                    </div>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <textarea
          className="w-full border border-stone-300 outline-none focus:border-teal-500 my-2 rounded-md"
          rows={7}
        ></textarea>
        <DialogFooter className="w-full flex items-center justify-between">
          <div className="flex-1 flex items-center gap-1">
            <Button variant="ghost" size="icon">
              <Camera className="text-stone-500" size="20" />
            </Button>
            <Button variant="ghost" size="icon">
              <Video className="text-stone-500" size="20" />
            </Button>
            <Button variant="ghost" size="icon">
              <File className="text-stone-500" size="20" />
            </Button>
            <Button variant="ghost" size="icon">
              <Smile className="text-stone-500" size="20" />
            </Button>
          </div>

          <Button variant="outline">Post</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default CreatePost;
