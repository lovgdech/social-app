import { Camera } from "lucide-react";

function CreatePost() {
  return (
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
  );
}

export default CreatePost;
