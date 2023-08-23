import Header from "@/components/common/Header";
import Navbar from "@/components/common/Navbar";
import RecentPostSection from "@/components/home/RecentPostSection";
import SliderSection from "@/components/home/SliderSection";
import ViewAllSection from "@/components/home/ViewAllSection";
import Footer from "@/components/common/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <Navbar />
      <SliderSection />
      <RecentPostSection />
      <ViewAllSection />
      <Footer />
    </>
  )
}