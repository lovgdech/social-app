import { MessageCircleWarning } from "lucide-react";

function NotificationPage() {
  return (
    <div className="w-full flex border border-stone-300 items-center rounded-md overflow-hidden mt-4">
      <button className="w-10 h-10 flex bg-sky-500 text-white items-center justify-center flex-shrink-0">
        <MessageCircleWarning size="20" />
      </button>
      <p className="px-4 text-sm md:text-base">
        You have no unread notifications.
      </p>
    </div>
  );
}

export default NotificationPage;
