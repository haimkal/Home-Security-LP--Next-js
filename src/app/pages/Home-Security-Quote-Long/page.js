import Image from "next/image";
import styles from "./page.module.css";
import "../../styles.css";
import Header from "../../ Components/Generic/Header/Header";
import TopSection from "../../ Components/Generic/TopSection/TopSection";
import FormSection from "../../ Components/Generic/FormSection/FormSection";
import ThirdSection from "../../ Components/Home Security/ThirdSection/ThirdSection";
import FourthSection from "../../ Components/Home Security/FourthSection/FourthSection";
import FifthSection from "../../ Components/Home Security/FifthSection/FifthSection";
import Footer from "../../ Components/Generic/Footer/Footer";

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
