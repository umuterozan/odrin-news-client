import { formatDate, getPosts } from "@/lib/actions"
import { IPost } from "@/lib/types"
import Image from "next/image"
import { ArrowRightIcon, CalendarIcon, CommentIcon } from "../icons"
import Link from "next/link"

export default async function ViewAllSection() {
  const posts: IPost[] = await getPosts(5)

  return (
    <section className="mt-14 bg-[#151618]">
      <div className="container mx-auto pt-[50px] pb-[85px]">
        <Link href="/posts">
          <div className="flex items-center gap-x-[15px] justify-end">
            <div className="text-white text-xs font-medium">View All</div>
            <div>
              <ArrowRightIcon size="16" color="white" />
            </div>
          </div>
        </Link>
        <div className="mt-5 flex justify-around gap-x-[51px]">
          <Link href={`/posts/${posts[0].slug}`}>
            <div className={`bg-[url('https://cdn.discordapp.com/attachments/1086616867264811090/1153991537886236682/d29a6641d1afaedba266dbad36614c3d.png')] w-[525px] h-[430px] bg-cover bg-no-repeat bg-center`}>
              <div className="h-full bg-black bg-opacity-50 grid content-end py-6 px-7">
                <div className="flex items-center gap-x-[15px] text-xs text-white">
                  <div className="bg-[#4F95FF] font-medium py-[5px] px-[15px]">
                    {posts[0].category}
                  </div>
                  <div className="flex items-center gap-x-[5px]">
                    <div>
                      <CalendarIcon size="16" color="white" />
                    </div>
                    <div>{formatDate(new Date(posts[0].createdAt))}</div>
                  </div>
                  <div className="flex items-center gap-x-[5px]">
                    <div>
                      <CommentIcon size="16" color="white" />
                    </div>
                    <div>{posts[0].commentsCount}</div>
                  </div>
                </div>
                <div className="mt-[30px] text-[26px] font-semibold text-white">
                  {posts[0].title}
                </div>
              </div>
            </div>
          </Link>
          <div className="grid gap-y-[10px]">
            {posts.filter((post) => post.id !== 1).map((post) => (
              <div key={post.id} className="flex gap-x-[17px]">
                <Link href={`/posts/${post.slug}`}>
                  <div className="w-[125px] h-[100px] relative">
                    <Image 
                      fill
                      alt="view all post" 
                      src={post.thumbnail}
                      className="object-cover"
                    />
                  </div>
                </Link>
                <div>
                  <div className="text-[#4F95FF] text-xs font-medium">{post.category}</div>
                  <div className="mt-[6.73px] flex items-center gap-x-[5px]">
                    <div>
                      <CalendarIcon size="16" color="#666666" />
                    </div>
                    <div className="text-[#666666] text-xs">{formatDate(new Date(post.createdAt))}</div>
                  </div>
                  <Link href={`/posts/${post.slug}`}><div className="mt-[7.27px] text-white text-xl font-medium">{post.title}</div></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}