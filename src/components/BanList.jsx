/* eslint-disable react/prop-types */
import "../App.css";

export default function BanList({ bannedAttributes }) {
  //convert bannedAttributes to a set to remove duplicates, then back into an array to use the .map() method later
  const bannedList = [...new Set(bannedAttributes)];

  return (
    <>
      <div className="ban-wrapper">
        <h1 className="white-ubuntu-txt">Ban List</h1>
        {bannedList.length > 0 &&
          bannedList.map((attribute) => (
            <p className="banned-attribute" key={attribute}>
              {attribute}
            </p>
          ))}
      </div>
    </>
  );
}
