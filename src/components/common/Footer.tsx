import Image from "next/image"
import axios from "axios";
import { CircleIcon, FacebookIcon, FooterRightArrowIcon, InstagramIcon, MailIcon, PaperPlaneIcon, TwitterIcon, YoutubeIcon } from "../icons";

type Category = {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

async function getCategories() {
  const res = await axios.get(process.env.API_URL + '/categories')
  return res.data
}

export default async function Footer() {
  const categories: Category[] = await getCategories()

  return (
    <footer>
      <div className="bg-white py-20">
        <div className="container mx-auto flex justify-between gap-x-48">
          <div>
            <div>
              <Image width={115} height={46} alt="Odrin Logo" src="data:image/png;base64,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" />
            </div>
            <div className="mt-8 text-[#666666] text-sm">
              Pharetra lacus, lacus orci maecenas morbi vulputate quam faucibus nulla est nec luctus volutpat morbi, orci arcu nullam ut suscipit ipsum netus purus nullam metus amet semper massa bibendum
            </div>
            <div className="mt-8 flex items-center gap-x-5">
              <div className="border border-[#D33D97] rounded-full p-2">
                <InstagramIcon size="20" color="#D33D97" />
              </div>
              <div className="border border-[#1D83FF] rounded-full p-2">
                <TwitterIcon size="20" color="#1D83FF" />
              </div>
              <div className="border border-[#E60000] rounded-full p-2">
                <YoutubeIcon size="20" color="#E60000" />
              </div>
              <div className="border border-[#1D83FF] rounded-full p-2">
                <FacebookIcon size="20" color="#1976D2" />
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-x-[11px]">
              <div className="text-[#0E0E0E] text-xl font-semibold">Categories</div>
              <div>
                <CircleIcon />
              </div>
              <div className="bg-[#4F95FF] w-[179px] h-[2px] rounded-[10px]"></div>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-y-5">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center gap-x-2">
                  <div>
                    <FooterRightArrowIcon />
                  </div>
                  <div className="text-[#0E0E0E] text-sm">{category.name}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-x-[11px]">
              <div className="text-[#0E0E0E] text-xl font-semibold">Newsletter</div>
              <div>
                <CircleIcon />
              </div>
              <div className="bg-[#4F95FF] w-[179px] h-[2px] rounded-[10px]"></div>
            </div>
            <div className="mt-8 bg-[#F7F7F7] py-[22px] px-5 rounded-[5px]">
              <div className="flex items-center gap-x-[10px]">
                <div>
                  <MailIcon size="24" color="#4F95FF" />
                </div>
                <div className="text-[#0E0E0E] text-sm font-semibold">Newsletter</div>
              </div>
              <div className="mt-[7px] text-[#666666] text-xs">Be the first to know about new news by subscribing to our newsletter.</div>
              <div className="mt-4 border-y-2 border-l-2 border-[#4F95FF] rounded-[25px] h-10 flex items-center">
                <input className="w-full h-full rounded-[25px] py-3 px-5 text-[10px] placeholder:text-[#666666] outline-none" type="email" placeholder="E-Mail Address..." />
                <button className="w-full h-full rounded-[25px] flex-1 bg-[#4F95FF] p-[10px]">
                  <PaperPlaneIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0E0E0E] py-[22px]">
        <div className="container mx-auto flex items-center justify-between text-white text-sm">
          <div>Odrin 2022 © All rights reserved.</div>
          <div className="flex items-center gap-x-5">
            <div>Policy</div>
            <div>About Us</div>
            <div>Contact</div>
          </div>
        </div>
      </div>
    </footer>
  )
}