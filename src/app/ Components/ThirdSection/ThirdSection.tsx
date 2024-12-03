import "./ThirdSection.css";
import ImageTextList from "../ImageTextList/ImageTextList";

export default function ThirdSection() {
  return (
    <div className="third-section">
      <h2>How It works</h2>
      <p>
        Top10US.com service hundreds of brands and provides trusted information for millions of
        individuals across the United States
      </p>
      <ImageTextList
        items={[
          {
            img: {
              src: "home-security/images/pointing_question_mark.webp",
              alt: "Hands pointing to letters",
            },
            text: "Easily compare competitors",
          },
          {
            img: {
              src: "home-security/images/hands_book.webp",
              alt: "Hands pointing to letters",
            },
            text: "Easily compare competitors",
          },
          {
            img: {
              src: "home-security/images/hands_phone.webp",
              alt: "Hands pointing to letters",
            },
            text: "Easily compare competitors",
          },
        ]}
      />
    </div>
  );
}
