import { useEffect } from "react";
import "./PropertyTypeForm.css";

type PropertyTypeData = {
  propertyType: string;
};

type PropertyTypeProps = PropertyTypeData & {
  updateFields: (fields: Partial<PropertyTypeData>) => void;
  btnsDisplay: (show: boolean) => void;
};

export function PropertyTypeForm({ propertyType, updateFields, btnsDisplay }: PropertyTypeProps) {
  useEffect(() => {
    btnsDisplay(false);
  }, [btnsDisplay]);

  return (
    <div className="form-section step1">
      <h5>Quick and easy. Get matched with the best Home Security company in your area</h5>
      <h4 className="form-title">What type of property is this system for?</h4>
      <div className="options-div">
        {/* Owned Option */}
        <label className="property1">
          <input
            type="radio"
            name="propertyType"
            value="Owned"
            checked={propertyType === "Owned"}
            onChange={(e) => updateFields({ propertyType: e.target.value })}
            className="hidden-radio"
          />
          
          <div className="img_box">
            <img
              src="https://top10us.com/static/home-security-quote-long/assets/images/house.webp"
              height="35"
              width="35"
              alt="house"
            />
            <p>Owned</p>
          </div>
        </label>

        {/* Rented Option */}
        <label className="property2">
          <input
            type="radio"
            name="propertyType"
            value="Rented"
            checked={propertyType === "Rented"}
            onChange={(e) => updateFields({ propertyType: e.target.value })}
            className="hidden-radio"
          />
          <div className="img_box">
            <img
              src="https://top10us.com/static/home-security-quote-long/assets/images/key.webp"
              height="35"
              width="35"
              alt="keys"
            />
            <p>Rented</p>
          </div>
        </label>
      </div>
    </div>
  );
}
