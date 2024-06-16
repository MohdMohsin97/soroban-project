import { createContext, useState } from "react";

import Header from "./components/Header";
import Trades from "./components/Trades";

const pubKeyData = createContext();
const passIdContext = createContext();

function App() {
  const [pubkey, _setPubKey] = useState("");
  return (
    <>
      <Header setPubKey={_setPubKey} />
      <Trades />
    </>
  );
}

export default App;
export { pubKeyData, passIdContext };