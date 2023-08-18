import Header from "@/components/common/Header";
import Navbar from "@/components/common/Navbar";
import RecentPostSection from "@/components/home/RecentPostSection";
import Slider from "@/components/home/Slider";

export default function HomePage() {
  return (
    <>
      <Header />
      <Navbar />
      <Slider />
      <RecentPostSection />
    </>
  )
}