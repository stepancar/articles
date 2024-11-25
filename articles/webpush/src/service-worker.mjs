self.addEventListener("notificationclick", (event) => {
    event.notification.close();
    event.waitUntil(
        clients.openWindow("https://example.com") // Replace with your desired link
    );
});

self.addEventListener("install", (event) => {
    
});

self.addEventListener("fetch", (event) => {
    
});
