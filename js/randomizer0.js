let params = new URLSearchParams(document.location.search);
let shuffle = params.get("shuffle") || "list";
let lang = params.get("lang") || "english";

let languageList = [
    ["English", "english"],
    ["Español", "spanish"],
    ["Français", "french"],
    ["Português", "portuguese"],
    ["Русский", "russian"]
];

let langFile = document.createElement('script');
langFile.type = "text/javascript";
langFile.src = "js/harvardSentences/" + lang + ".js";
langFile.onload = loadSecondScript;
document.head.appendChild(langFile);

function loadSecondScript() {
    let jsFile = document.createElement('script');
    jsFile.type = "text/javascript";
    jsFile.src = "js/randomizer1.js";
    jsFile.defer = true;
    document.head.appendChild(jsFile);
}
