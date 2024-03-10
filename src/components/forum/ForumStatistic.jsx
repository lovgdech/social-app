function ForumStatistic() {
  return (
    <div className="w-full border border-stone-300 rounded-md px-4 pb-4 bg-white">
      <h4 className="font-medium my-2 text-lg">Forum statistics</h4>
      <ul className="flex flex-col gap-1">
        <li className="flex items-center justify-between gap-2 py-[2px]">
          <p className="text-sm text-black">Registered Users</p>
          <span className="text-sm">14</span>
        </li>
        <li className="flex items-center justify-between gap-2 py-[2px]">
          <p className="text-sm text-black">Forums</p>
          <span className="text-sm">14</span>
        </li>
        <li className="flex items-center justify-between gap-2 py-[2px]">
          <p className="text-sm text-black">Topics</p>
          <span className="text-sm">30</span>
        </li>
        <li className="flex items-center justify-between gap-2 py-[2px]">
          <p className="text-sm text-black">Replies</p>
          <span className="text-sm">40</span>
        </li>
        <li className="flex items-center justify-between gap-2 py-[2px]">
          <p className="text-sm text-black">Topic Tags</p>
          <span className="text-sm">25</span>
        </li>
      </ul>
    </div>
  );
}

export default ForumStatistic;
