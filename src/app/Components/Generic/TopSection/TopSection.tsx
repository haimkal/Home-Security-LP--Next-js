import Title from "../../Generic/Title/Title";
import "./TopSection.css";
/**
 * The name of the vertical and page, formatted in "Capital-Dash" style.
 * Example: "Home-Security" and "Home-Security-Quote-Long"
 */

type TopSectionProps = {
  bgImgName?: string;
  verticalName?: string;
  pageName?: string;
  isBgTransparent?: boolean;
  title: string;
  subTitle: string;
  titlesLayoutWidth?: string;
};

export default function TopSection({
  bgImgName = "",
  verticalName = "",
  pageName = "",
  isBgTransparent = false,
  title,
  subTitle,
  titlesLayoutWidth = "55%",
}: TopSectionProps) {
  return (
    <div
      className="top_section"
      style={{
        backgroundImage: `url("/${verticalName}/${pageName}/images/${bgImgName}")`,
      }}
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
