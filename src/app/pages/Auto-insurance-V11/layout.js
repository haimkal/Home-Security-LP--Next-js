import Footer from "../../ Components/Generic/Footer/Footer";
import Header from "../../ Components/Generic/Header/Header";

// app/auto-insurance-v11/layout.js
export default function AutoInsuranceLayout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main> {/* This renders the content of the page */}
      <Footer />
    </div>
  );
}
