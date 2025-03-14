if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("service-worker.mjs")
        .then(() => console.log("Service Worker Registered"))
        .catch((err) =>
            console.error("Service Worker Registration Failed:", err)
        );
}

const windowOpenLink = document.getElementById("open-pdf-window-open");
windowOpenLink.addEventListener("click", async (e) => {
    e.preventDefault();
    const response = await fetch(windowOpenLink.href);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank");
});

const blobUriLink = document.getElementById("open-pdf-blob-uri-link");
(async () => {
    const response = await fetch(blobUriLink.href);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    blobUriLink.href = url;
})();

const customLinkButton = document.getElementById("open-pdf-window-open-button");
customLinkButton.addEventListener("click", async (e) => {
    const response = await fetch(windowOpenLink.href);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    document.body.appendChild(a);
    setTimeout(() => {
        a.click();
        document.body.removeChild(a);
    }, 100);
});

