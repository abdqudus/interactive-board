import Link from "next/link";
import { RoomType } from "./DashboardBody";

export const RoomCard = ({ id, name, created_at, isPublic }: RoomType) => {
  const createAt = new Date(created_at);
  return (
    <Link
      href={`/room/${id}`}
      className="flex items-start border border-slate-200 p-5 rounded-md justify-between w-full"
    >
      <div className="flex gap-3 flex-col w-full">
        <h2 className="font-medium text-lg text-blue-500 capitalize">{name}</h2>
        <span className="text-xs text-slate-500">
          Created at {createAt.getDate()}/{createAt.getMonth()}/
          {createAt.getFullYear()}
        </span>
      </div>
      <span className="rounded-full text-xs font-medium bg-green-100 py-1 px-2 text-green-600">
        {isPublic ? "Public" : "Private"}
      </span>
    </Link>
  );
};
