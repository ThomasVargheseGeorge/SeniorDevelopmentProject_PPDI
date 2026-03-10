
function Issuer({ did, setCredential }) {

    function issueCredential() {

        if (!did) {
            alert("Create DID first");
            return;
        }

        const newCredential = {
            type: "StudentCredential",
            issuer: "University",
            holder: did,
            status: "Valid"
        };

        setCredential(newCredential);
    }

    return (
        <div>
            <h2>Credential Issuer</h2>

            <button onClick={issueCredential}>
                Issue Student Credential
            </button>
        </div>
    );
}

export default Issuer;