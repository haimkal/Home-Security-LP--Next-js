import { ReactNode } from "react";
import "./TitleAndText.css";

type TitleAndTextProps = {
  title: string;
  subTitle?: string;
  text: string;
  optionalComponent?: ReactNode;
};

export default function TitleAndTextProps({
  title,
  subTitle = "",
  text,
  optionalComponent = null,
}: TitleAndTextProps) {
  return (
    <div className="title-and-text-container">
      <h2>{title}</h2>
      {subTitle && <h3>{subTitle}</h3>}
      {optionalComponent && <div>{optionalComponent}</div>}
      <p>{text}</p>
    </div>
  );
}
