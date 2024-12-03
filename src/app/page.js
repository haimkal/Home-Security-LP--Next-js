import Image from "next/image";
import styles from "./page.module.css";
import "./styles.css";
import Header from "./ Components/Header/Header";
import TopSection from "./ Components/TopSection/TopSection";
import FormSection from "./ Components/FormSection/FormSection";
import ThirdSection from "./ Components/ThirdSection/ThirdSection";
import FourthSection from "./ Components/FourthSection/FourthSection";
import FifthSection from "./ Components/FifthSection/FifthSection";
import Footer from "./ Components/Footer/Footer";

export default function Home() {
  console.log("render page1");
  return (
    <>
      <Header />
      <main className={styles.main}>
        <TopSection
          bgImgName="home-security-bg.webp"
          isBgTransparent={true}
          title={"Top Home Security Contractors - 2024"}
          subTitle={"Help Protect Your Home with a New Security System"}
        />
        <FormSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <Footer />
      </main>
    </>
  );
}
