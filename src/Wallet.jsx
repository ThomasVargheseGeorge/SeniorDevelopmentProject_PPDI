import { useState } from "react";

function Wallet({ setDid, credentials, setProof }) {

    const [account, setAccount] = useState("");

    async function connectWallet() {
        if (typeof window.ethereum !== "undefined") {
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts"
                });

                setAccount(accounts[0]);

            } catch (error) {
                console.error("Connection error:", error);
            }
        } else {
            alert("MetaMask not detected.");
        }
    }

    function createIdentity() {
        if (account) {
            const newDID = "did:ethr:" + account;
            setDid(newDID);
        } else {
            alert("Connect wallet first");
        }
    }

    // 🔥 REAL ZKP PROOF GENERATION
    async function generateProof() {

        if (!credentials || credentials.length === 0) {
            alert("No credentials available");
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/generate-proof", {
                method: "POST"
            });

            const data = await response.json();

            if (data.success) {
                setProof({ valid: true });
                alert("Real ZKP proof generated ✅");
            } else {
                alert("Proof generation failed ❌");
            }

        } catch (error) {
            console.error(error);
            alert("Backend not reachable ❌");
        }
    }

    return (
        <div>
            <h2>Wallet</h2>

            <button onClick={connectWallet}>
                Connect MetaMask
            </button>

            <p>Wallet Address: {account}</p>

            <button onClick={createIdentity}>
                Create DID
            </button>

            <h3>Your Credentials</h3>

            {(!credentials || credentials.length === 0) ? (
                <p>No credentials yet</p>
            ) : (
                credentials.map((cred, index) => (
                    <pre key={index}>
                        {JSON.stringify(cred, null, 2)}
                    </pre>
                ))
            )}

            <button onClick={generateProof}>
                Generate Proof
            </button>
        </div>
    );
}

export default Wallet;