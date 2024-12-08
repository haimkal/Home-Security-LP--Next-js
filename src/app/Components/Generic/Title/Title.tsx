import "./Title.css";

type TitleProps = {
  text: string;
  color?: string;
  size?: string;
  isAligned?: boolean;
};

export default function Title({
  text,
  color = "#517d7b",
  size = "medium",
  isAligned = true,
}: TitleProps) {
  const HeadingTag = size === "large" ? "h1" : size === "medium" ? "h2" : "h3";

  return (
    <div className="title-container">
      <HeadingTag
        className={`title ${size} ${isAligned ? "aligned" : "not-aligned"}`}
        style={{ color }}
      >
        {text}
      </HeadingTag>
    </div>
  );
}
