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
    const url = URL.createObjectURL(new Blob([blob], { type: 'application/pdf' }));
    window.open(url, null, 'width=600,height=400');
});

const blobUriLink = document.getElementById("open-pdf-blob-uri-link");
(async () => {
    const response = await fetch(blobUriLink.href);
    const blob = await response.blob();
    const url = URL.createObjectURL(new Blob([blob], { type: 'application/pdf' }));
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

const  customLinkButtonCustomPreview = document.getElementById("open-pdf-custom-preview");
customLinkButtonCustomPreview.addEventListener("click", async (e) => {
    function openFilePreview(fileUrl) {
        if (document.getElementById('filePreviewModal')) return;
        
        const style = document.createElement('style');
        style.innerHTML = `
          .modal {
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .modal-content {
            position: relative;
            background: white;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
          }
          .close-btn {
            position: absolute;
            top: calc(env(safe-area-inset-top, 0px) + 10px);
            left: 10px;
            background: gray;
            padding: 5px 10px;
            border: none;
            cursor: pointer;
          }
          .share-btn {
            position: absolute;
            left: 10px;
            bottom: calc(env(safe-area-inset-bottom, 0px) + 10px);
            margin-top: 10px;
            background: blue;
            color: white;
            padding: 10px;
            border: none;
            cursor: pointer;
          }
          .iframe {
            flex-grow: 1;
            width: 100%;
            border: none;
            height: -webkit-fill-available;

          }
        `;
        document.head.appendChild(style);
        
        const modal = document.createElement('div');
        modal.id = 'filePreviewModal';
        modal.className = 'modal';
        
        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';
        
        const closeButton = document.createElement('button');
        closeButton.className = 'close-btn';
        closeButton.innerText = 'Close';
        closeButton.onclick = () => modal.remove();
        
        const iframe = document.createElement('iframe');
        iframe.src = fileUrl;
        iframe.className = 'iframe';

        const object = document.createElement('object');
        object.data = fileUrl;
        object.type = 'application/pdf';
        object.width = '100%';
        object.height = '100%';
        object.style.flexGrow = '1';
        
        const shareButton = document.createElement('button');
        shareButton.className = 'share-btn';
        shareButton.innerText = 'Share';
        shareButton.onclick = async () => {
          try {
            const response = await fetch(fileUrl);
            const blob = await response.blob();
            const file = new File([blob], 'shared-file.pdf', { type: blob.type });
            
            if (navigator.share) {
              await navigator.share({
                files: [file],
                title: 'File Preview',
                text: 'Check out this file!'
              });
            } else {
              alert('Web Share API is not supported on this browser.');
            }
          } catch (error) {
            console.error('Error sharing file:', error);
            alert('Failed to share file.');
          }
        };
        
        modalContent.appendChild(closeButton);
        // modalContent.appendChild(iframe);
        modalContent.appendChild(object);
        modalContent.appendChild(shareButton);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
    }

    openFilePreview(windowOpenLink.href)  
});


document.getElementById("theFrame").contentWindow.onload = function() {
    this.document.getElementsByTagName("img")[0].style.width="100%";
};
