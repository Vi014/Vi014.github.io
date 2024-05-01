let title = document.createElement('title');
title.innerHTML = strings[0];
document.head.appendChild(title);

let langTxt = document.createElement('span');
langTxt.innerHTML = strings[1];
document.body.appendChild(langTxt);

let currURL = location.protocol + '//' + location.host + location.pathname;

for(let i = 0; i < languageList.length; i++) {
    let langLink = document.createElement('a');
    langLink.href = currURL + "?shuffle=" + shuffle + "&lang=" + languageList[i][1];
    langLink.innerHTML = languageList[i][0];
    document.body.appendChild(langLink);
    document.body.innerHTML += " ";
}

document.body.appendChild(document.createElement('br'));

let shufTxt = document.createElement('span');
shufTxt.innerHTML = strings[2];
document.body.appendChild(shufTxt);

let listLink = document.createElement('a');
listLink.href = currURL + "?shuffle=" + "list" + "&lang=" + lang;
listLink.innerHTML = strings[3];
document.body.appendChild(listLink);
document.body.innerHTML += " ";

let sentLink = document.createElement('a');
sentLink.href = currURL + "?shuffle=" + "sentences" + "&lang=" + lang;
sentLink.innerHTML = strings[4];
document.body.appendChild(sentLink);

document.body.appendChild(document.createElement('br'));

let origLink = document.createElement('a');
origLink.innerHTML = strings[5];
origLink.href = strings[6];
document.body.appendChild(origLink);

if(shuffle == "list") {
    let sentFile = document.createElement('script');
    sentFile.type = "text/javascript";
    sentFile.src = "js/harvardSentences/" + lang + "List.js";
    sentFile.onload = shuffleList;
    document.head.appendChild(sentFile);
}
else {
    let sentFile = document.createElement('script');
    sentFile.type = "text/javascript";
    sentFile.src = "js/harvardSentences/" + lang + "Sent.js";
    sentFile.onload = shuffleSent;
    document.head.appendChild(sentFile);
}

function shuffleList() {
    for (let i = 0; i < harvardSentences.length - 1; i++) {
        let j = i + Math.floor(Math.random() * (harvardSentences.length - i));
        let temp = harvardSentences[i];
        harvardSentences[i] = harvardSentences[j];
        harvardSentences[j] = temp;
    }
    
    let currList = document.createElement("ol");
    
    for (let i = 0; i < harvardSentences.length; i++) {
        let listHeader = document.createElement("h2");
        listHeader.innerHTML = strings[7] + " " + (i+1);
        document.body.appendChild(listHeader);
    
        let currList = document.createElement("ol");
    
        for(let j = 0; j < harvardSentences[i].length; j++) {
            let listEle = document.createElement("li");
            listEle.innerHTML = harvardSentences[i][j];
            currList.appendChild(listEle);
        }
    
        document.body.appendChild(currList);
    }
}

function shuffleSent() {
    for (let i = 0; i < harvardSentences.length - 1; i++) {
        let j = i + Math.floor(Math.random() * (harvardSentences.length - i));
        let temp = harvardSentences[i];
        harvardSentences[i] = harvardSentences[j];
        harvardSentences[j] = temp;
    }
    
    var currList = document.createElement("ol");
    
    for (let i = 0; i < harvardSentences.length; i++) {
        if(!(i % 10)) {
            document.body.appendChild(currList);
            document.body.innerHTML += "<h2>" + strings[7] + " " +  ((i/10)+1) + "</h2>";
            currList = document.createElement("ol");
        }
        let currSent = document.createElement("li");
        currSent.innerHTML = harvardSentences[i];
        currList.appendChild(currSent);
    }
    document.body.appendChild(currList);
}