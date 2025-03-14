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
        const userId = crypto.getRandomValues(new Uint8Array(16)); // Генерация уникального user ID
        const challenge = crypto.getRandomValues(new Uint8Array(32)); // Секретный вызов

        const credential = await navigator.credentials.create({
            publicKey: {
                rp: { name: "Example Inc." },
                user: {
                    id: userId,
                    name: "spider-man@example.com",
                    displayName: "Spider Man"
                },
                challenge,
                pubKeyCredParams: [
                    { type: "public-key", alg: -7 },    // ES256 (ECDSA)
                    { type: "public-key", alg: -257 }   // RS256 (RSA)
                ],
            },
        });

        if (credential) {
            localStorage.setItem("credentialId", JSON.stringify(Array.from(new Uint8Array(credential.rawId))));
            alert("Ключ успешно сохранен!");
        }
    } catch (error) {
        console.error("Ошибка регистрации:", error);
        alert("Регистрация не удалась.");
    }
});

loginButton.addEventListener("click", async () => {
    login();
});

async function login() {
    try {
        const storedCredentialId = localStorage.getItem("credentialId");
        if (!storedCredentialId) {
            alert("Нет сохраненного ключа.");
            return;
        }

        const credentialId = new Uint8Array(JSON.parse(storedCredentialId));
        const challenge = crypto.getRandomValues(new Uint8Array(32));

        const assertion = await navigator.credentials.get({
            publicKey: {
                challenge,
                // allowCredentials: [{ id: credentialId, type: "public-key" }],
                timeout: 10000,
            },
            mediation: "conditional" // Запускает биометрию автоматически
        });

        alert("Вход выполнен: " + JSON.stringify(assertion));
    } catch (error) {
        console.error("Ошибка входа:", error);
        alert("Вход не удался.");
    }
}

if (localStorage.getItem("credentialId")) {
    login();
}
