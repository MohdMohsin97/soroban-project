import { createContext, useState, useEffect } from "react";

import Header from "./components/Header";
import Trades from "./components/Trades";

const pubKeyData = createContext();
const passIdContext = createContext();

function App() {
  const [pubkey, _setPubKey] = useState("");

  useEffect(() => {
    
  
    
  }, [])
  

  return (
    <>
      <Header setPubKey={_setPubKey} />
      <Trades />
    </>
  );
}

export default App;
export { pubKeyData, passIdContext };