import Image from "next/image"
import { ICategory, IPost } from "@/lib/types"
import { formatDate, getPosts, getCategories } from "@/lib/actions"
import { CalendarIcon, CommentIcon, FacebookIcon, InstagramSolidIcon, MailIcon, PaperPlaneIcon, TwitterIcon, YoutubeIcon } from "../icons"

export default async function RecentPostSection() {
  const posts: IPost[] = await getPosts(4, '', 'DESC')
  const categories: ICategory[] = await getCategories(4, 'count', 'DESC')

  return (
    <section className="mt-14">
      <div className="container mx-auto flex justify-between">
        <div>
          <div className="flex items-center justify-between border-b-2 border-[#4F95FF]">
            <div className="bg-[#4F95FF] py-[7px] px-[19px] text-white text-lg font-semibold">RECENT POST</div>
            <div className="text-xs text-[#0E0E0E] font-medium flex items-center gap-x-3">
              <div className="text-[#4F95FF]">All</div>
              <div>Sports</div>
              <div>Music</div>
              <div>Fashion</div>
            </div>
          </div>
          <div className="mt-[25px] grid grid-cols-2 gap-y-[15px] gap-x-[51px]">
            {posts.map((post) => (
              <div key={post.id} className="w-[316px] bg-white rounded-[15px]">
                <div className="relative">
                  <div className="w-[316px] h-[205px] relative">
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
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between gap-x-3">
            <div className="grid gap-y-1 place-items-center bg-white w-24 h-28 p-2 border-[0.75px] border-[#E2E2E2]">
              <div>
                <YoutubeIcon color="#E60000" />
              </div>
              <div className="font-bold text-xs text-[#0E0E0E]">354K</div>
              <div className="font-semibold text-[10px] text-[#666666]">Subs</div>
            </div>
            <div className="grid gap-y-1 place-items-center bg-white w-24 h-28 p-2 border-[0.75px] border-[#E2E2E2]">
              <div>
                <FacebookIcon color="#1976D2" />
              </div>
              <div className="font-bold text-xs text-[#0E0E0E]">847K</div>
              <div className="font-semibold text-[10px] text-[#666666]">Like</div>
            </div>
            <div className="grid gap-y-1 place-items-center bg-white w-24 h-28 p-2 border-[0.75px] border-[#E2E2E2]">
              <div>
                <TwitterIcon color="#1D83FF" />
              </div>
              <div className="font-bold text-xs text-[#0E0E0E]">196K</div>
              <div className="font-semibold text-[10px] text-[#666666]">Followers</div>
            </div>
            <div className="grid gap-y-1 place-items-center bg-white w-24 h-28 p-2 border-[0.75px] border-[#E2E2E2]">
              <div>
                <InstagramSolidIcon color="#D33D97" />
              </div>
              <div className="font-bold text-xs text-[#0E0E0E]">2M</div>
              <div className="font-semibold text-[10px] text-[#666666]">Followers</div>
            </div>
          </div>
          <div className="bg-white mt-5 py-[22px] px-5 rounded-[5px]">
            <div className="flex items-center gap-x-[10px]">
              <div>
                <MailIcon size="24" color="#4F95FF" />
              </div>
              <div className="text-[#0E0E0E] text-xl font-semibold">Newsletter</div>
            </div>
            <div className="mt-[7px] text-[#666666] text-xs">Be the first to know about new news by subscribing to our newsletter.</div>
            <div className="mt-4 border-y-2 border-l-2 border-[#4F95FF] rounded-[25px] h-10 flex items-center">
              <input className="w-full h-full rounded-[25px] py-3 px-5 text-[10px] placeholder:text-[#666666] outline-none" type="email" placeholder="E-Mail Address..." />
              <button className="w-full h-full rounded-[25px] flex-1 bg-[#4F95FF] p-[10px]">
                <PaperPlaneIcon />
              </button>
            </div>
          </div>
          <div className="bg-white mt-5 py-5 px-8 rounded-[5px]">
            <div className="flex justify-between items-center">
              <div>
                <div className="flex items-center gap-x-[14px]">
                  <div>
                    <Image width={50} height={50} alt="Cloud icon" src="data:image/png;base64,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" />
                  </div>
                  <div className="text-3xl">24°</div>
                </div>
                <div className="mt-[2px] text-[10px] text-[#0E0E0E]">Partly cloudy</div>
              </div>
              <div className="text-[#0E0E0E]">
                <div className="font-medium text-lg">İstanbul</div>
                <div className="text-[10px] text-right">Today</div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between gap-x-1">
              {[...Array(4).keys()].map((i) => (
                <div key={i} className="grid gap-y-1 place-items-center w-24 h-28 p-2 rounded-[5px] shadow-[0_8px_24px_0_rgba(149,157,165,0.20)]">
                  <div>
                    <Image width={40} height={40} alt="cloud40px icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKxSURBVHgB7ZjPaxNBFMe/bzYFkUIvvYSGkiBiwXgV1IA9eFH8cepBC+LB9tBczB8g5OaxRbCH1oOIePKgiF48WCFW0GNTqYhES4KXXoQiQrLzfLvpobQz2c0mu/SwH9iw2ZnZ992deW/fGyAlJaUnhAhw484x4PgUSJegcAGM83I5J4fa66LlaMrxWdo+gFUN+a91orUO+qQvgczTGbROnYZLd+Xv9QOiLBbYBVNDLNWgeAmPsxtUrWqEJLRA/jE/hhGUoVVFRo0jCowdeZxFtPUjOrHyJ8yQUAK5NT8OVz2XiTsnI0YxGFru8VZElkXkdlDnQIHy5ibh0EMQ3cAwIX4Jh+doYmWnZzf0FjeGjHomp1cRD+/Q0TO9ptu6wJmrCo4qy+kVxAXJkhEbvvNZsHtg4/cZ+a0gyEsHgf31XEFDIoMFo3H/iTJ0L7K39oNnQ2GuG1sPY347P08W5elKSArCNWBkytRkFkhOSbysgMSgnG/TgEUgLkr0d5Acyv9kGhvMnEXSdL/nh7AJzCF5jDZtAuMLLXYU1xdGj4IQK1Rc3j14zSYwdDo0RIw2bQKbSB6jTVuYWUfSML6YLpsFanxEktNMcOFgzdRkFujVEElOM6OBjlszNVnW4N8tyRheIym8eiX/vW5qMgqkwpN/MsGrfg0RN56NDi/ZKj57HPyV3ZTfRbnBLuJD+zaeZjdsHcKk/C/k9BLigOkNXHc2Usrv4Q/M6JuyHl9h2HhFk+suBJWfYcvOSbRpWSq7yxj08+gtGYVPcPStoIoOYY3Jjbbh8qxsddwfyHG6hfsDqYlnwojzbaMPuCqV3m0ppogq3QTTy7oDE1txBG5KKPbC1ioK3zb72aOJtnn0vppBvlXcS9On4SW4hAns3zxitGTtrkvxVesG4faWH75SUlKGy3/BudgOomRXhQAAAABJRU5ErkJggg==" />
                  </div>
                  <div className="text-[#4F95FF] text-xs font-semibold">21°</div>
                  <div className="text-[#0E0E0E] text-[10px]">Tuesday</div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-5 grid gap-y-[5px]">
            {categories.map((category) => (
              <div key={category.id} className="bg-[url('/category_background.png')] h-20 bg-cover bg-no-repeat bg-center rounded-[5px]">
                <div className="h-full bg-black bg-opacity-60 rounded-[5px] text-white text-sm flex items-center justify-between p-10">
                  <div className="font-medium bg-white bg-opacity-20 py-[7px] px-5 rounded-[5px]">{category.name}</div>
                  <div className="font-semibold bg-white bg-opacity-20 py-[6px] px-[10px] rounded-[5px]">{category.postsCount}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}