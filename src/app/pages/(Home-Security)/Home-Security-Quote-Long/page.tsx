import styles from "./page.module.css";
import "../../../styles.css";
import Header from "../../../Components/Generic/Header/Header";
import { FormData, INITIAL_DATA } from "../../../../types/Home-Security-Types/quoteLongFormData";
import FormSection from "../../../Components/Generic/FormSection/FormSection";
import TopSection from "../../../Components/Generic/TopSection/TopSection";
import ThirdSection from "../../../Components/Home Security/Home-Security-Quote-Long/ThirdSection/ThirdSection";
import FourthSection from "../../../Components/Home Security/Home-Security-Quote-Long/FourthSection/FourthSection";
import FifthSection from "../../../Components/Home Security/Home-Security-Quote-Long/FifthSection/FifthSection";
import Footer from "../../../Components/Generic/Footer/Footer";
import { FormSteps } from "../../../Components/Home Security/Home-Security-Quote-Long/FormSteps/FormSteps"; // Import the formSteps
import UnderFormSection from "../../../Components/Home Security/Home-Security-Quote-Long/UnderFormSection/UnderFormSection";

export default function Home() {
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
        <FormSection<FormData>
          FormSteps={FormSteps}
          initialData={INITIAL_DATA}
          optionalComponent={<UnderFormSection />}
          isOffsetUp={true}
          hasWhiteBackground={true}
        />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <Footer />
      </main>
    </>
  );
}
