import { IComment } from "@/lib/types";
import { AuthorIcon, CalendarIcon } from "../icons";
import { formatDate } from "@/lib/actions";

export default function CommentCard({ comment }: { comment: IComment }) {
  return (
    <div className="px-[25px] py-[10px] border-b-2">
      <div className="mt-[10px] flex items-center gap-x-5 text-xs text-[#4F95FF]">
        <div className="flex items-center gap-x-[5px]">
          <div>
            <CalendarIcon size="16" color="#4F95FF" />
          </div>
          <div>{formatDate(new Date(comment.createdAt))}</div>
        </div>
        <div className="flex items-center gap-x-[5px]">
          <div>
            <AuthorIcon size="16" color="#4F95FF" />
          </div>
          <div>{comment.user}</div>
        </div>
      </div>
      <div className="mt-5 text-xs text-[#666666]">{comment.text}</div>
    </div>
  );
}
