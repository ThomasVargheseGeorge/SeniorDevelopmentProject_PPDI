import { useState } from "react";

function Verifier({ proof }) {

    const [result, setResult] = useState("");

    function verifyProof() {

        if (!proof) {
            setResult("No proof provided");
            return;
        }

        if (proof.valid) {
            setResult("Proof Verified ✅");
        } else {
            setResult("Invalid Proof ❌");
        }
    }

    return (
        <div>
            <h2>Proof Verifier</h2>

            <button onClick={verifyProof}>
                Verify Proof
            </button>

            <p>{result}</p>
        </div>
    );
}

export default Verifier;