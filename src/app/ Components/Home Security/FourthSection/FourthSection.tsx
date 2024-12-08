import TitleAndText from "../../Generic/TitleAndText/TitleAndText";
import "./FourthSection.css";
import CheckedItemsList from "../../Generic/CheckedItemsList/CheckedItemsList";

export default function FourthSection() {
  return (
    <div className="fourth-section">
      <TitleAndText
        title={"Home Security Systems"}
        subTitle={"Major Benefits"}
        text={`As burglary rates are getting high, everybody is concerned about the protection of their
        house, belongings, pets, and family members. One can ignore all other aspects of life,
        protect himself and his belongings from theft and accidents by staying alert every time, but
        this is not a safe and convenient way. There are many smart ways to protect houses and
        belongings without wasting precious time and enjoying every aspect of life. One most
        convenient way is the installation of a home security system which is economical as many
        insurance companies give a discount on home security systems. It brings peace of mind and a
        priceless feeling of protection and convenience in lives. Here is a list of benefits that
        you can avail after the installation of a home security system.`}
        optionalComponent={
          <CheckedItemsList
            items={[
              "Fire Protection",
              "Video Surveillance",
              "Smart Alarm Systems",
              "24/7 Monitoring",
            ]}
            isAligned={true}
          />
        }
      />
    </div>
  );
}
