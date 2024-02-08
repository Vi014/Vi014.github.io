for (let i = 0; i < harvardSentences.length - 1; i++) {
    let j = i + Math.floor(Math.random() * (harvardSentences.length - i));
    let temp = harvardSentences[i];
    harvardSentences[i] = harvardSentences[j];
    harvardSentences[j] = temp;
}

let currList = document.createElement("ol");

for (let i = 0; i < harvardSentences.length; i++) {
    let listHeader = document.createElement("h2");
    listHeader.innerHTML = "List " + (i+1);
    document.body.appendChild(listHeader);

    let currList = document.createElement("ol");

    for(let j = 0; j < harvardSentences[i].length; j++) {
        let listEle = document.createElement("li");
        listEle.innerHTML = harvardSentences[i][j];
        currList.appendChild(listEle);
    }

    document.body.appendChild(currList);
}