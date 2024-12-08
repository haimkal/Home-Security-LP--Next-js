import "./ImageTextItem.css";
type ImageTextItemProps = {
  img: { src: string; alt: string };
  text: string;
};

export default function ImageTextItem({ img, text }: ImageTextItemProps) {
  return (
    <div className="image-text-item">
      <div className="image-container">
        <img width="280" height="165" src={img.src} alt={img.alt} />
      </div>
      <p>{text}</p>
    </div>
  );
}
