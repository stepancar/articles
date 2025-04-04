self.addEventListener("notificationclick", (event) => {
    event.notification.close();
    event.waitUntil(
        clients.openWindow("https://example.com") // Replace with your desired link
    );
});

self.addEventListener("install", (event) => {
    
});

self.addEventListener("fetch", (event) => {
    const url = new URL(event.request.url);

    // Check if the request is for a PDF file under `files.stepancar.github.io`
    if (url.hostname === "files.stepancar.github.io" && url.pathname.endsWith(".pdf")) {
        const newUrl = `https://stepancar.github.io${url.pathname}`;
        console.log(`Redirecting: ${event.request.url} -> ${newUrl}`);

        event.respondWith(fetch(newUrl, { headers: event.request.headers }));
    }
});
