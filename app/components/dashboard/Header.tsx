import React from "react";

type Props = { session: any; setShowCreateRoomModal: Function };

const Header = (props: Props) => {
  const { session, setShowCreateRoomModal } = props;
  return (
    <section className="w-full flex justify-between items-center">
      <h3 className="text-slate-600">
        Welcome back, @{session?.user?.user_metadata?.userName} 👋🏽
      </h3>
      <button
        className="flex items-center font-semibold text-sm px-2.5 py-2 rounded-full gap-1 bg-blue-600 text-white hover:bg-blue-500"
        onClick={() => setShowCreateRoomModal(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>New Room</span>
      </button>
    </section>
  );
};

export default Header;

export const RoomCardSkeleton = () => {
  return (
    <div className="flex gap-2 items-start border border-slate-200 p-5 rounded-md justify-between w-full">
      <div className="flex gap-3 flex-col w-full">
        <h2 className="bg-slate-100 rounded-md w-full">
          <span className="invisible">Name</span>
        </h2>
        <p className="bg-slate-100 rounded-md w-1/2">
          <span className="invisible">Created</span>
        </p>
      </div>
      <span className="bg-slate-100 rounded-full text-xs py-1 px-2">
        <span className="invisible">Public</span>
      </span>
    </div>
  );
};
