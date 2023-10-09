import "./App.css";
import Body from "./components/Body";

function App() {
  const API_Key = import.meta.env.VITE_APIKEY;
  console.log(API_Key);
  return (
    <>
      <h1>Papasito Website</h1>
      <Body />
    </>
  );
}

export default App;
