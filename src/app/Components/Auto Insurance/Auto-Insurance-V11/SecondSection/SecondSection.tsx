import "./SecondSection.css";
import ImageTextList from "../../../Generic/ImageTextList/ImageTextList";

export default function SecondSection() {
  return (
    <div className="second-section">
      <ImageTextList
        items={[
          {
            img: {
              src: "/Auto Insurance/Auto-Insurance-V11/images/lightbulb.svg",
              alt: "lightbulb",
            },
            text: "Checking insurance rates won't impact your credit score",
          }
        ]}
      />
    </div>
  );
}
