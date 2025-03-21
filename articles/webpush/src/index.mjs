if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("service-worker.mjs")
        .then(() => console.log("Service Worker Registered"))
        .catch((err) =>
            console.error("Service Worker Registration Failed:", err)
        );
}

document.getElementById("subscribe").addEventListener("click", async () => {
    if (Notification.permission !== "granted") {
        await Notification.requestPermission();
        alert("Subscribed to notifications!");
    }
});

document.getElementById("sendNotification").addEventListener("click", () => {
    if (Notification.permission === "granted") {
        navigator.serviceWorker.ready.then((registration) => {
            registration.showNotification("New Picture!", {
                body: "Here is a cool image for you.",
                icon: "https://andreinwald.github.io/webpush-ios-example/images/favicon.png",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg/1920px-Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg",
            });
        });
    } else {
        alert("Please subscribe to notifications first.");
    }
});
