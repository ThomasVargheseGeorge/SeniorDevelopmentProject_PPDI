import { useState } from "react";
import Wallet from "./Wallet";
import Issuer from "./Issuer";
import Verifier from "./Verifier";

function App() {

    const [did, setDid] = useState("");
    const [credential, setCredential] = useState(null);

    return (
        <div>

            <h1>Privacy-Preserving Decentralized Identity</h1>

            <Wallet setDid={setDid} />

            <p>DID: {did}</p>

            <Issuer did={did} setCredential={setCredential} />

            <Verifier credential={credential} />

        </div>
    );
}

export default App;