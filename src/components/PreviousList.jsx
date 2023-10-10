/* eslint-disable react/prop-types */
import "../App.css";

export default function PreviousList({ previousDogsList }) {
  return (
    <>
      <div className="previous-wrapper">
        <h2 className="white-ubuntu-txt">Dogs we've seen so far</h2>
        {previousDogsList.length >= 2 &&
          previousDogsList.map((dog) => (
            <>
              <p className="white-ubuntu-txt">{dog.breed}</p>
              <img src={dog.imageURL} className="prev-img" />
            </>
          ))}
      </div>
    </>
  );
}
