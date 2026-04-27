import { useState } from "react";
import Wallet from "./Wallet";
import Issuer from "./Issuer";
import Verifier from "./Verifier";

function App() {

    const [did, setDid] = useState("");
    const [credentials, setCredentials] = useState([]);
    const [proof, setProof] = useState(null);

    function addCredential(cred) {
        setCredentials(prev => [...prev, cred]);
    }

    return (
        <div>
            <h1>Decentralized Identity System</h1>

            <Wallet
                setDid={setDid}
                credentials={credentials}
                setProof={setProof}
            />

            <p>DID: {did}</p>

            <Issuer
                did={did}
                addCredential={addCredential}
            />

            <Verifier
                proof={proof}
            />
        </div>
    );
}

export default App;