import Image from "next/image";

export default function Navbar() {
  return (
    <div className="h-16">
      <div className="h-full container mx-auto flex items-center justify-between">
        <div>
          <Image
            width={79}
            height={31}
            alt="Logo"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAAAXCAYAAAClK3kiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARhSURBVHgB7Vm7VhsxEB2vzevwiOnSsXSkwnTpsP/AdEll0qWL+QLsLh3wBcZfQPgCTJkKUyWpsunSxQEK83Tu3Ug+sqzd4wUbcE7uOWa1o52RNBrNQ4j8x72Qlgdifn6+OD09/WVycrJ5dXX1TZ4BssDExMSbqampnOd5rZubm5YMGRl5AObm5vKpVGqH7evr61O5J6B4n892ux3IEHB3d3eCeflsY0Mlk8kULi4uGjJE9CmOu4WBS51OJ4fBcyRF8GbVj7u5NeiiFxYWKpofY6waY1QhoyIPxOzsLOX5Jg1Wl8ejIUNEj+KwqG0orYxmFgsiqYnFNVR3Vu1izmCpY1LlFiCDY1s31Bhjia7ioDQeubLRd3h2dlY0P1bW+MsglW5vb4/wrMuAgMwUxPiQ811GAPi2ALK5kd2TgveGDBke/8DBb0qv0oim/bGyrMCkwWp2qVB5JuAccQrW0KzyB6UN3b8RocVh8dt2B47oiYsB9KZ2vApZdbwr8kwA3QUy4vlkXM6UgIJ+uxigtB8OckkcE6Ul4igz8uYh74WmQ9FO2S4w4uL4UUYOMpbOz883GM1hVUVDZgP0Oulqjj5//F4Fn324iL0I2QyCS/g2j8xgC7QW5kwXtW6uGanWvhkAM+l0Ou+aMHKfQNxw0X0qyQwSeC1CQTUMmlWDM9Dw+Pvi2CgTzA1VmqMjt15AGMBEbZIOLpDLBwPVkSnHCD6LuqGUXnPJhhLrmPOOdaJCIK35gLRmQx97TyLSjaj0ApOMiqC+bijnf2DKxmQLsIp3+BXYlhhwDBXNXWNV8Ntz8dGf4bElMcDiA8pWm9gDKKwGOoNLARa2bHVnmUHoFyrOl2RwKg4W2lUSTH3H5kmSsnBXqWQ0jx3dVSyg4poH+bDoZpxs+j8luy8ToEK5sZTjMhzT3XiSEFEWZ5o32kWLJ3YxSQClfVKbsCfDx+GgHyZWXBRo4nzymMoIAUsINw7OviKjUd5ASFyruhynCRxZH1YhjwEor4yN2pUnABUXuDrsKKmho2SfoEwmzocFMiKonO3R4UX5HxyJuOLeBnUcyonwgb78Y/CQxzVcHchpVl103mg4yMcGX5KCf2zh0VSMGxATixE8fRYH/gPdVkenR3m2X0S6kpMxR+jFYXXMa+zFOhdn01XuY+dE9ntX2erysyZjjvDqnCEeR+yzyr+mSYNC2qCdopZtE6zr8GNd997gb6K+e2tfTc/MzHwF/6aWxSeusVMsWxBxP+L9p/wNGC81D8smyF8GbxMbuYInx1k3vwknnE6nIOv15eVlw14ML0lZF0vvnWFXNvoCbFwW82AFsI73FVsGvnvFOXDNGKdi9rEsA20RepGem0RVKvHjksQjTEChhN2oisAou3IuPn6CI1tTC+32o9RZU0V9rFXyXs+mQXGdOB5Vkold09pgucXKIUZeNfIKVh0p3vou4XVRJ7iwsEaS/w0wrYFF8maDVh3YimY/IzhvJRLeJD8p/gBpuSfj37A3DAAAAABJRU5ErkJggg=="
          />
        </div>
        <nav className="font-medium text-[#2F2F2F]">
          <ul className="flex items-center justify-between gap-x-12">
            <li>Home</li>
            <li>Categories</li>
            <li>Posts</li>
            <li>Sign up</li>
            <li>Login</li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M15 11.4844C14.3047 11.4844 13.625 11.6906 13.0468 12.0769C12.4687 12.4632 12.0181 13.0122 11.752 13.6546C11.4859 14.297 11.4163 15.0039 11.5519 15.6859C11.6876 16.3678 12.0224 16.9943 12.5141 17.4859C13.0057 17.9776 13.6322 18.3124 14.3141 18.4481C14.9961 18.5837 15.703 18.5141 16.3454 18.248C16.9878 17.9819 17.5368 17.5313 17.9231 16.9532C18.3094 16.375 18.5156 15.6953 18.5156 15C18.5125 14.0685 18.1411 13.1761 17.4825 12.5175C16.8239 11.8589 15.9315 11.4875 15 11.4844ZM15 17.1094C14.5828 17.1094 14.175 16.9857 13.8281 16.7539C13.4812 16.5221 13.2108 16.1927 13.0512 15.8072C12.8915 15.4218 12.8498 14.9977 12.9312 14.5885C13.0125 14.1793 13.2134 13.8034 13.5084 13.5084C13.8034 13.2134 14.1793 13.0125 14.5885 12.9312C14.9977 12.8498 15.4218 12.8915 15.8072 13.0512C16.1927 13.2108 16.5221 13.4812 16.7539 13.8281C16.9857 14.175 17.1094 14.5828 17.1094 15C17.1063 15.5585 16.8831 16.0932 16.4882 16.4882C16.0932 16.8831 15.5585 17.1063 15 17.1094ZM5.625 11.4844C4.92968 11.4844 4.24997 11.6906 3.67183 12.0769C3.09368 12.4632 2.64308 13.0122 2.37699 13.6546C2.1109 14.297 2.04128 15.0039 2.17693 15.6859C2.31258 16.3678 2.64741 16.9943 3.13908 17.4859C3.63075 17.9776 4.25717 18.3124 4.93914 18.4481C5.6211 18.5837 6.32798 18.5141 6.97037 18.248C7.61277 17.9819 8.16184 17.5313 8.54814 16.9532C8.93444 16.375 9.14063 15.6953 9.14063 15C9.13754 14.0685 8.76615 13.1761 8.10751 12.5175C7.44887 11.8589 6.55645 11.4875 5.625 11.4844ZM5.625 17.1094C5.20781 17.1094 4.79998 16.9857 4.4531 16.7539C4.10621 16.5221 3.83585 16.1927 3.67619 15.8072C3.51654 15.4218 3.47477 14.9977 3.55616 14.5885C3.63755 14.1793 3.83845 13.8034 4.13345 13.5084C4.42845 13.2134 4.8043 13.0125 5.21348 12.9312C5.62266 12.8498 6.04679 12.8915 6.43222 13.0512C6.81766 13.2108 7.1471 13.4812 7.37888 13.8281C7.61066 14.175 7.73438 14.5828 7.73438 15C7.7313 15.5585 7.50807 16.0932 7.11315 16.4882C6.71824 16.8831 6.18349 17.1063 5.625 17.1094ZM24.375 11.4844C23.6797 11.4844 23 11.6906 22.4218 12.0769C21.8437 12.4632 21.3931 13.0122 21.127 13.6546C20.8609 14.297 20.7913 15.0039 20.9269 15.6859C21.0626 16.3678 21.3974 16.9943 21.8891 17.4859C22.3807 17.9776 23.0072 18.3124 23.6891 18.4481C24.3711 18.5837 25.078 18.5141 25.7204 18.248C26.3628 17.9819 26.9118 17.5313 27.2981 16.9532C27.6844 16.375 27.8906 15.6953 27.8906 15C27.8875 14.0685 27.5161 13.1761 26.8575 12.5175C26.1989 11.8589 25.3065 11.4875 24.375 11.4844ZM24.375 17.1094C23.9578 17.1094 23.55 16.9857 23.2031 16.7539C22.8562 16.5221 22.5858 16.1927 22.4262 15.8072C22.2665 15.4218 22.2248 14.9977 22.3062 14.5885C22.3875 14.1793 22.5884 13.8034 22.8834 13.5084C23.1784 13.2134 23.5543 13.0125 23.9635 12.9312C24.3727 12.8498 24.7968 12.8915 25.1822 13.0512C25.5677 13.2108 25.8971 13.4812 26.1289 13.8281C26.3607 14.175 26.4844 14.5828 26.4844 15C26.4813 15.5585 26.2581 16.0932 25.8632 16.4882C25.4682 16.8831 24.9335 17.1063 24.375 17.1094Z"
                  fill="#2F2F2F"
                />
              </svg>
            </li>
          </ul>
        </nav>
        <div className="flex items-center w-44 h-8">
            <input className="bg-[#2F323C] w-full h-full py-3 px-4 placeholder:text-[10px] placeholder:text-white text-xs text-white outline-none" type="text" name="search" placeholder="Search..." />
            <button className="bg-[#4F95FF] w-full h-full flex-1 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M15.8273 15.171L12.3507 11.6867C13.5545 10.3106 14.1763 8.52058 14.0849 6.69459C13.9935 4.8686 13.1961 3.14961 11.8609 1.90064C10.5257 0.651675 8.75742 -0.0294972 6.9294 0.000980355C5.10139 0.0314579 3.35677 0.771199 2.06398 2.06398C0.771199 3.35677 0.0314579 5.10139 0.000980355 6.9294C-0.0294972 8.75742 0.651675 10.5257 1.90064 11.8609C3.14961 13.1961 4.8686 13.9935 6.69459 14.0849C8.52058 14.1763 10.3106 13.5545 11.6867 12.3507L15.171 15.8273C15.2581 15.9143 15.3761 15.9632 15.4992 15.9632C15.6222 15.9632 15.7403 15.9143 15.8273 15.8273C15.9143 15.7403 15.9632 15.6222 15.9632 15.4992C15.9632 15.3761 15.9143 15.2581 15.8273 15.171ZM0.967913 7.06166C0.967913 5.85643 1.32531 4.67827 1.9949 3.67616C2.66449 2.67405 3.6162 1.89299 4.72969 1.43177C5.84317 0.970551 7.06842 0.849874 8.25049 1.085C9.43257 1.32013 10.5184 1.90051 11.3706 2.75273C12.2228 3.60496 12.8032 4.69076 13.0383 5.87283C13.2735 7.0549 13.1528 8.28015 12.6916 9.39364C12.2303 10.5071 11.4493 11.4588 10.4472 12.1284C9.44506 12.798 8.26689 13.1554 7.06166 13.1554C5.44614 13.1533 3.89737 12.5107 2.75501 11.3683C1.61266 10.226 0.969981 8.67719 0.967913 7.06166Z"
                  fill="white"
                />
              </svg>
            </button>
        </div>
      </div>
    </div>
  );
}
