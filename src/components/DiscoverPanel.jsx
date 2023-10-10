/* eslint-disable react/prop-types */
import { useState } from "react";
import "../App.css";
import DogInfo from "./DogInfo";

export default function DiscoverPanel({
  updatePreviousList,
  bannedAttributes,
  setBannedAttributes,
}) {
  const [attributes, setAttributes] = useState([]);
  const [image, setImage] = useState("");

  const API_Key = import.meta.env.VITE_APIKEY;
  const url = `https://api.thedogapi.com/v1/images/search?limit=1`;

  const handleDiscover = async () => {
    const response = await fetch(url, {
      headers: {
        "x-api-key": `${API_Key}`,
      },
    });
    const dogData = await response.json();
    //If the response doesn't have data about the dog breed, submit more GET requests until it does
    if (dogData[0].breeds.length === 0) {
      handleDiscover();
      return;
    }
    const breed = dogData[0].breeds[0].name;
    const lifeSpan = dogData[0].breeds[0].life_span;
    const weight = dogData[0].breeds[0].weight.imperial + " lbs";
    const imageURL = dogData[0].url;

    //if the new request contains a banned attribute, request a new dog
    const containsBannedAttribute = [breed, lifeSpan, weight].some(
      (attribute) => bannedAttributes.includes(attribute)
    );
    if (containsBannedAttribute) {
      console.log(`Banned Attributes: ${bannedAttributes}`);
      console.log(`Current Attributes: ${breed} ${lifeSpan} ${weight}`);
      handleDiscover();
      return;
    }

    //set attribute state variables, and update the previous dog list
    setAttributes([breed, lifeSpan, weight]);
    setImage(imageURL);
    updatePreviousList({ breed: breed, imageURL: imageURL });
  };

  return (
    <>
      <div className="body-container">
        <h1 className="white-ubuntu-txt">Dog Discovery Device</h1>
        <h2 className="white-ubuntu-txt">
          Discover dog breeds you've never seen
        </h2>
        {image && (
          <DogInfo
            image={image}
            setBannedAttributes={setBannedAttributes}
            attributes={attributes}
          />
        )}
        <button onClick={handleDiscover} className="attribute">
          Discover Papasito
        </button>
      </div>
    </>
  );
}
