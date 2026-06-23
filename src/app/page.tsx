import BrandLogos from "../components/shared/brand-logos";
import HeroSection from "../components/shared/hero-section";
import NewArrivals from "../components/shared/new-arrivals";
import StyleCategories from "../components/shared/style-categories";
import Testimonials from "../components/shared/testimonials";
import TopSelling from "../components/shared/top-selling";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BrandLogos />
      <NewArrivals />
      <hr className="text-[#0000001A] mx-12 lg:mx-20 mt-30" />
      <TopSelling />
      <StyleCategories />
      <Testimonials />
    </main>
  );
}
