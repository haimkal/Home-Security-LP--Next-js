import Image from "next/image";
import styles from "./page.module.css";
import "./styles.css";
import Header from "./ Components/Header/Header";
import TopSection from "./ Components/TopSection/TopSection";
import FormSection from "./ Components/FormSection/FormSection";
export default function Home() {
  console.log("render page1");
  return (
    <>
      <Header />
      <main className={styles.main}>
        <TopSection />
        <FormSection />
        <div className="footer"></div>
      </main>
    </>
  );
}
