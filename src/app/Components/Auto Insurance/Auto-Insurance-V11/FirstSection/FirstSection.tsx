import "./FirstSection.css";
import ImageTextList from "../../../Generic/ImageTextList/ImageTextList";
import Phone from "../../../Generic/Phone/Phone";

export default function FirstSection() {
  return (
    <div className="first-section">
      <div className="secured">
        <span className="flex">
          <img src="/Auto Insurance/Auto-Insurance-V11/images/lock.svg" />
          <a>Secured</a>
        </span>
        <span className="flex">
          <img src="/Auto Insurance/Auto-Insurance-V11/images/man.svg" />
          <p>Trusted Partners</p>
        </span>
      </div>
      <Phone phoneNum={"+17252249659"} title={'Want To Speak Live?'}/>
      <div className="available">
        <span className="online"></span>
        <p>Agents Available Now</p>
      </div>
      <h1>Among our Insurance Carriers:</h1>
      <ImageTextList
        items={[
          {
            img: {
              src: "/Auto Insurance/Auto-Insurance-V11/images/progressive.png",
              alt: "Progressive",
            },
            text: "",
          },
          {
            img: {
              src: "/Auto Insurance/Auto-Insurance-V11/images/allstate.png",
              alt: "Allstate",
            },
            text: "",
          },
          {
            img: {
              src: "/Auto Insurance/Auto-Insurance-V11/images/general.png",
              alt: "The General",
            },
            text: "",
          },
          {
            img: {
              src: "/Auto Insurance/Auto-Insurance-V11/images/aaa.png",
              alt: "AAA",
            },
            text: "",
          },
          {
            img: {
              src: "/Auto Insurance/Auto-Insurance-V11/images/experian.png",
              alt: "Experian",
            },
            text: "",
          },
          {
            img: {
              src: "/Auto Insurance/Auto-Insurance-V11/images/direct.png",
              alt: "Direct Auto Insurance",
            },
            text: "",
          },
        ]}
      />
    </div>
  );
}
