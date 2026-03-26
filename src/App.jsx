import { useState } from "react";
import Wallet from "./Wallet";
import Issuer from "./Issuer";
import Verifier from "./Verifier";

function App() {

    const [did, setDid] = useState("");
    const [credential, setCredential] = useState(null);

    return (
        <div>

            <h1>Decentralized Identity System</h1>

            <Wallet 
                setDid={setDid} 
                credential={credential} 
            />

            <p>DID: {did}</p>

            <Issuer 
                did={did} 
                setCredential={setCredential} 
            />

            <Verifier credential={credential} />

        </div>
    );
}

export default App;