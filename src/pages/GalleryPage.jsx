import { Images, Search, Upload } from "lucide-react";

import { Button } from "@/components/ui/button";

function GalleryPage() {
  return (
    <div className="w-full h-full overflow-auto pb-32 no-scrollbar">
      <div className="h-20 flex items-center border-b border-stone-300">
        <div className="w-full max-w-[1300px] mx-auto px-5">
          <h3 className="text-left text-3xl">Photos</h3>
        </div>
      </div>

      <div className="w-full max-w-[1300px] mx-auto px-5">
        <header className="flex items-center gap-4 justify-between flex-wrap py-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 py-2 cursor-pointer border-b border-teal-500">
              <p>All photos</p>
              <span className="text-sm px-2 py-1 border-stone-300 rounded-full border">
                14
              </span>
            </div>
            <div className="flex items-center gap-2 py-2 cursor-pointer">
              <p>My photos</p>
            </div>
          </div>

          <div className="w-full lg:w-max flex items-center gap-4 focus-within:border-teal-500">
            <p className="w-full overflow-hidden sm:w-auto flex items-center gap-2 border border-stone-300 rounded-md pl-2 sm:flex-1">
              <Search fontWeight="thin" size={16} />
              <input
                className="bg-transparent pr-2 py-2 outline-none"
                type="text"
                placeholder="Search photos"
              />
            </p>
            <div className="flex items-center gap-2 flex-shrink-0">
              <Button className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600">
                <Upload size={18} />
                <p className="hidden sm:inline-flex">Add photos</p>
              </Button>
              <Button className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600">
                <Images size={18} />
                <p className="hidden sm:inline-flex">Create album</p>
              </Button>
            </div>
          </div>
        </header>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          <div className="w-full border border-stone-300 rounded-md overflow-hidden">
            <img
              className="w-full h-full max-h-[300px] object-cover"
              src="/assets/images/photo-1.jpg"
              alt="photo"
            />
          </div>
          <div className="w-full border border-stone-300 rounded-md overflow-hidden">
            <img
              className="w-full h-full max-h-[300px] object-cover"
              src="/assets/images/photo-1.jpg"
              alt="photo"
            />
          </div>
          <div className="w-full border border-stone-300 rounded-md overflow-hidden">
            <img
              className="w-full h-full max-h-[300px] object-cover"
              src="/assets/images/photo-1.jpg"
              alt="photo"
            />
          </div>
          <div className="w-full border border-stone-300 rounded-md overflow-hidden">
            <img
              className="w-full h-full max-h-[300px] object-cover"
              src="/assets/images/photo-1.jpg"
              alt="photo"
            />
          </div>
          <div className="w-full border border-stone-300 rounded-md overflow-hidden">
            <img
              className="w-full h-full max-h-[300px] object-cover"
              src="/assets/images/photo-1.jpg"
              alt="photo"
            />
          </div>
          <div className="w-full border border-stone-300 rounded-md overflow-hidden">
            <img
              className="w-full h-full max-h-[300px] object-cover"
              src="/assets/images/photo-1.jpg"
              alt="photo"
            />
          </div>
          <div className="w-full border border-stone-300 rounded-md overflow-hidden">
            <img
              className="w-full h-full max-h-[300px] object-cover"
              src="/assets/images/photo-1.jpg"
              alt="photo"
            />
          </div>
          <div className="w-full border border-stone-300 rounded-md overflow-hidden">
            <img
              className="w-full h-full max-h-[300px] object-cover"
              src="/assets/images/photo-1.jpg"
              alt="photo"
            />
          </div>
          <div className="w-full border border-stone-300 rounded-md overflow-hidden">
            <img
              className="w-full h-full max-h-[300px] object-cover"
              src="/assets/images/photo-1.jpg"
              alt="photo"
            />
          </div>
          <div className="w-full border border-stone-300 rounded-md overflow-hidden">
            <img
              className="w-full h-full max-h-[300px] object-cover"
              src="/assets/images/photo-1.jpg"
              alt="photo"
            />
          </div>
          <div className="w-full border border-stone-300 rounded-md overflow-hidden">
            <img
              className="w-full h-full max-h-[300px] object-cover"
              src="/assets/images/photo-1.jpg"
              alt="photo"
            />
          </div>
          <div className="w-full border border-stone-300 rounded-md overflow-hidden">
            <img
              className="w-full h-full max-h-[300px] object-cover"
              src="/assets/images/photo-1.jpg"
              alt="photo"
            />
          </div>
          <div className="w-full border border-stone-300 rounded-md overflow-hidden">
            <img
              className="w-full h-full max-h-[300px] object-cover"
              src="/assets/images/photo-1.jpg"
              alt="photo"
            />
          </div>
          <div className="w-full border border-stone-300 rounded-md overflow-hidden">
            <img
              className="w-full h-full max-h-[300px] object-cover"
              src="/assets/images/photo-1.jpg"
              alt="photo"
            />
          </div>
          <div className="w-full border border-stone-300 rounded-md overflow-hidden">
            <img
              className="w-full h-full max-h-[300px] object-cover"
              src="/assets/images/photo-1.jpg"
              alt="photo"
            />
          </div>
          <div className="w-full border border-stone-300 rounded-md overflow-hidden">
            <img
              className="w-full h-full max-h-[300px] object-cover"
              src="/assets/images/photo-1.jpg"
              alt="photo"
            />
          </div>
          <div className="w-full border border-stone-300 rounded-md overflow-hidden">
            <img
              className="w-full h-full max-h-[300px] object-cover"
              src="/assets/images/photo-1.jpg"
              alt="photo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryPage;
