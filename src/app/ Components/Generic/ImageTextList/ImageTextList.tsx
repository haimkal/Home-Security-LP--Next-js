import "./ImageTextList.css";
import ImageTextItem from "./ImageTextItem/ImageTextItem";

type ImageTextListProps = {
  items: { img: { src: string; alt: string }; text: string }[]; // Define array of objects
};

export default function ImageTextList({ items }: ImageTextListProps) {
  return (
    <div className="image-text-list">
      {items.map((item, index) => (
        <ImageTextItem key={index} img={item.img} text={item.text} />
      ))}
    </div>
  );
}
