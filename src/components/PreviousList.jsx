/* eslint-disable react/prop-types */
import "../App.css";

export default function PreviousList({ previousDogsList }) {
  console.log(`Previous List: ${previousDogsList.map((dog) => dog)}`);
  console.log(previousDogsList.length);
  return (
    <>
      <div className="previous-wrapper">
        {previousDogsList.length >= 2 &&
          previousDogsList.map((dog) => (
            <>
              <p>{dog.breed}</p>
              <img src={dog.imageURL} className="prev-img" />
            </>
          ))}
      </div>
    </>
  );
}
