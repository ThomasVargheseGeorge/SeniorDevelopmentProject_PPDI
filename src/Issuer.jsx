import { useState } from "react";

function Issuer({ did }) {

    const [credential, setCredential] = useState("");

    function issueCredential() {
        if (!did) {
            alert("No DID found");
            return;
        }

        const newCredential = {
            type: "StudentCredential",
            issuer: "University",
            holder: did,
            status: "Valid"
        };

        setCredential(JSON.stringify(newCredential, null, 2));
    }

    return (
        <div>
            <h2>Credential Issuer</h2>

            <button onClick={issueCredential}>
                Issue Student Credential
            </button>

            <pre>{credential}</pre>
        </div>
    );
}

export default Issuer;