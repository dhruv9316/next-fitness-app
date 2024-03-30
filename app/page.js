import HeroSection from "@/components/home/HeroSection";
import styles from './home.module.css'
import MiddleSection from "@/components/home/middleSection";
import MobileAppSection from "@/components/home/mobileSection.js";
import LastSection from "@/components/home/lastSection";
import Footer from "@/components/footer/footer";
import Reviews from "@/components/review/reviews";

export default async function Home() {

  return (
    <div className={styles.wrapper}>
      <HeroSection />
      <MiddleSection />
      <MobileAppSection />
      <Reviews />
      <LastSection />
      <Footer />
    </div>
  );
}
