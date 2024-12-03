import Title from "../Title/Title";
import "./TopSection.css";

type TopSectionProps = {
  bgImgName: string,
  isBgTransparent?: boolean,
  title: string,
  subTitle: string,
  titlesLayoutWidth?: string,
};

export default function TopSection({
  bgImgName,
  isBgTransparent = false,
  title,
  subTitle,
  titlesLayoutWidth = "55%",
}: TopSectionProps) {
  return (
    <div
      className="top_section"
      style={{ backgroundImage: `url("/home-security/images/${bgImgName}")` }}
    >
      {isBgTransparent && <div className="overlay"></div>}
      <div className="_cont">
        <div className="text_div" style={{ width: titlesLayoutWidth }}>
          <Title text={title} color="#517d7b" size="large" isAligned={false} />
          <Title text={subTitle} size="medium" isAligned={false} />
        </div>
      </div>
    </div>
  );
}
