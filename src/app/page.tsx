import RecentPostSection from "@/components/home/RecentPostSection";
import SliderSection from "@/components/home/SliderSection";
import ViewAllSection from "@/components/home/ViewAllSection";

export default async function HomePage() {
  return (
    <>
      <SliderSection />
      <RecentPostSection />
      <ViewAllSection />
    </>
  )
}