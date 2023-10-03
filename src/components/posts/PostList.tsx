import Image from "next/image"
import { IPost } from "@/lib/types"
import { formatDate, getPosts } from "@/lib/actions"
import { CalendarIcon, CommentIcon } from "@/components/icons"
import Link from "next/link"

export default async function PostList() {
  const posts: IPost[] = await getPosts(10, '', 'DESC')

  return (
    <div className="mt-[25px] grid grid-cols-4 gap-y-[15px] gap-x-[51px]">
      {posts.map((post) => (
        <div key={post.id} className="w-[316px] bg-white rounded-[15px]">
          <div className="relative">
            <Link href={`/posts/${post.slug}`}>
              <div className="w-[316px] h-[205px] relative">
                <Image
                  fill
                  alt="Recent Post Image" 
                  src={post.thumbnail}
                  className="object-cover rounded-t-[15px]"
                />
              </div>
            </Link>
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
            <Link href={`/posts/${post.slug}`}><div className="mt-[9px] font-semibold text-lg text-[#0E0E0E]">{post.title}</div></Link>
            <div className="mt-5 text-xs text-[#666666]">
              {post.body}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}