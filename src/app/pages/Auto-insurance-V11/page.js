import FifthSection from "../../ Components/Home Security/FifthSection/FifthSection";
import FormSection from "../../ Components/Generic/FormSection/FormSection";
import FourthSection from "../../ Components/Home Security/FourthSection/FourthSection";
import ThirdSection from "../../ Components/Home Security/ThirdSection/ThirdSection";
import TopSection from "../../ Components/Generic/TopSection/TopSection";

export default function AutoInsurancePage() {
  return (
    <div>
      <TopSection
        isBgTransparent={true}
        title={"Compare Car Insurance Rates and Start Saving Today"}
        subTitle={"Answer a Few Questions and Get Quotes From Top Providers"}
      />
      <FormSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
    </div>
  );
}
