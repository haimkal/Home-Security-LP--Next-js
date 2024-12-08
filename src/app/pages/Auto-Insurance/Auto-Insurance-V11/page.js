import { FormSteps } from "../../../Components/Auto Insurance/Auto-Insurance-V11/FormSteps/FormSteps";
import ThirdSection from "../../../Components/Auto Insurance/Auto-Insurance-V11/ThirdSection/ThirdSection";
import SecondSection from "../../../Components/Auto Insurance/Auto-Insurance-V11/SecondSection/SecondSection";
import Header from "../../../Components/Generic/Header/Header";
import Footer from "../../../Components/Generic/Footer/Footer";
import TitleAndTextProps from "../../../Components/Generic/TitleAndText/TitleAndText";
import FormSection from "../../../Components/Generic/FormSection/FormSection";

export default function AutoInsurancePage() {
  return (
    <div className="auto-insurance-v11">
      <Header />
      <TitleAndTextProps
        title={"Compare Car Insurance Rates and Start Saving Today"}
        subTitle={"Answer a Few Questions and Get Quotes From Top Providers"}
      />
      <FormSection FormSteps={FormSteps}/>
      <SecondSection />
      <ThirdSection />
      <Footer />
    </div>
  );
}
