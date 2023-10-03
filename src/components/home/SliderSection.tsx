import Image from "next/image";
import { IPost } from "@/lib/types";
import { getPosts } from "@/lib/actions";
import { ArrowLeftIcon, ArrowRightIcon, AuthorIcon, CalendarIcon, CommentIcon } from "../icons";
import Link from "next/link";

export default async function SliderSection() {
  const posts: IPost[] = await getPosts(4, "count", "DESC")

  return (
    <section className="bg-[url('https://cdn.discordapp.com/attachments/1086616867264811090/1154081497897250948/slider_background.png')] h-[575px] bg-cover bg-no-repeat bg-center">
      <div className="h-full bg-black bg-opacity-50">
        <div className="h-full flex items-center gap-x-[70px] container mx-auto">
          <div>
            <div className="flex items-center gap-x-6 text-xs text-white">
              <div className="bg-[#4F95FFBF] font-medium py-[5px] px-[15px]">
                Sports
              </div>
              <div className="flex items-center gap-x-[5px]">
                <div>
                  <CalendarIcon size="16" color="white" />
                </div>
                <div>06 Aug, 2022</div>
              </div>
              <div className="flex items-center gap-x-[5px]">
                <div>
                  <CommentIcon size="16" color="white" />
                </div>
                <div>69</div>
              </div>
              <div className="flex items-center gap-x-[5px]">
                <div>
                  <AuthorIcon size="16" color="white" />
                </div>
                <div>byrktrdesign</div>
              </div>
            </div>
            <div className="mt-4 text-4xl font-semibold text-white">
              WSL: Everton 0-0 Leicester City - Toffees close to opener
            </div>
            <div className="flex items-center gap-x-5 mt-[58px]">
              <button className="border-2 border-white rounded-full p-3">
                <ArrowLeftIcon size="24" color="white" />
              </button>
              <button className="border-2 border-white rounded-full p-3">
                <ArrowRightIcon size="24" color="white" />
              </button>
            </div>
          </div>
          <div className="bg-white py-[22px] px-5 rounded-[10px] grid gap-y-5">
            {posts.map((post: IPost) => (
              <div key={post.id} className="flex items-center gap-x-[21px]">
                <Link href={`/posts/${post.slug}`}>
                  <div className="flex-shrink-0 w-[120px] h-[79px] relative">
                    <Image
                      fill
                      alt="Post Image"
                      src={post.thumbnail}
                      className="object-cover rounded-lg"
                    />
                  </div>
                </Link>
                <div className="grid gap-y-[10px]">
                  <div className="text-xs flex items-center gap-x-1">
                    <div className="font-medium text-white bg-[#4F95FF] py-[3px] px-[15px]">
                      {post.category}
                    </div>
                    <div className="flex items-center gap-x-[5px]">
                      <div>
                        <CommentIcon size="17" color="#666666" />
                      </div>
                      <div className="text-[#4F95FF]">{post.commentsCount}</div>
                    </div>
                  </div>
                  <Link href={`/posts/${post.slug}`}><div className="font-semibold">{post.title}</div></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
