import { useState } from "react";
import "../App.css";
import DogInfo from "./DogInfo";

export default function Body() {
  const [breed, setBreed] = useState("");
  const [attributes, setAttributes] = useState([]);
  const [image, setImage] = useState("");

  const API_Key = import.meta.env.VITE_APIKEY;
  const url = `https://api.thedogapi.com/v1/images/search?limit=1`;
  //https://api.thedogapi.com/v1/images/search?limit=2&api_key=live_INOJ6NM7htAtDCIUvKZ1n8HX5sOcUgamgsNwBUvNThXC3OEmcYQO29vS3g0oUu5k

  const handleDiscover = async () => {
    const response = await fetch(url, {
      headers: {
        "x-api-key": `${API_Key}`,
      },
    });
    const dogData = await response.json();
    if (dogData[0].breeds.length === 0) {
      handleDiscover();
      return;
    }
    const breed = dogData[0].breeds[0].name;
    const lifeSpan = dogData[0].breeds[0].life_span;
    const weight = dogData[0].breeds[0].weight.imperial + " lbs";
    const imageURL = dogData[0].url;

    setBreed(breed);
    setAttributes([lifeSpan, weight]);
    setImage(imageURL);
  };

  return (
    <>
      <div className="body-container">
        <h1>Big bertha</h1>
        <h2>Discover Papasitos</h2>
        {breed && (
          <DogInfo breed={breed} attributes={attributes} image={image} />
        )}
        <button onClick={handleDiscover} className="discover-btn">
          Discover Papasito
        </button>
      </div>
    </>
  );
}
