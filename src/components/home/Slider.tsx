import Image from "next/image";

const mockPosts = [
  {
    category: "Space",
    comments: 35,
    title: "For the first time in history, an asteroid was attacked"
  },
  {
    category: "Games",
    comments: 6,
    title: "When will GTA 6 be released?"
  },
  {
    category: "Software",
    comments: 12,
    title: "NVIDIA introduces DLSS technology"
  },
  {
    category: "Travel",
    comments: 49,
    title: "Mexico's 1,500-year-old 'lost' pyramids"
  },
]

export default function Slider() {
  return (
    <section className="bg-[url('/slider_background.png')] h-[575px] bg-cover bg-no-repeat bg-center">
      <div className="h-full bg-black bg-opacity-50">
        <div className="h-full flex items-center gap-x-[70px] container mx-auto">
          <div>
            <div className="flex items-center gap-x-6 text-xs text-white">
              <div className="bg-[#4F95FFBF] font-medium py-[5px] px-[15px]">Sports</div>
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
                <div>byrktdesign</div>
              </div>
            </div>
            <div className="mt-4 text-4xl font-semibold text-white">
              WSL: Everton 0-0 Leicester City - Toffees close to opener
            </div>
            <div className="flex items-center gap-x-5 mt-[58px]">
              <button>
                <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24.3038" cy="24.3038" r="23.3038" stroke="white" stroke-width="2"/>
                  <path d="M15.4082 23.7627L22.2437 16.9272C22.3888 16.7868 22.5829 16.7084 22.7848 16.7084C22.9867 16.7084 23.1808 16.7868 23.326 16.9272C23.4686 17.0712 23.5486 17.2657 23.5486 17.4684C23.5486 17.671 23.4686 17.8655 23.326 18.0095L17.7816 23.5443L32.6582 23.5443C32.8597 23.5443 33.0528 23.6243 33.1953 23.7668C33.3377 23.9092 33.4177 24.1024 33.4177 24.3038C33.4177 24.5052 33.3377 24.6984 33.1953 24.8408C33.0528 24.9833 32.8597 25.0633 32.6582 25.0633L17.7816 25.0633L23.326 30.5981C23.4471 30.7457 23.509 30.933 23.4996 31.1237C23.4902 31.3144 23.4103 31.4947 23.2753 31.6297C23.1403 31.7647 22.9599 31.8447 22.7693 31.854C22.5786 31.8634 22.3912 31.8015 22.2437 31.6804L15.4082 24.8449C15.2656 24.7009 15.1856 24.5065 15.1856 24.3038C15.1856 24.1011 15.2656 23.9067 15.4082 23.7627Z" fill="white"/>
                </svg>
              </button>
              <button>
                <svg width="50" height="49" viewBox="0 0 50 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24.9115" cy="24.3038" r="23.3038" stroke="white" stroke-width="2"/>
                  <path d="M33.807 24.8449L26.9715 31.6804C26.8264 31.8207 26.6323 31.8992 26.4304 31.8992C26.2285 31.8992 26.0344 31.8207 25.8893 31.6804C25.7466 31.5364 25.6666 31.3419 25.6666 31.1392C25.6666 30.9366 25.7466 30.7421 25.8893 30.5981L31.4336 25.0633H16.557C16.3555 25.0633 16.1624 24.9833 16.0199 24.8408C15.8775 24.6984 15.7975 24.5052 15.7975 24.3038C15.7975 24.1024 15.8775 23.9092 16.0199 23.7668C16.1624 23.6243 16.3555 23.5443 16.557 23.5443H31.4336L25.8893 18.0095C25.7681 17.8619 25.7063 17.6746 25.7156 17.4839C25.725 17.2932 25.8049 17.1129 25.9399 16.9779C26.0749 16.8429 26.2553 16.7629 26.446 16.7536C26.6366 16.7442 26.824 16.8061 26.9715 16.9272L33.807 23.7627C33.9496 23.9067 34.0296 24.1011 34.0296 24.3038C34.0296 24.5065 33.9496 24.7009 33.807 24.8449Z" fill="white"/>
                </svg>
              </button>
            </div>
          </div>
          <div className="bg-white py-[22px] px-5 rounded-[10px] grid gap-y-5">
            {mockPosts.map((post, key) => (
              <div key={key} className="flex items-center gap-x-[21px]">
                <div className="flex-shrink-0">
                  <Image width={120} height={79} alt="Post Image" src="data:image/png;base64,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" />
                </div>
                <div className="grid gap-y-[10px]">
                  <div className="text-xs flex items-center">
                    <div className="font-medium text-white bg-[#4F95FF] py-[3px] px-[15px]">{post.category}</div>
                    <div className="flex items-center gap-x-[5px] -translate-x-1/4">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                          <path d="M8.69987 1.33334C5.02387 1.33334 2.0332 3.72601 2.0332 6.66668C2.0332 8.60534 3.29854 10.344 5.36654 11.2893V14.6667L8.92654 11.9967C12.4979 11.9013 15.3665 9.54668 15.3665 6.66668C15.3665 3.72601 12.3759 1.33334 8.69987 1.33334ZM8.69987 10.6667H8.47787L6.69987 12V10.3887L6.27254 10.224C4.47987 9.53401 3.36654 8.17068 3.36654 6.66668C3.36654 4.46068 5.7592 2.66668 8.69987 2.66668C11.6405 2.66668 14.0332 4.46068 14.0332 6.66668C14.0332 8.87268 11.6405 10.6667 8.69987 10.6667Z" fill="#666666"/>
                        </svg>
                      </div>
                      <div className="text-[#4F95FF]">{post.comments}</div>
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
