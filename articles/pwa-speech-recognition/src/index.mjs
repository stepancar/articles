if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("service-worker.mjs")
        .then(() => console.log("Service Worker Registered"))
        .catch((err) =>
            console.error("Service Worker Registration Failed:", err)
        );
}

var langs = [
    [
        "English",
        ["en-AU", "Australia"],
        ["en-CA", "Canada"],
        ["en-IN", "India"],
        ["en-NZ", "New Zealand"],
        ["en-ZA", "South Africa"],
        ["en-GB", "United Kingdom"],
        ["en-US", "United States"],
    ],
    [
        "Español",
        ["es-AR", "Argentina"],
        ["es-BO", "Bolivia"],
        ["es-CL", "Chile"],
        ["es-CO", "Colombia"],
        ["es-CR", "Costa Rica"],
        ["es-EC", "Ecuador"],
        ["es-SV", "El Salvador"],
        ["es-ES", "España"],
        ["es-US", "Estados Unidos"],
        ["es-GT", "Guatemala"],
        ["es-HN", "Honduras"],
        ["es-MX", "México"],
        ["es-NI", "Nicaragua"],
        ["es-PA", "Panamá"],
        ["es-PY", "Paraguay"],
        ["es-PE", "Perú"],
        ["es-PR", "Puerto Rico"],
        ["es-DO", "República Dominicana"],
        ["es-UY", "Uruguay"],
        ["es-VE", "Venezuela"],
    ],
    ["Français", ["fr-FR", "France"]],
    ["Russian", ["ru-RU", "Russia"]],
];

for (var i = 0; i < langs.length; i++) {
    select_language.options[i] = new Option(langs[i][0], i);
}
select_language.selectedIndex = 3;
updateCountry();
select_dialect.selectedIndex = 0;
showInfo("info_start");

function updateCountry() {
    for (var i = select_dialect.options.length - 1; i >= 0; i--) {
        select_dialect.remove(i);
    }
    var list = langs[select_language.selectedIndex];
    for (var i = 1; i < list.length; i++) {
        select_dialect.options.add(new Option(list[i][1], list[i][0]));
    }
    select_dialect.style.visibility =
        list[1].length == 1 ? "hidden" : "visible";
}

var final_transcript = "";
var recognizing = false;
var ignore_onend;
var start_timestamp;
if (!("webkitSpeechRecognition" in window)) {
    upgrade();
} else {
    start_button.style.display = "inline-block";
    var recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onstart = function () {
        recognizing = true;
        showInfo("info_speak_now");
        start_img.src = "mic-animate.gif";
    };

    recognition.onerror = function (event) {
        if (event.error == "no-speech") {
            start_img.src = "mic.gif";
            showInfo("info_no_speech");
            ignore_onend = true;
        }
        if (event.error == "audio-capture") {
            start_img.src = "mic.gif";
            showInfo("info_no_microphone");
            ignore_onend = true;
        }
        if (event.error == "not-allowed") {
            if (event.timeStamp - start_timestamp < 100) {
                showInfo("info_blocked");
            } else {
                showInfo("info_denied");
            }
            ignore_onend = true;
        }
    };

    recognition.onend = function () {
        recognizing = false;
        if (ignore_onend) {
            return;
        }
        start_img.src = "mic.gif";
        if (!final_transcript) {
            showInfo("info_start");
            return;
        }
        showInfo("");
    };

    recognition.onresult = function (event) {
        var interim_transcript = "";
        for (var i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                final_transcript += event.results[i][0].transcript;
            } else {
                interim_transcript += event.results[i][0].transcript;
            }
        }
        final_transcript = capitalize(final_transcript);
        final_span.innerHTML = linebreak(final_transcript);
        interim_span.innerHTML = linebreak(interim_transcript);
        if (final_transcript || interim_transcript) {
            showButtons("inline-block");
        }
    };
}

function upgrade() {
    start_button.style.visibility = "hidden";
    showInfo("info_upgrade");
}

var two_line = /\n\n/g;
var one_line = /\n/g;
function linebreak(s) {
    return s.replace(two_line, "<p></p>").replace(one_line, "<br>");
}

var first_char = /\S/;
function capitalize(s) {
    return s.replace(first_char, function (m) {
        return m.toUpperCase();
    });
}

function startButton(event) {
    if (recognizing) {
        recognition.stop();
        return;
    }
    final_transcript = "";
    recognition.lang = select_dialect.value;
    recognition.start();
    ignore_onend = false;
    final_span.innerHTML = "";
    interim_span.innerHTML = "";
    start_img.src = "mic-slash.gif";
    showInfo("info_allow");
    showButtons("none");
    start_timestamp = event.timeStamp;
}

function showInfo(s) {
    if (s) {
        for (var child = info.firstChild; child; child = child.nextSibling) {
            if (child.style) {
                child.style.display = child.id == s ? "inline" : "none";
            }
        }
        info.style.visibility = "visible";
    } else {
        info.style.visibility = "hidden";
    }
}

document.getElementById("start_button").addEventListener("click", startButton);
document.getElementById("select_language").addEventListener("change", updateCountry);
document.getElementById("select_dialect").addEventListener("change", updateCountry);