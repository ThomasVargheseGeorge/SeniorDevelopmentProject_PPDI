import Wallet from "./Wallet";
import Issuer from "./Issuer";
import { useState } from "react";

function App() {

    const [did, setDid] = useState("");

    return (
        <div>
            <h1>Privacy-Preserving Decentralized Identity</h1>

            <Wallet setDid={setDid} />

            <Issuer did={did} />
        </div>
    );
}

export default App;