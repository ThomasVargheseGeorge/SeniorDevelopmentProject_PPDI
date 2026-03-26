import { useState } from "react";

function Wallet({ setDid, credential }) {

    const [account, setAccount] = useState("");
    const [credentials, setCredentials] = useState([]);

    async function connectWallet() {
        if (typeof window.ethereum !== "undefined") {
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts"
                });

                setAccount(accounts[0]);
            } catch (error) {
                console.error(error);
            }
        } else {
            alert("MetaMask not installed");
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

    // When new credential comes from App, store it
    if (credential && credentials.length === 0) {
        setCredentials([credential]);
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

            {credentials.length === 0 ? (
                <p>No credentials yet</p>
            ) : (
                credentials.map((cred, index) => (
                    <pre key={index}>
                        {JSON.stringify(cred, null, 2)}
                    </pre>
                ))
            )}
        </div>
    );
}
export default Wallet;