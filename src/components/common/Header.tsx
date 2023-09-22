import { Toaster } from "react-hot-toast"
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from "../icons";

export default function Header() {
  return (
    <header className="h-10 bg-[#1E1F24]">
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <div className="h-full container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-x-5 font-medium text-xs text-white">
          <div className="bg-[#4F95FF] py-3 px-5">TREND</div>
          <div className="font-normal">Figma Sold for $20 Million...</div>
        </div>
        <div className="flex items-center gap-x-3">
          <div>
            <YoutubeIcon size="15" color="white" />
          </div>
          <div>
            <FacebookIcon size="15" color="white" />
          </div>
          <div>
            <TwitterIcon size="15" color="white" />
          </div>
          <div>
            <InstagramIcon size="15" color="white" />
          </div>
        </div>
      </div>
    </header>
  );
}
