function GroupItem() {
  return (
    <div className="border border-stone-300 rounded-lg overflow-hidden bg-white cursor-pointer text-black">
      <img
        className="w-full h-36 object-cover"
        src="/assets/images/bg-group.jpg"
        alt="background"
      />
      <div className="h-36 w-full flex flex-col justify-center gap-1 px-4 relative">
        <img
          className="absolute w-20 h-16 -top-10 left-4 rounded-lg"
          src="/assets/images/avatar-group.jpg"
          alt="avatar group"
        />
        <h3 className="font-bold text-lg">Animals</h3>
        <p className="text-sm">Public Group / 1 number</p>
        <div className="flex items-center">
          <img
            className="w-6 h-6 rounded-full"
            src="/assets/images/avatar.jpg"
            alt="image"
          />
          <img
            className="w-6 h-6 rounded-full -translate-x-2"
            src="/assets/images/avatar.jpg"
            alt="image"
          />
          <img
            className="w-6 h-6 rounded-full -translate-x-4"
            src="/assets/images/avatar.jpg"
            alt="image"
          />
          <img
            className="w-6 h-6 rounded-full -translate-x-6"
            src="/assets/images/avatar.jpg"
            alt="image"
          />
          <img
            className="w-6 h-6 rounded-full -translate-x-8"
            src="/assets/images/avatar.jpg"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
}

export default GroupItem;
