// import Head from "next/head";
export default function Header() {
  return (
    <div className="header">
      <div className="logo_section _cont">
        <a href="https://top10us.com">
          <img
            fetchPriority="high"
            decoding="async"
            width="170"
            height="50"
            src="https://top10us.com/static/home-security-quote-long/assets/images/top10us.svg"
            alt="logo"
          />
        </a>
      </div>
    </div>
  );
}
