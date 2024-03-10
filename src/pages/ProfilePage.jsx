function ProfilePage() {
  return (
    <>
      <div className="border-b border-stone-300 w-full my-4">
        <ul className="w-full flex items-center gap-6">
          <li className="py-2 px-1 border-b-2 border-teal-500">View</li>
          <li className="py-2 px-1">Edit</li>
          <li className="py-2 px-1 hidden sm:inline">Change Profile Photo</li>
          <li className="py-2 px-1 hidden sm:inline">Change Cover Image</li>
        </ul>
      </div>

      <div className="w-full bg-white rounded-lg border border-stone-300 overflow-hidden">
        <h3 className="font-medium text-xl px-4 py-3">View profile</h3>
        <div className="w-full border-t border-stone-300">
          <div className="px-8">
            <h4 className="border-b border-stone-300 py-2 font-medium">
              General Information
            </h4>
            <ul className="flex flex-col gap-1 text-stone-500">
              <li className="w-full flex gap-2 items-center py-2 font-medium">
                <p className="min-w-[150px] sm:min-w-[200px] md:min-w-[300px]">
                  First name
                </p>
                <p>Jogn</p>
              </li>
              <li className="w-full flex gap-2 items-center py-2 font-medium">
                <p className="min-w-[150px] sm:min-w-[200px] md:min-w-[300px]">
                  Last name
                </p>
                <p>Cena</p>
              </li>
              <li className="w-full flex gap-2 items-center py-2 font-medium">
                <p className="min-w-[150px] sm:min-w-[200px] md:min-w-[300px]">
                  Nick name
                </p>
                <p>John Cena</p>
              </li>
              <li className="w-full flex gap-2 items-center py-2 font-medium">
                <p className="min-w-[150px] sm:min-w-[200px] md:min-w-[300px]">
                  Gender
                </p>
                <p>Female</p>
              </li>
              <li className="w-full flex gap-2 items-center py-2 font-medium">
                <p className="min-w-[150px] sm:min-w-[200px] md:min-w-[300px]">
                  Date of birth
                </p>
                <p>March 10, 1999</p>
              </li>
              <li className="w-full flex gap-2 items-center py-2 font-medium">
                <p className="min-w-[150px] sm:min-w-[200px] md:min-w-[300px]">
                  Country
                </p>
                <p>VietNam</p>
              </li>
            </ul>
          </div>
          <div className="px-8">
            <h4 className="border-b border-stone-300 py-2 font-medium">
              General Information
            </h4>
            <ul className="flex flex-col gap-1 text-stone-500">
              <li className="w-full flex gap-2 items-center py-2 font-medium">
                <p className="min-w-[150px] sm:min-w-[200px] md:min-w-[300px]">
                  Job title
                </p>
                <p>Developer Team</p>
              </li>
              <li className="w-full flex gap-2 items-center py-2 font-medium">
                <p className="min-w-[150px] sm:min-w-[200px] md:min-w-[300px]">
                  Organization
                </p>
                <p>Decade Technology</p>
              </li>
            </ul>
          </div>
          <div className="px-8">
            <h4 className="border-b border-stone-300 py-2 font-medium">
              Biography
            </h4>
            <ul className="flex flex-col gap-1 text-stone-500">
              <li className="w-full flex gap-2 items-center py-2 font-medium">
                <p className="min-w-[150px] sm:min-w-[200px] md:min-w-[300px]">
                  About me
                </p>
                <p>
                  Read exclusive biographies, watch videos & discover
                  fascinating stories about your favorite icons, musicians,
                  authors & historical figures.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
