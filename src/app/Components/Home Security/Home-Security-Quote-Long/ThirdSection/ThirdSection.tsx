import "./ThirdSection.css";
import ImageTextList from "../../../Generic/ImageTextList/ImageTextList";

export default function ThirdSection() {
  return (
    <div className="third-section">
      <h2>How It works</h2>
      <p>
        Top10US.com service hundreds of brands and provides trusted information
        for millions of individuals across the United States
      </p>
      <ImageTextList
        items={[
          {
            img: {
              src: "/Home Security/Home-Security-Quote-Long/images/pointing_question_mark.webp",
              alt: "Hands pointing to letters",
            },
            text: "Easily compare competitors",
          },
          {
            img: {
              src: "/Home Security/Home-Security-Quote-Long/images/hands_book.webp",
              alt: "Hands pointing to letters",
            },
            text: "Easily compare competitors",
          },
          {
            img: {
              src: "/Home Security/Home-Security-Quote-Long/images/hands_phone.webp",
              alt: "Hands pointing to letters",
            },
            text: "Easily compare competitors",
          },
        ]}
      />
    </div>
  );
}
