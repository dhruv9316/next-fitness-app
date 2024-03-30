import HeroSection from "@/components/home/HeroSection";
import styles from './home.module.css'

export default async function Home() {

  return (
    <div className={styles.wrapper}>
      <HeroSection />
    </div>
  );
}
