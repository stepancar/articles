if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("service-worker.mjs")
        .then(() => console.log("Service Worker Registered"))
        .catch((err) =>
            console.error("Service Worker Registration Failed:", err)
        );
}

const loginButton = document.getElementById("loginButton");
const registerButton = document.getElementById("registerButton");

registerButton.addEventListener("click", async () => {
    try {
        const credential = await navigator.credentials.create({
            publicKey: {
                rp: { name: "Example Inc." },
                user: {
                    id: new Uint8Array(16), // Generate a unique user ID
                    name: "spider-man@example.com",
                    displayName: "Spider Man"
                },
                challenge: crypto.getRandomValues(new Uint8Array(32)), // Secure challenge
                pubKeyCredParams: [{ type: "public-key", alg: -7 }],
            },
        });

        if (credential) {
            const credentialId = new Uint8Array(credential.rawId);
            localStorage.setItem("credentialId", JSON.stringify(Array.from(credentialId)));

            alert("Credential created successfully!");
        }
    } catch (error) {
        console.error("Error during registration:", error);
        alert("Registration failed.");
    }
});

loginButton.addEventListener("click", async () => {
    login();
});

async function login() {
    try {
        const storedCredentialId = localStorage.getItem("credentialId");

        if (!storedCredentialId) {
            alert("No stored credential found.");
            return;
        }

        const credentialId = new Uint8Array(JSON.parse(storedCredentialId));

        const assertion = await navigator.credentials.get({
            publicKey: {
                challenge: crypto.getRandomValues(new Uint8Array(32)), // Secure challenge
                allowCredentials: [{ id: credentialId, type: "public-key" }]
            },
            mediation: 'silent'
        });

        alert("Login successful: " + JSON.stringify(assertion));
    } catch (error) {
        console.error("Error during login:", error);
        alert("Login failed.");
    }
}

if (localStorage.getItem("credentialId")) {
    login();
}
