function InboxMemberItem() {
  return (
    <div className="flex px-4 py-2 cursor-pointer hover:bg-stone-100 transition">
      <img
        className="w-10 h-10 rounded-full object-cover"
        src="/assets/images/chat-avatar.jpg"
        alt="chat avatar"
      />
      <div className="hidden lg:inline ml-2">
        <p className="text-base font-medium leading-5">SnowBell</p>
        <span className="text-sm text-stone-500">You: Hello</span>
      </div>
    </div>
  );
}

export default InboxMemberItem;
