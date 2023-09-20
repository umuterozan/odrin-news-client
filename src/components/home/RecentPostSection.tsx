import Image from "next/image"
import { ICategory, IPost } from "@/lib/types"
import { formatDate, getPosts, getCategories } from "@/lib/actions"

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
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M13 2H11.5V1.5C11.5 1.36739 11.4473 1.24021 11.3536 1.14645C11.2598 1.05268 11.1326 1 11 1C10.8674 1 10.7402 1.05268 10.6464 1.14645C10.5527 1.24021 10.5 1.36739 10.5 1.5V2H5.5V1.5C5.5 1.36739 5.44732 1.24021 5.35355 1.14645C5.25979 1.05268 5.13261 1 5 1C4.86739 1 4.74021 1.05268 4.64645 1.14645C4.55268 1.24021 4.5 1.36739 4.5 1.5V2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V13C2 13.2652 2.10536 13.5196 2.29289 13.7071C2.48043 13.8946 2.73478 14 3 14H13C13.2652 14 13.5196 13.8946 13.7071 13.7071C13.8946 13.5196 14 13.2652 14 13V3C14 2.73478 13.8946 2.48043 13.7071 2.29289C13.5196 2.10536 13.2652 2 13 2ZM3 3H4.5V3.5C4.5 3.63261 4.55268 3.75979 4.64645 3.85355C4.74021 3.94732 4.86739 4 5 4C5.13261 4 5.25979 3.94732 5.35355 3.85355C5.44732 3.75979 5.5 3.63261 5.5 3.5V3H10.5V3.5C10.5 3.63261 10.5527 3.75979 10.6464 3.85355C10.7402 3.94732 10.8674 4 11 4C11.1326 4 11.2598 3.94732 11.3536 3.85355C11.4473 3.75979 11.5 3.63261 11.5 3.5V3H13V5H3V3ZM13 13H3V6H13V13ZM8 10.25C8.00073 10.5472 7.91315 10.8379 7.74838 11.0853C7.58361 11.3326 7.34907 11.5255 7.07453 11.6393C6.79998 11.7531 6.49781 11.7828 6.20635 11.7247C5.9149 11.6665 5.64729 11.523 5.4375 11.3125C5.34399 11.2188 5.29148 11.0918 5.29148 10.9594C5.29148 10.827 5.34399 10.7 5.4375 10.6062C5.48349 10.5592 5.53841 10.5218 5.59906 10.4963C5.6597 10.4707 5.72483 10.4576 5.79063 10.4576C5.85642 10.4576 5.92155 10.4707 5.98219 10.4963C6.04284 10.5218 6.09776 10.5592 6.14375 10.6062C6.23973 10.698 6.36723 10.7494 6.5 10.75C6.63261 10.75 6.75979 10.6973 6.85355 10.6036C6.94732 10.5098 7 10.3826 7 10.25C7 10.1174 6.94732 9.99021 6.85355 9.89645C6.75979 9.80268 6.63261 9.75 6.5 9.75C6.40604 9.74947 6.31413 9.72248 6.2348 9.67212C6.15548 9.62175 6.09195 9.55005 6.0515 9.46524C6.01106 9.38043 5.99532 9.28594 6.00611 9.1926C6.0169 9.09926 6.05377 9.01085 6.1125 8.9375L6.4625 8.5H5.75C5.61739 8.5 5.49021 8.44732 5.39645 8.35355C5.30268 8.25979 5.25 8.13261 5.25 8C5.25 7.86739 5.30268 7.74021 5.39645 7.64645C5.49021 7.55268 5.61739 7.5 5.75 7.5H7.5C7.59396 7.50053 7.68587 7.52752 7.7652 7.57788C7.84452 7.62825 7.90805 7.69994 7.9485 7.78476C7.98894 7.86957 8.00468 7.96406 7.99389 8.0574C7.9831 8.15074 7.94623 8.23915 7.8875 8.3125L7.3375 9.00625C7.54174 9.14305 7.70907 9.32813 7.82463 9.54509C7.9402 9.76205 8.00044 10.0042 8 10.25ZM10.5 8V11.25C10.5 11.3826 10.4473 11.5098 10.3536 11.6036C10.2598 11.6973 10.1326 11.75 10 11.75C9.86739 11.75 9.74021 11.6973 9.64645 11.6036C9.55268 11.5098 9.5 11.3826 9.5 11.25V9L9.3 9.15C9.19334 9.22797 9.06043 9.26115 8.92965 9.24247C8.79886 9.22378 8.68056 9.15471 8.6 9.05C8.52044 8.94391 8.48627 8.81056 8.50502 8.67929C8.52378 8.54801 8.59391 8.42957 8.7 8.35L9.7 7.6C9.77428 7.54429 9.86262 7.51036 9.9551 7.50202C10.0476 7.49368 10.1406 7.51126 10.2236 7.55279C10.3067 7.59431 10.3765 7.65815 10.4253 7.73713C10.4741 7.81612 10.5 7.90714 10.5 8Z" fill="#4F95FF"/>
                        </svg>
                      </div>
                      <div>{formatDate(new Date(post.createdAt))}</div>
                    </div>
                    <div className="flex items-center gap-x-[5px]">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M8.00004 1.33334C4.32404 1.33334 1.33337 3.72601 1.33337 6.66668C1.33337 8.60534 2.59871 10.344 4.66671 11.2893V14.6667L8.22671 11.9967C11.798 11.9013 14.6667 9.54668 14.6667 6.66668C14.6667 3.72601 11.676 1.33334 8.00004 1.33334ZM8.00004 10.6667H7.77804L6.00004 12V10.3887L5.57271 10.224C3.78004 9.53401 2.66671 8.17068 2.66671 6.66668C2.66671 4.46068 5.05937 2.66668 8.00004 2.66668C10.9407 2.66668 13.3334 4.46068 13.3334 6.66668C13.3334 8.87268 10.9407 10.6667 8.00004 10.6667Z" fill="#4F95FF"/>
                        </svg>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path d="M26.9912 9.00374C26.8488 8.4755 26.5706 7.99375 26.1841 7.60645C25.7977 7.21916 25.3166 6.93982 24.7887 6.79624C22.8312 6.25874 14.9999 6.24999 14.9999 6.24999C14.9999 6.24999 7.16992 6.24124 5.21117 6.75499C4.68358 6.90518 4.20345 7.18847 3.81688 7.57766C3.43031 7.96686 3.15028 8.4489 3.00367 8.97749C2.48742 10.935 2.48242 14.995 2.48242 14.995C2.48242 14.995 2.47742 19.075 2.98992 21.0125C3.27742 22.0837 4.12117 22.93 5.19367 23.2187C7.17117 23.7562 14.9812 23.765 14.9812 23.765C14.9812 23.765 22.8124 23.7737 24.7699 23.2612C25.298 23.1179 25.7796 22.8392 26.167 22.4527C26.5544 22.0662 26.8342 21.5853 26.9787 21.0575C27.4962 19.1012 27.4999 15.0425 27.4999 15.0425C27.4999 15.0425 27.5249 10.9612 26.9912 9.00374ZM12.4949 18.7562L12.5012 11.2562L19.0099 15.0125L12.4949 18.7562Z" fill="#E60000"/>
                </svg>
              </div>
              <div className="font-bold text-xs text-[#0E0E0E]">354K</div>
              <div className="font-semibold text-[10px] text-[#666666]">Subs</div>
            </div>
            <div className="grid gap-y-1 place-items-center bg-white w-24 h-28 p-2 border-[0.75px] border-[#E2E2E2]">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path d="M16.7463 26.2462V16.0012H20.2025L20.7163 11.99H16.7463V9.435C16.7463 8.2775 17.0688 7.485 18.73 7.485H20.835V3.90875C19.8108 3.79899 18.7813 3.74599 17.7513 3.75C14.6963 3.75 12.5988 5.615 12.5988 9.03875V11.9825H9.16504V15.9937H12.6063V26.2462H16.7463Z" fill="#1976D2"/>
                </svg>
              </div>
              <div className="font-bold text-xs text-[#0E0E0E]">847K</div>
              <div className="font-semibold text-[10px] text-[#666666]">Like</div>
            </div>
            <div className="grid gap-y-1 place-items-center bg-white w-24 h-28 p-2 border-[0.75px] border-[#E2E2E2]">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path d="M24.5412 9.99624C24.5575 10.215 24.5575 10.4325 24.5575 10.65C24.5575 17.3062 19.4912 24.9762 10.2325 24.9762C7.38 24.9762 4.73 24.15 2.5 22.715C2.905 22.7612 3.295 22.7775 3.71625 22.7775C5.98249 22.783 8.18456 22.0252 9.9675 20.6262C8.91678 20.6072 7.89822 20.2606 7.05405 19.6347C6.20988 19.0088 5.58223 18.1349 5.25875 17.135C5.57 17.1812 5.8825 17.2125 6.21 17.2125C6.66125 17.2125 7.115 17.15 7.53625 17.0412C6.39595 16.811 5.37059 16.1929 4.63452 15.2921C3.89845 14.3913 3.49712 13.2633 3.49875 12.1V12.0375C4.17 12.4112 4.94875 12.645 5.77375 12.6762C5.08261 12.217 4.5159 11.5938 4.12417 10.8622C3.73245 10.1307 3.52789 9.31356 3.52875 8.48374C3.52875 7.54874 3.7775 6.69124 4.21375 5.94374C5.47892 7.50002 7.05688 8.7732 8.84542 9.68082C10.634 10.5884 12.5932 11.1103 14.5963 11.2125C14.5188 10.8375 14.4712 10.4487 14.4712 10.0587C14.4709 9.39745 14.6009 8.74257 14.8538 8.13154C15.1068 7.52052 15.4776 6.96534 15.9452 6.49773C16.4128 6.03012 16.968 5.65926 17.5791 5.40634C18.1901 5.15342 18.845 5.02341 19.5062 5.02374C20.9562 5.02374 22.265 5.63124 23.185 6.61374C24.3122 6.39576 25.3932 5.98427 26.38 5.39749C26.0043 6.56101 25.2172 7.54762 24.1663 8.17249C25.166 8.05847 26.143 7.79556 27.065 7.39249C26.3764 8.39637 25.5232 9.27667 24.5412 9.99624Z" fill="#1D83FF"/>
                </svg>
              </div>
              <div className="font-bold text-xs text-[#0E0E0E]">196K</div>
              <div className="font-semibold text-[10px] text-[#666666]">Followers</div>
            </div>
            <div className="grid gap-y-1 place-items-center bg-white w-24 h-28 p-2 border-[0.75px] border-[#E2E2E2]">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path d="M26.1838 10.3813C26.1712 9.43454 25.994 8.49723 25.6601 7.61126C25.3705 6.86395 24.9283 6.18526 24.3616 5.61855C23.7948 5.05184 23.1161 4.60957 22.3688 4.32001C21.4943 3.9917 20.5703 3.81418 19.6363 3.79501C18.4338 3.74126 18.0526 3.72626 15.0001 3.72626C11.9476 3.72626 11.5563 3.72626 10.3626 3.79501C9.42904 3.81432 8.50552 3.99184 7.63134 4.32001C6.88391 4.60937 6.20511 5.05156 5.63838 5.6183C5.07164 6.18503 4.62945 6.86383 4.34009 7.61126C4.01113 8.48517 3.83399 9.4089 3.81634 10.3425C3.76259 11.5463 3.74634 11.9275 3.74634 14.98C3.74634 18.0325 3.74634 18.4225 3.81634 19.6175C3.83509 20.5525 4.01134 21.475 4.34009 22.3513C4.62993 23.0985 5.07246 23.777 5.63938 24.3435C6.20631 24.91 6.88517 25.352 7.63259 25.6413C8.50438 25.9828 9.42805 26.173 10.3638 26.2038C11.5676 26.2575 11.9488 26.2738 15.0013 26.2738C18.0538 26.2738 18.4451 26.2738 19.6388 26.2038C20.5728 26.1854 21.4968 26.0083 22.3713 25.68C23.1185 25.3901 23.797 24.9477 24.3636 24.3811C24.9303 23.8144 25.3727 23.1359 25.6626 22.3888C25.9913 21.5138 26.1676 20.5913 26.1863 19.655C26.2401 18.4525 26.2563 18.0713 26.2563 15.0175C26.2538 11.965 26.2538 11.5775 26.1838 10.3813ZM14.9926 20.7525C11.8001 20.7525 9.21384 18.1663 9.21384 14.9738C9.21384 11.7813 11.8001 9.19501 14.9926 9.19501C16.5252 9.19501 17.9951 9.80384 19.0788 10.8876C20.1625 11.9713 20.7713 13.4411 20.7713 14.9738C20.7713 16.5064 20.1625 17.9762 19.0788 19.0599C17.9951 20.1437 16.5252 20.7525 14.9926 20.7525ZM21.0013 10.3288C20.8243 10.3289 20.649 10.2942 20.4855 10.2265C20.3219 10.1589 20.1733 10.0596 20.0481 9.93445C19.923 9.80929 19.8237 9.66068 19.7561 9.49712C19.6884 9.33356 19.6537 9.15826 19.6538 8.98126C19.6538 8.80438 19.6887 8.62924 19.7564 8.46583C19.824 8.30242 19.9233 8.15394 20.0483 8.02887C20.1734 7.9038 20.3219 7.80459 20.4853 7.73691C20.6487 7.66922 20.8238 7.63438 21.0007 7.63438C21.1776 7.63438 21.3527 7.66922 21.5161 7.73691C21.6796 7.80459 21.828 7.9038 21.9531 8.02887C22.0782 8.15394 22.1774 8.30242 22.2451 8.46583C22.3127 8.62924 22.3476 8.80438 22.3476 8.98126C22.3476 9.72626 21.7451 10.3288 21.0013 10.3288Z" fill="#D33D97"/>
                  <path d="M14.9925 18.7275C17.0657 18.7275 18.7463 17.0469 18.7463 14.9738C18.7463 12.9006 17.0657 11.22 14.9925 11.22C12.9194 11.22 11.2388 12.9006 11.2388 14.9738C11.2388 17.0469 12.9194 18.7275 14.9925 18.7275Z" fill="#D33D97"/>
                </svg>
              </div>
              <div className="font-bold text-xs text-[#0E0E0E]">2M</div>
              <div className="font-semibold text-[10px] text-[#666666]">Followers</div>
            </div>
          </div>
          <div className="bg-white mt-5 py-[22px] px-5 rounded-[5px]">
            <div className="flex items-center gap-x-[10px]">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M21 4.5H3C2.80109 4.5 2.61032 4.57902 2.46967 4.71967C2.32902 4.86032 2.25 5.05109 2.25 5.25V18C2.25 18.3978 2.40804 18.7794 2.68934 19.0607C2.97064 19.342 3.35218 19.5 3.75 19.5H20.25C20.6478 19.5 21.0294 19.342 21.3107 19.0607C21.592 18.7794 21.75 18.3978 21.75 18V5.25C21.75 5.05109 21.671 4.86032 21.5303 4.71967C21.3897 4.57902 21.1989 4.5 21 4.5ZM19.0687 6L12 12.4781L4.93125 6H19.0687ZM20.25 18H3.75V6.95625L11.4937 14.0531C11.632 14.1796 11.8126 14.2498 12 14.2498C12.1874 14.2498 12.368 14.1796 12.5062 14.0531L20.25 6.95625V18Z" fill="#4F95FF"/>
                </svg>
              </div>
              <div className="text-[#0E0E0E] text-xl font-semibold">Newsletter</div>
            </div>
            <div className="mt-[7px] text-[#666666] text-xs">Be the first to know about new news by subscribing to our newsletter.</div>
            <div className="mt-4 border-y-2 border-l-2 border-[#4F95FF] rounded-[25px] h-10 flex items-center">
              <input className="w-full h-full rounded-[25px] py-3 px-5 text-[10px] placeholder:text-[#666666] outline-none" type="email" placeholder="E-Mail Address..." />
              <button className="w-full h-full rounded-[25px] flex-1 bg-[#4F95FF] p-[10px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M17.4765 2.52344C17.3204 2.3662 17.125 2.25358 16.9107 2.19726C16.6964 2.14094 16.471 2.14297 16.2577 2.20312L1.70304 6.30469C1.4597 6.3757 1.2435 6.51858 1.08277 6.7146C0.922046 6.91062 0.824297 7.15063 0.802337 7.40316C0.780377 7.6557 0.835232 7.90898 0.959711 8.1298C1.08419 8.35062 1.27248 8.52867 1.49991 8.64062L8.19522 11.8047L11.3593 18.5C11.4608 18.7124 11.6203 18.8918 11.8193 19.0176C12.0183 19.1434 12.2488 19.2104 12.4843 19.2109H12.5937C12.8481 19.1913 13.0904 19.0938 13.2875 18.9317C13.4846 18.7695 13.627 18.5506 13.6952 18.3047L17.7968 3.74219C17.8569 3.52894 17.859 3.30347 17.8026 3.08918C17.7463 2.87488 17.6337 2.67955 17.4765 2.52344ZM12.4921 17.9609L9.41397 11.4687L12.6405 8.24219C12.7033 8.18534 12.7538 8.11633 12.7891 8.03936C12.8243 7.96239 12.8436 7.87906 12.8457 7.79441C12.8478 7.70977 12.8326 7.62559 12.8012 7.54698C12.7698 7.46836 12.7227 7.39696 12.6628 7.33709C12.603 7.27722 12.5315 7.23014 12.4529 7.19871C12.3743 7.16727 12.2901 7.15214 12.2055 7.15422C12.1209 7.1563 12.0375 7.17556 11.9605 7.21083C11.8836 7.24609 11.8146 7.29663 11.7577 7.35937L8.53116 10.5859L2.03897 7.50781L16.5937 3.40625L12.4921 17.9609Z" fill="white"/>
                </svg>
              </button>
            </div>
          </div>
          <div className="bg-white mt-5 py-5 px-8 rounded-[5px]">
            <div className="flex justify-between items-center">
              <div>
                <div className="flex items-center gap-x-[14px]">
                  <div>
                    <Image width={50} height={50} alt="Cloud icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAWgSURBVHgB7VhtbBRFGH5m9+7kq14C1BbaE5oKUqClDVgkQeECiIkfESMQfqDGYFsFMWoiJMSEQAJEjWiaAgVLIn9M2sRojAWV0JIYlQhCIw1ce1ChUkS+BIpt7m53fOZaqtfSdnfvyq99kvdmZ3Z27n1m3veddwZw4cKFCxcuXEAghZCyxItz3nwgVgRNm8qW0QkdTFyHLhshxRH8ZZ4Vs3b/gxQhaSKyeqmOR9LToeEZ1lZSHoJEGuvDWeq9/s0gmQ6W7ayEYZj7IIbXYOKJdiHqY0gCSRGJk5g1ZibV/ZDVx+AEUn4LU6vCfUYdxldeFUJIOICGZDAHPpqKn8ocZu1niv1ZFWIxtahARHsPTaVj4BAp8RFZt9GDyZdyEZWvslrKUUfBNkQHTXE/J2atCOy6AJuwRaS6ulrPz88PaJq2BkphxBXuoNRT3m5oaGheWnxwHTSxgQ49AvZhQq1sxPucmFR+2c6Hoj+FCwsLJ5umOVNK6aHdxgzDaGQZJYkPKIvYnuDIrJ9hUfLwyNqfYIa+5NBPwAmkjHASduG2tkFM39Fu9bO7EgmFQgtZrKPMo3jRZfuNVPZPkljYm8QdFSi10Wh01TR/eSFMsR+OIS9ztDIxsfILq1/0cXaSmEJF3+LsB9FFQsFDmcG2xf2QUFCT8rjP55uA8LiDNJLnqdAJigHbEOn8edfOF32I0ISKqfDCARQeCGk0xzlN41fMOd355vHLtwpUSH6Hs2vZRHogxGx5tvQFq90TiFB5zev1juSjDw7BSdjOopZlxTXPguLGW2/sZL0STkKzrr0uj5ZYCho9RJqbm3Obmpp2ksx6JI9RJPIk5SOPxzMXQu7lqvwG25B5SBdTrfSMEwmHw9NpEuUk8QrlQaQGauwCqKBxZEGIHvQ9ydhbFcnwLjHDSldNmRP9gnkSgpxBD1ILDinmiWXLVI51imSu2Pua+Vo8+RwcSnGp6/p3DJsXMbS4Qc3au6K0Zeh9Muh+4OlO0o51y9DBSyKGvI0hgiVTki1lL9Pi5yMZmMjgSBMsZ0UqZAsZ4y5vKXRb9Yn5lJeQDOIWNSgJlWudp2cdgGk2kEQnNDMMC7BK5FrXDi2cbJJ3h1SOL6/Gn4Xw8zeTbV+R616IYT+KnO3X7AxnjYiIH087nKXnCWCqLg8xEn0KPXoUUV9XOPZEPIh6s+lDZ09F1vrpt2WhUNkyvvF3f3eakfXztLS0mkAg0HFXFWEB8kLJFMTEIXYfB6eQymRQcenv3IrrvqezmHxO494VV5Sb5u1YLNZAAqp9C7eER/sZpYp9N+Xm5p7v/cLailzEGaRDpelOiSjTLIcW23tj2LOLuFOuYttsKj1WvaTiN/j8Ax/T+Vw8wDjLSTjc0tLycU5OTuf/X1g66vK2I8piH5xCylqa0e5w5/pZnPVP2PIUZex/r6W/u614kJGUaS/hSgZ6v7B+Zjf1r+krB2AXgkFCl++fir42lQpvTUEKVByJRLJ6N1on8vsDVxgc98QPPXZgikvIrlSny7kkMRlDBMtERHBjDPqI/YxeysQiFr7gZmYeY//N9fX1dAFN3ZAkG/XuYGJdXV2Cf9u6DhKB7R3w6Fu5KjWDZLI3SWIbvKOWtBmLv8nIyMjiigxHisBJKc/Ozt7c2traM6aj6yDZWpZFIhUUdcGQqKDyCUPbU/NLcE1BQUERW1aTxPI+/ZLHTcqmtra2imAw2Onogi5+76Sbq0hkB00n0Wckfu2U2raioiJ1zK0iiReRehIK99PnVmRmZk5SFcc3jSJr9xXuzlsgjNXMiw73vDC1nX8YK693X2DkJ/Mfg4Emlsf/UIc3JHWQEoEqlQ/VKJHnStXhjJcFxvFYzD9a0+QipPi2vzc4WSMo8ZueIfmjkydPZjKV2Ip7ABL5LC8vrx4uXLhw4cKFC+Bf+esUnQzyJPIAAAAASUVORK5CYII=" />
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