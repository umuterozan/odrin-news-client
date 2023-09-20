import Image from "next/image";
import { IPost } from "@/lib/types";
import { getPosts } from "@/lib/actions";

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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M13 2H11.5V1.5C11.5 1.36739 11.4473 1.24021 11.3536 1.14645C11.2598 1.05268 11.1326 1 11 1C10.8674 1 10.7402 1.05268 10.6464 1.14645C10.5527 1.24021 10.5 1.36739 10.5 1.5V2H5.5V1.5C5.5 1.36739 5.44732 1.24021 5.35355 1.14645C5.25979 1.05268 5.13261 1 5 1C4.86739 1 4.74021 1.05268 4.64645 1.14645C4.55268 1.24021 4.5 1.36739 4.5 1.5V2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V13C2 13.2652 2.10536 13.5196 2.29289 13.7071C2.48043 13.8946 2.73478 14 3 14H13C13.2652 14 13.5196 13.8946 13.7071 13.7071C13.8946 13.5196 14 13.2652 14 13V3C14 2.73478 13.8946 2.48043 13.7071 2.29289C13.5196 2.10536 13.2652 2 13 2ZM3 3H4.5V3.5C4.5 3.63261 4.55268 3.75979 4.64645 3.85355C4.74021 3.94732 4.86739 4 5 4C5.13261 4 5.25979 3.94732 5.35355 3.85355C5.44732 3.75979 5.5 3.63261 5.5 3.5V3H10.5V3.5C10.5 3.63261 10.5527 3.75979 10.6464 3.85355C10.7402 3.94732 10.8674 4 11 4C11.1326 4 11.2598 3.94732 11.3536 3.85355C11.4473 3.75979 11.5 3.63261 11.5 3.5V3H13V5H3V3ZM13 13H3V6H13V13ZM8 10.25C8.00073 10.5472 7.91315 10.8379 7.74838 11.0853C7.58361 11.3326 7.34907 11.5255 7.07453 11.6393C6.79998 11.7531 6.49781 11.7828 6.20635 11.7247C5.9149 11.6665 5.64729 11.523 5.4375 11.3125C5.34399 11.2188 5.29148 11.0918 5.29148 10.9594C5.29148 10.827 5.34399 10.7 5.4375 10.6062C5.48349 10.5592 5.53841 10.5218 5.59906 10.4963C5.6597 10.4707 5.72483 10.4576 5.79063 10.4576C5.85642 10.4576 5.92155 10.4707 5.98219 10.4963C6.04284 10.5218 6.09776 10.5592 6.14375 10.6062C6.23973 10.698 6.36723 10.7494 6.5 10.75C6.63261 10.75 6.75979 10.6973 6.85355 10.6036C6.94732 10.5098 7 10.3826 7 10.25C7 10.1174 6.94732 9.99021 6.85355 9.89645C6.75979 9.80268 6.63261 9.75 6.5 9.75C6.40604 9.74947 6.31413 9.72248 6.2348 9.67212C6.15548 9.62175 6.09195 9.55005 6.0515 9.46524C6.01106 9.38043 5.99532 9.28594 6.00611 9.1926C6.0169 9.09926 6.05377 9.01085 6.1125 8.9375L6.4625 8.5H5.75C5.61739 8.5 5.49021 8.44732 5.39645 8.35355C5.30268 8.25979 5.25 8.13261 5.25 8C5.25 7.86739 5.30268 7.74021 5.39645 7.64645C5.49021 7.55268 5.61739 7.5 5.75 7.5H7.5C7.59396 7.50053 7.68587 7.52752 7.7652 7.57788C7.84452 7.62825 7.90805 7.69994 7.9485 7.78476C7.98894 7.86957 8.00468 7.96406 7.99389 8.0574C7.9831 8.15074 7.94623 8.23915 7.8875 8.3125L7.3375 9.00625C7.54174 9.14305 7.70907 9.32813 7.82463 9.54509C7.9402 9.76205 8.00044 10.0042 8 10.25ZM10.5 8V11.25C10.5 11.3826 10.4473 11.5098 10.3536 11.6036C10.2598 11.6973 10.1326 11.75 10 11.75C9.86739 11.75 9.74021 11.6973 9.64645 11.6036C9.55268 11.5098 9.5 11.3826 9.5 11.25V9L9.3 9.15C9.19334 9.22797 9.06043 9.26115 8.92965 9.24247C8.79886 9.22378 8.68056 9.15471 8.6 9.05C8.52044 8.94391 8.48627 8.81056 8.50502 8.67929C8.52378 8.54801 8.59391 8.42957 8.7 8.35L9.7 7.6C9.77428 7.54429 9.86262 7.51036 9.9551 7.50202C10.0476 7.49368 10.1406 7.51126 10.2236 7.55279C10.3067 7.59431 10.3765 7.65815 10.4253 7.73713C10.4741 7.81612 10.5 7.90714 10.5 8Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>06 Aug, 2022</div>
              </div>
              <div className="flex items-center gap-x-[5px]">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M8.00004 1.33333C4.32404 1.33333 1.33337 3.72599 1.33337 6.66666C1.33337 8.60533 2.59871 10.344 4.66671 11.2893V14.6667L8.22671 11.9967C11.798 11.9013 14.6667 9.54666 14.6667 6.66666C14.6667 3.72599 11.676 1.33333 8.00004 1.33333ZM8.00004 10.6667H7.77804L6.00004 12V10.3887L5.57271 10.224C3.78004 9.53399 2.66671 8.17066 2.66671 6.66666C2.66671 4.46066 5.05937 2.66666 8.00004 2.66666C10.9407 2.66666 13.3334 4.46066 13.3334 6.66666C13.3334 8.87266 10.9407 10.6667 8.00004 10.6667Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>69</div>
              </div>
              <div className="flex items-center gap-x-[5px]">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M8 1.33333C7.34073 1.33333 6.69626 1.52882 6.1481 1.8951C5.59994 2.26137 5.17269 2.78196 4.9204 3.39105C4.66811 4.00014 4.6021 4.67036 4.73072 5.31696C4.85933 5.96357 5.1768 6.55751 5.64298 7.02368C6.10915 7.48986 6.7031 7.80733 7.3497 7.93595C7.9963 8.06456 8.66652 7.99855 9.27561 7.74626C9.8847 7.49397 10.4053 7.06673 10.7716 6.51856C11.1378 5.9704 11.3333 5.32593 11.3333 4.66666C11.3333 3.78261 10.9821 2.93476 10.357 2.30964C9.7319 1.68452 8.88406 1.33333 8 1.33333ZM8 6.66666C7.60444 6.66666 7.21776 6.54936 6.88886 6.3296C6.55996 6.10984 6.30362 5.79748 6.15224 5.43203C6.00087 5.06658 5.96126 4.66444 6.03843 4.27648C6.1156 3.88852 6.30608 3.53215 6.58579 3.25245C6.86549 2.97274 7.22186 2.78226 7.60982 2.70509C7.99778 2.62792 8.39991 2.66753 8.76537 2.8189C9.13082 2.97028 9.44318 3.22662 9.66294 3.55552C9.8827 3.88442 10 4.2711 10 4.66666C10 5.19709 9.78929 5.7058 9.41421 6.08088C9.03914 6.45595 8.53043 6.66666 8 6.66666ZM14 14V13.3333C14 12.0957 13.5083 10.9087 12.6332 10.0335C11.758 9.15833 10.571 8.66666 9.33333 8.66666H6.66667C5.42899 8.66666 4.242 9.15833 3.36683 10.0335C2.49167 10.9087 2 12.0957 2 13.3333V14H3.33333V13.3333C3.33333 12.4493 3.68452 11.6014 4.30964 10.9763C4.93477 10.3512 5.78261 10 6.66667 10H9.33333C10.2174 10 11.0652 10.3512 11.6904 10.9763C12.3155 11.6014 12.6667 12.4493 12.6667 13.3333V14H14Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>byrktrdesign</div>
              </div>
            </div>
            <div className="mt-4 text-4xl font-semibold text-white">
              WSL: Everton 0-0 Leicester City - Toffees close to opener
            </div>
            <div className="flex items-center gap-x-5 mt-[58px]">
              <button>
                <svg
                  width="49"
                  height="49"
                  viewBox="0 0 49 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="24.3038"
                    cy="24.3038"
                    r="23.3038"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <path
                    d="M15.4082 23.7627L22.2437 16.9272C22.3888 16.7868 22.5829 16.7084 22.7848 16.7084C22.9867 16.7084 23.1808 16.7868 23.326 16.9272C23.4686 17.0712 23.5486 17.2657 23.5486 17.4684C23.5486 17.671 23.4686 17.8655 23.326 18.0095L17.7816 23.5443L32.6582 23.5443C32.8597 23.5443 33.0528 23.6243 33.1953 23.7668C33.3377 23.9092 33.4177 24.1024 33.4177 24.3038C33.4177 24.5052 33.3377 24.6984 33.1953 24.8408C33.0528 24.9833 32.8597 25.0633 32.6582 25.0633L17.7816 25.0633L23.326 30.5981C23.4471 30.7457 23.509 30.933 23.4996 31.1237C23.4902 31.3144 23.4103 31.4947 23.2753 31.6297C23.1403 31.7647 22.9599 31.8447 22.7693 31.854C22.5786 31.8634 22.3912 31.8015 22.2437 31.6804L15.4082 24.8449C15.2656 24.7009 15.1856 24.5065 15.1856 24.3038C15.1856 24.1011 15.2656 23.9067 15.4082 23.7627Z"
                    fill="white"
                  />
                </svg>
              </button>
              <button>
                <svg
                  width="50"
                  height="49"
                  viewBox="0 0 50 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="24.9115"
                    cy="24.3038"
                    r="23.3038"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <path
                    d="M33.807 24.8449L26.9715 31.6804C26.8264 31.8207 26.6323 31.8992 26.4304 31.8992C26.2285 31.8992 26.0344 31.8207 25.8893 31.6804C25.7466 31.5364 25.6666 31.3419 25.6666 31.1392C25.6666 30.9366 25.7466 30.7421 25.8893 30.5981L31.4336 25.0633H16.557C16.3555 25.0633 16.1624 24.9833 16.0199 24.8408C15.8775 24.6984 15.7975 24.5052 15.7975 24.3038C15.7975 24.1024 15.8775 23.9092 16.0199 23.7668C16.1624 23.6243 16.3555 23.5443 16.557 23.5443H31.4336L25.8893 18.0095C25.7681 17.8619 25.7063 17.6746 25.7156 17.4839C25.725 17.2932 25.8049 17.1129 25.9399 16.9779C26.0749 16.8429 26.2553 16.7629 26.446 16.7536C26.6366 16.7442 26.824 16.8061 26.9715 16.9272L33.807 23.7627C33.9496 23.9067 34.0296 24.1011 34.0296 24.3038C34.0296 24.5065 33.9496 24.7009 33.807 24.8449Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="bg-white py-[22px] px-5 rounded-[10px] grid gap-y-5">
            {posts.map((post: IPost) => (
              <div key={post.id} className="flex items-center gap-x-[21px]">
                <div className="flex-shrink-0 w-[120px] h-[79px] relative">
                  <Image
                    fill
                    alt="Post Image"
                    src={post.thumbnail}
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="grid gap-y-[10px]">
                  <div className="text-xs flex items-center gap-x-1">
                    <div className="font-medium text-white bg-[#4F95FF] py-[3px] px-[15px]">
                      {post.category}
                    </div>
                    <div className="flex items-center gap-x-[5px]">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="16"
                          viewBox="0 0 17 16"
                          fill="none"
                        >
                          <path
                            d="M8.69987 1.33334C5.02387 1.33334 2.0332 3.72601 2.0332 6.66668C2.0332 8.60534 3.29854 10.344 5.36654 11.2893V14.6667L8.92654 11.9967C12.4979 11.9013 15.3665 9.54668 15.3665 6.66668C15.3665 3.72601 12.3759 1.33334 8.69987 1.33334ZM8.69987 10.6667H8.47787L6.69987 12V10.3887L6.27254 10.224C4.47987 9.53401 3.36654 8.17068 3.36654 6.66668C3.36654 4.46068 5.7592 2.66668 8.69987 2.66668C11.6405 2.66668 14.0332 4.46068 14.0332 6.66668C14.0332 8.87268 11.6405 10.6667 8.69987 10.6667Z"
                            fill="#666666"
                          />
                        </svg>
                      </div>
                      <div className="text-[#4F95FF]">{post.commentsCount}</div>
                    </div>
                  </div>
                  <div className="font-semibold">{post.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
