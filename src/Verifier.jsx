import { useState } from "react";

function Verifier({ credential }) {

    const [result, setResult] = useState("");

    function verifyCredential() {

        if (!credential) {
            setResult("No credential provided");
            return;
        }

        if (credential.status === "Valid") {
            setResult("Credential Verified ✅");
        } else {
            setResult("Credential Invalid ❌");
        }
    }

    return (
        <div>
            <h2>Credential Verifier</h2>

            <button onClick={verifyCredential}>
                Verify Credential
            </button>

            <p>{result}</p>
        </div>
    );
}

export default Verifier;