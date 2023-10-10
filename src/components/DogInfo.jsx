/* eslint-disable react/prop-types */
import "../App.css";

export default function DogInfo({ setBannedAttributes, attributes, image }) {
  const addBannedAttribute = (attribute) => {
    setBannedAttributes((currentAttributes) => [
      ...currentAttributes,
      attribute,
    ]);
  };
  return (
    <>
      <div className="attributes-container">
        {attributes.map((attribute) => (
          <p
            onClick={() => addBannedAttribute(attribute)}
            key={attribute}
            className="attribute"
          >
            {attribute}
          </p>
        ))}
      </div>
      <img src={image} className="dog-img" />
    </>
  );
}
