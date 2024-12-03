import "./ButtonToForm.css";
type ButtonProps = {
  backgroundColor?: string;
  color?: string;
  text: string;
};

export default function Button({
  backgroundColor = "#517d7b",
  color = "#ffffff",
  text,
}: ButtonProps) {
  return (
    <a
      href="#form"
      className="_btn"
      style={{
        backgroundColor: backgroundColor,
        color: color,
      }}
    >
      {text}
    </a>
  );
}
