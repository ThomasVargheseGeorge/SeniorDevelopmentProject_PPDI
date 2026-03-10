import { useState } from "react";

function Wallet({ setDid }) {

    const [account, setAccount] = useState("");

    async function connectWallet() {
        if (typeof window.ethereum !== "undefined") {
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts"
                });

                console.log("Connected account:", accounts[0]);
                setAccount(accounts[0]);

            } catch (error) {
                console.error("Connection error:", error);
            }
        } else {
            alert("MetaMask not detected. Please install MetaMask.");
        }
    }

    function createIdentity() {
        if(account){
            const newDID = "did:ethr:" + account;
            setDid(newDID);
        } else {
            alert("Connect wallet first");
        }
    }

    return (
        <div>
            <h2>Decentralized Identity Wallet</h2>

            <button onClick={connectWallet}>
                Connect MetaMask
            </button>

            <p>Wallet Address: {account}</p>

            <button onClick={createIdentity}>
                Create Decentralized Identity
            </button>
        </div>
    );
}

export default Wallet;