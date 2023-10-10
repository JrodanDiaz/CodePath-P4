import "./App.css";
import DiscoverPanel from "./components/DiscoverPanel";
import BanList from "./components/BanList";
import PreviousList from "./components/PreviousList";
import { useState } from "react";

function App() {
  const [prevDogsList, setPrevDogsList] = useState([{}]);
  const [bannedAttributes, setBannedAttributes] = useState([]);

  const updatePreviousList = (newDog) => {
    setPrevDogsList((prevList) => [...prevList, newDog]);
  };

  return (
    <>
      <div className="main-wrapper">
        <PreviousList previousDogsList={prevDogsList} />
        <DiscoverPanel
          updatePreviousList={updatePreviousList}
          bannedAttributes={bannedAttributes}
          setBannedAttributes={setBannedAttributes}
        />
        <BanList bannedAttributes={bannedAttributes} />
      </div>
    </>
  );
}

export default App;
