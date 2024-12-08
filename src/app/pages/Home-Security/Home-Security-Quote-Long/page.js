

import styles from "./page.module.css";
import "../../../styles.css";
import Header from "../../../Components/Generic/Header/Header";
import FormSection from "../../../Components/Generic/FormSection/FormSection";
import TopSection from "../../../Components/Generic/TopSection/TopSection";
import ThirdSection from "../../../Components/Home Security/Home-Security-Quote-Long/ThirdSection/ThirdSection";
import FourthSection from "../../../Components/Home Security/Home-Security-Quote-Long/FourthSection/FourthSection";
import FifthSection from "../../../Components/Home Security/Home-Security-Quote-Long/FifthSection/FifthSection";
import Footer from "../../../Components/Generic/Footer/Footer";
import { FormSteps } from "../../../Components/Home Security/Home-Security-Quote-Long/FormSteps/FormSteps"; // Import the formSteps
// import dynamic from "next/dynamic";
// const FormSteps = dynamic(() => import("../../../Components/Home Security/Home-Security-Quote-Long/FormSteps/FormSteps"), {
//   ssr: false, // Disable server-side rendering
// });

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
        {/* <FormSection /> */}
        {/* <FormSection formStepsRoute={'../../Home Security/Home-Security-Quote-Long/FormSteps/FormSteps'} /> */}
        <FormSection FormSteps={FormSteps}/>
        <FourthSection />
        <FifthSection />
        <Footer />
      </main>
    </>
  );
}
