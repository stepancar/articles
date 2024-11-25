if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("service-worker.mjs")
        .then(() => console.log("Service Worker Registered"))
        .catch((err) =>
            console.error("Service Worker Registration Failed:", err)
        );
}

function updateData(e) {
    const element = document.getElementById('output');
    element.innerHTML = JSON.stringify({
        x: e.accelerationIncludingGravity.x,
        y: e.accelerationIncludingGravity.y,
        z: e.accelerationIncludingGravity.z
    });
}

async function subscribe() {
    if (DeviceMotionEvent && DeviceMotionEvent.requestPermission) {
        const permission = await DeviceMotionEvent.requestPermission();
        if (permission === "granted") {
            console.log("Device Motion Permission Granted");
        }
        window.addEventListener("devicemotion", updateData);
    }
}

document.getElementById("subscribe").addEventListener("click", async () => {
    subscribe();
});

try {
    subscribe();
    window.addEventListener("devicemotion", updateData);
} catch (e) {
    console.log(e);
}

