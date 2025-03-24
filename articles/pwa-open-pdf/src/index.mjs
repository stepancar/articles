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

const customLinkButtonBase64 = document.getElementById("open-pdf-window-open-button-base64");
customLinkButtonBase64.addEventListener("click", async (e) => {
    const response = await fetch(windowOpenLink.href);
    const blob = await response.blob();

    // Convert blob to base64
    const base64 = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
    const url = base64;

    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    document.body.appendChild(a);
    setTimeout(() => {
        a.click();
        document.body.removeChild(a);
    }, 100);
});


const customLinkButtonWithDownload = document.getElementById("open-pdf-window-open-button-with-download");
customLinkButtonWithDownload.addEventListener("click", async (e) => {
    const response = await fetch(windowOpenLink.href);
    const blob = await response.blob();
    const blob2 = new Blob([blob], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob2);
    const a = document.createElement("a");
    a.href = url;
    a.download = 'file.pdf';
    document.body.appendChild(a);
    setTimeout(() => {
        a.click();
        document.body.removeChild(a);
    }, 100);
});


const customLinkButtonWithFileUrl = document.getElementById("open-pdf-window-open-button-with-file-url");
customLinkButtonWithFileUrl.addEventListener("click", async (e) => {
    const response = await fetch(windowOpenLink.href);
    const blob = await response.blob();

    const file = new File([blob], 'file.pdf', { type: 'application/pdf' });
    const url = URL.createObjectURL(file);
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.download = 'file.pdf';
    document.body.appendChild(a);
    setTimeout(() => {
        a.click();
        document.body.removeChild(a);
    }, 100);
});


const customLinkButtonWithLocationAssign = document.getElementById("open-pdf-window-open-button-with-location-assign");
customLinkButtonWithLocationAssign.addEventListener("click", async (e) => {
    e.preventDefault();
    window.location.assign(windowOpenLink.href);
});

const customLinkButtonWithLocationAssignBlob = document.getElementById("open-pdf-window-open-button-with-location-assign-blob");
customLinkButtonWithLocationAssignBlob.addEventListener("click", async (e) => {
    e.preventDefault();

    const response = await fetch(windowOpenLink.href);
    const blob = await response.blob();

    const file = new File([blob], 'file.pdf', { type: 'application/pdf' });
    const url = URL.createObjectURL(file);
    window.location.assign(url);
});


const customLinkButtonWithLocationAssignBlobOctet = document.getElementById("open-pdf-window-open-button-with-location-assign-blob-octet");
customLinkButtonWithLocationAssignBlobOctet.addEventListener("click", async (e) => {
    e.preventDefault();

    const response = await fetch(windowOpenLink.href);
    const blob = await response.blob();

    const file = new File([blob], 'file.pdf', { type: 'octet/stream' });
    const url = URL.createObjectURL(file);
    window.location.assign(url);
});


const customLinkButtonWithLocationAssignBlobOctet2 = document.getElementById("open-pdf-window-open-button-with-location-assign-blob-octet-2");
customLinkButtonWithLocationAssignBlobOctet2.addEventListener("click", async (e) => {
    e.preventDefault();

    const response = await fetch(windowOpenLink.href);
    const blob = await response.blob();

    const file = new File([blob], 'file.pdf', { type: 'octet/stream' });
    const url = URL.createObjectURL(file);
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.download = 'file.pdf';
    document.body.appendChild(a);
    setTimeout(() => {
        a.click();
        document.body.removeChild(a);
    }, 100);
});

const customLinkButtonWithLocationAssignBlobShare = document.getElementById("open-pdf-window-open-button-with-location-assign-blob-share");
customLinkButtonWithLocationAssignBlobShare.addEventListener("click", async (e) => {
    e.preventDefault();

    const response = await fetch(windowOpenLink.href);
    const blob = await response.blob();

    const file = new File([blob], 'file.pdf', { type: 'application/pdf' });
    await navigator.share({
        files: [file]
    });
});


const customLinkButtonOpenSafari = document.getElementById("open-pdf-window-open-safari");
customLinkButtonOpenSafari.addEventListener("click", async (e) => {
    e.preventDefault();

    const response = await fetch(windowOpenLink.href);
    const blob = await response.blob();

    const url = URL.createObjectURL(blob);

    window.location = `x-safari-${url}`
});


const customLinkButtonOpenSafari2 = document.getElementById("open-pdf-window-open-safari-2");
customLinkButtonOpenSafari2.addEventListener("click", async (e) => {
    e.preventDefault();

    const response = await fetch(windowOpenLink.href);
    const blob = await response.blob();

    const base64 = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
    const url = base64;

    window.location = `x-safari-${url}`
});