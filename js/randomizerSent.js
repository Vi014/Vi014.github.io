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
        document.body.innerHTML += "<h2>List " +  ((i/10)+1) + "</h2>";
        currList = document.createElement("ol");
    }
    let currSent = document.createElement("li");
    currSent.innerHTML = harvardSentences[i];
    currList.appendChild(currSent);
}
document.body.appendChild(currList);
