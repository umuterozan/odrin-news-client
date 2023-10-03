import { CalendarIcon, CommentIcon } from "@/components/icons"
import { formatDate, getComments, getPost } from "@/lib/actions"
import { IComment, IPost } from "@/lib/types"
import Image from "next/image"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { verifyToken } from "@/lib/actions"
import CommentCard from "@/components/comments/CommentCard"
import AddCommentForm from "@/components/comments/AddCommentForm"

export default async function PostPage({ params }: { params: { slug: string } }) {
  const isVerifyToken = await verifyToken(cookies().get('accessToken'))
  if (!isVerifyToken) return redirect('/')

  const post: IPost = await getPost(params.slug)
  const comments: IComment[] = await getComments(post.id, 10, "DESC")

  return (
    <section className="my-14">
      <div className="container mx-auto">
        <div className="bg-white rounded-[15px]">
          <div className="relative">
            <div className="w-full h-[305px] relative">
              <Image
                fill
                alt="Recent Post Image" 
                src={post.thumbnail}
                className="object-cover rounded-t-[15px]"
              />
            </div>
            <div className="absolute bottom-0 left-[25px] bg-[#4F95FF] py-[5px] px-[15px] text-xs font-medium text-white w-[93px]">{post.category}</div>
          </div>
          <div className="px-[25px] pb-[25px]">                
            <div className="mt-[10px] flex items-center gap-x-5 text-xs text-[#4F95FF]">
              <div className="flex items-center gap-x-[5px]">
                <div>
                  <CalendarIcon size="16" color="#4F95FF" />
                </div>
                <div>{formatDate(new Date(post.createdAt))}</div>
              </div>
              <div className="flex items-center gap-x-[5px]">
                <div>
                  <CommentIcon size="16" color="#4F95FF" />
                </div>
                <div>{post.commentsCount}</div>
              </div>
            </div>
            <div className="mt-[9px] font-semibold text-lg text-[#0E0E0E]">{post.title}</div>
            <div className="mt-5 text-xs text-[#666666]">
              {post.body}
            </div>
          </div>
          
          <div className="mt-10 font-semibold text-lg text-[#0E0E0E] px-[25px] pb-2 border-b-2">Comments</div>
          <div className="px-[25px] py-[10px] border-b-2">
            <AddCommentForm postId={post.id} />
          </div>
          {comments.map((comment) => (
            <CommentCard key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    </section>
  )
}