import Image from "next/image";
import Link from "next/link";
import { AuthorIcon, DotsIcon, SearchIcon } from "../icons";
import { cookies } from "next/headers";

export default async function Navbar() {
  const username: any = cookies().get('username')?.value
  
  return (
    <div className="h-16">
      <div className="h-full container mx-auto flex items-center justify-between">
        <Link href="/">
          <div>
            <Image
              width={79}
              height={31}
              alt="Logo"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAAAXCAYAAAClK3kiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARhSURBVHgB7Vm7VhsxEB2vzevwiOnSsXSkwnTpsP/AdEll0qWL+QLsLh3wBcZfQPgCTJkKUyWpsunSxQEK83Tu3Ug+sqzd4wUbcE7uOWa1o52RNBrNQ4j8x72Qlgdifn6+OD09/WVycrJ5dXX1TZ4BssDExMSbqampnOd5rZubm5YMGRl5AObm5vKpVGqH7evr61O5J6B4n892ux3IEHB3d3eCeflsY0Mlk8kULi4uGjJE9CmOu4WBS51OJ4fBcyRF8GbVj7u5NeiiFxYWKpofY6waY1QhoyIPxOzsLOX5Jg1Wl8ejIUNEj+KwqG0orYxmFgsiqYnFNVR3Vu1izmCpY1LlFiCDY1s31Bhjia7ioDQeubLRd3h2dlY0P1bW+MsglW5vb4/wrMuAgMwUxPiQ811GAPi2ALK5kd2TgveGDBke/8DBb0qv0oim/bGyrMCkwWp2qVB5JuAccQrW0KzyB6UN3b8RocVh8dt2B47oiYsB9KZ2vApZdbwr8kwA3QUy4vlkXM6UgIJ+uxigtB8OckkcE6Ul4igz8uYh74WmQ9FO2S4w4uL4UUYOMpbOz883GM1hVUVDZgP0Oulqjj5//F4Fn324iL0I2QyCS/g2j8xgC7QW5kwXtW6uGanWvhkAM+l0Ou+aMHKfQNxw0X0qyQwSeC1CQTUMmlWDM9Dw+Pvi2CgTzA1VmqMjt15AGMBEbZIOLpDLBwPVkSnHCD6LuqGUXnPJhhLrmPOOdaJCIK35gLRmQx97TyLSjaj0ApOMiqC+bijnf2DKxmQLsIp3+BXYlhhwDBXNXWNV8Ntz8dGf4bElMcDiA8pWm9gDKKwGOoNLARa2bHVnmUHoFyrOl2RwKg4W2lUSTH3H5kmSsnBXqWQ0jx3dVSyg4poH+bDoZpxs+j8luy8ToEK5sZTjMhzT3XiSEFEWZ5o32kWLJ3YxSQClfVKbsCfDx+GgHyZWXBRo4nzymMoIAUsINw7OviKjUd5ASFyruhynCRxZH1YhjwEor4yN2pUnABUXuDrsKKmho2SfoEwmzocFMiKonO3R4UX5HxyJuOLeBnUcyonwgb78Y/CQxzVcHchpVl103mg4yMcGX5KCf2zh0VSMGxATixE8fRYH/gPdVkenR3m2X0S6kpMxR+jFYXXMa+zFOhdn01XuY+dE9ntX2erysyZjjvDqnCEeR+yzyr+mSYNC2qCdopZtE6zr8GNd997gb6K+e2tfTc/MzHwF/6aWxSeusVMsWxBxP+L9p/wNGC81D8smyF8GbxMbuYInx1k3vwknnE6nIOv15eVlw14ML0lZF0vvnWFXNvoCbFwW82AFsI73FVsGvnvFOXDNGKdi9rEsA20RepGem0RVKvHjksQjTEChhN2oisAou3IuPn6CI1tTC+32o9RZU0V9rFXyXs+mQXGdOB5Vkold09pgucXKIUZeNfIKVh0p3vou4XVRJ7iwsEaS/w0wrYFF8maDVh3YimY/IzhvJRLeJD8p/gBpuSfj37A3DAAAAABJRU5ErkJggg=="
            />
          </div>
        </Link>
        <nav className="font-medium text-[#2F2F2F]">
          <ul className="flex items-center justify-between gap-x-12">
            <Link href="/"><li>Home</li></Link>
            <Link href="/posts"><li>Posts</li></Link>
            {username ? (<li className="flex items-center gap-x-1 text-sm font-bold"><AuthorIcon size="16" color="#242424" /><span>{username}</span></li>) : (<Link href="/auth/signup"><li>Sign up</li></Link>)}
            {username ? (<Link href="/auth/logout"><li>Log out</li></Link>) : (<Link href="/auth/signin"><li>Sign in</li></Link>)}
            <li><DotsIcon /></li>
          </ul>
        </nav>
        <div className="flex items-center w-44 h-8">
            <input className="bg-[#2F323C] w-full h-full py-3 px-4 placeholder:text-[10px] placeholder:text-white text-xs text-white outline-none" type="text" name="search" placeholder="Search..." />
            <button className="bg-[#4F95FF] w-full h-full flex-1 p-2">
              <SearchIcon size="16" color="white" />
            </button>
        </div>
      </div>
    </div>
  );
}
