import "./Header.css";
export default function Header() {
  return (
    <div className="header">
      <div className="logo_section _cont">
        <a href="https://top10us.com">
          <img fetchPriority="high" decoding="async" src="top10us.svg" alt="logo" />
        </a>
      </div>
    </div>
  );
}
