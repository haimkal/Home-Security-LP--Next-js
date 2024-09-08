import Image from "next/image";
import styles from "./page.module.css";
import "./styles.css";
import Header from "./Header/Header";
import TopSection from "./TopSection/TopSection";
import SecondSection from "./SecondSection/SecondSection";
export default function Home() {
  return (
    <>
      {/* <div className="header">
        <container>Was it summer when the river ran dry...</container>
      </div> */}
      <Header />
      <main className={styles.main}>
        {/* <div className="main-area">Or was it just another damn.</div>
         */}
        <TopSection />
        <SecondSection />
        <div className="footer">
          <container>
            <h1 className="title">title</h1>
          </container>
        </div>
      </main>
    </>
  );
}
