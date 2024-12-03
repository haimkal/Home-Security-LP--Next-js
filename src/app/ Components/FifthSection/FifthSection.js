import "./FifthSection.css";
import CheckedItemsList from "../CheckedItemsList/CheckedItemsList";
import ButtonToForm from "../ButtonToForm/ButtonToForm";

export default function FifthSection() {
  return (
    <div className="fifth-section">
      <div className="fifth-section-container">
        <h2>How to spot a good contractor?</h2>
        <CheckedItemsList
          items={[
            `License is "clean" and has no legal actions against it.`,
            `License is "clean" and has no legal actions against it.`,
            ` Contractor will do his best to implement your design ideas into the actual construction.`,
            `Everything offered is well-documented and contract covers every basis.`,
            `Provides official, written estimates.`,
          ]}
          isAligned={false}
        />
        <ButtonToForm
          backgroundColor={"#517d7b"}
          color={"#ffffff"}
          text={"Schedule a free consultation today"}
        />
      </div>
    </div>
  );
}
