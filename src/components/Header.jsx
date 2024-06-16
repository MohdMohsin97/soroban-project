
import   { useEffect, useState } from "react";
import { checkConnection, retrievePublicKey } from "./freighter.js";
import { Button } from "@/components/ui/button";
const Header = ({setPubKey}) => {
  const [connect, getConnected] = useState("Connect");
  const [publickey, getPublicKey] = useState("");


  useEffect(() => {
    if (publickey !== "") {
      getConnected("Connected!");
      setPubKey(publickey);
    }
  }, [publickey]);
  
  const connectWallet = async () => {
    if (await checkConnection()) {
      getPublicKey(await retrievePublicKey());
    }
  };

  return (
    <div className="flex justify-between items-center m-4 p-2" >
      <div className="text-3xl font-bold ">
        
        <span className="text">Solar Energy Trade</span>
      </div>

      <div>
      {publickey.length != 0 ? <Button variant="secondary">
                {`${publickey.substring(0, 4)} ${
                  publickey && "..."
                } ${publickey.substring(publickey.length - 4)}`}
              </Button> : <Button
              onClick={connectWallet}
            >
              {connect}
            </Button>}
      </div>
    </div>
  );
};

export default Header;

/* Connect wallet function:

1. To enable connection between the wallet and the web application.
2. To get the public key of the connected wallet.
3. Signing the transaction.
*/
