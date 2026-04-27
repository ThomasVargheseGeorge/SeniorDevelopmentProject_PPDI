function Issuer({ did, addCredential }) {

    function issueCredential() {

        if (!did) {
            alert("Create DID first");
            return;
        }

        const credential = {
            type: "StudentCredential",
            issuer: "University",
            holder: did,
            status: "Valid"
        };

        addCredential(credential);
        alert("Credential Issued");
    }

    return (
        <div>
            <h2>Issuer</h2>

            <button onClick={issueCredential}>
                Issue Credential
            </button>
        </div>
    );
}

export default Issuer;