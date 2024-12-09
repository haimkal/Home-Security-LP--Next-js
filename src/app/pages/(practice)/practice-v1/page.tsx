import styles from "./page.module.css";
import "../../../styles.css";
import Header from "../../../Components/Generic/Header/Header";
import { FormData, INITIAL_DATA } from "../../../../types/Home-Security-Types/quoteLongFormData";
import FormSection from "../../../Components/Generic/FormSection/FormSection";
import TopSection from "../../../Components/Generic/TopSection/TopSection";
import ThirdSection from "../../../Components/Practice/Practice-V1/ThirdSection/ThirdSection";
import FourthSection from "../../../Components/Practice/Practice-V1/FourthSection/FourthSection";
import FifthSection from "../../../Components/Home Security/Home-Security-Quote-Long/FifthSection/FifthSection";
import Footer from "../../../Components/Generic/Footer/Footer";
import { FormSteps } from "../../../Components/Home Security/Home-Security-Quote-Long/FormSteps/FormSteps"; // Import the formSteps
import UnderFormSection from "../../../Components/Home Security/Home-Security-Quote-Long/UnderFormSection/UnderFormSection";

export default function Practice() {
  return (
    <>
      <Header />
      <TopSection
        verticalName="Practice"
        pageName="Practice-V1"
        bgImgName="house-practice.webp"
        title="Practice"
        isBgTransparent={true}
        subTitle="hello"
      />
      <FormSection<FormData> FormSteps={FormSteps} initialData={INITIAL_DATA} isOffsetUp={true} />
      <ThirdSection />
      <FourthSection />
      <Footer />
    </>
  );
}
