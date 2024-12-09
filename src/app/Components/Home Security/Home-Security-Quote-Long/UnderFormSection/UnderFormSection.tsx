import CheckedItemsList from "../../../Generic/CheckedItemsList/CheckedItemsList";
import "./UnderFormSection.css";

export default function UnderFormSection() {
  return (
    <div className="section_under_form">
      <CheckedItemsList
        items={["Fire Protection", "Video Surveillance", "Smart Alarm Systems", "24/7 Monitoring"]}
        isAligned={true}
      />
      <p className="green_text">
        The opinions and the prices we represent on our site(s) are subject to change without
        notice. We are an independent, advertising-supported comparison service. The offers that
        appear on this site are from companies that compensate us. This compensation may impact how
        and where products appear on this site, including, for example, the order in which they may
        appear within the listing categories.
      </p>
    </div>
  );
}
