import { useState } from "react";

function Wallet() {

    const [account, setAccount] = useState("");

    async function connectWallet() {

        if (window.ethereum) {

            try {

                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts"
                });

                setAccount(accounts[0]);

            } catch (error) {

                console.log(error);

            }

        } else {

            alert("MetaMask not installed");

        }

    }

    return (

        <div>

            <h2>Decentralized Identity Wallet</h2>

            <button onClick={connectWallet}>
                Connect MetaMask
            </button>

            <p>Wallet Address: {account}</p>

        </div>

    );

}

export default Wallet;