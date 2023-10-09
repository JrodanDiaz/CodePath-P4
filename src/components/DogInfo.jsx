/* eslint-disable react/prop-types */
import "../App.css";

export default function DogInfo({ breed, attributes, image }) {
  return (
    <>
      <div className="attributes-container">
        <p>{breed}</p>
        {attributes.map((attribute) => (
          <p key={attribute}>{attribute}</p>
        ))}
      </div>
      <img src={image} className="dog-img" />
    </>
  );
}
