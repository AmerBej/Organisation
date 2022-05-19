/*function download(filename, text) {
    var element = document.createElement("a");
    element.style.display = "none";
    //define the data of the file using encodeURIComponent
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text))

    //Add the download attribute of the hidden link
    element.setAttribute("download", filename)
    document.body.appendChild(element)

    //Simulate click of the created link
    element.click();

    document.body.removeChild(element);
}*/

//when the user clicks the download button,start download
//Start file download.
document.getElementById("saveButton").addEventListener("click", function() {
    //generate download of hello.txt file with some content
    var text = document.getElementById("schreibenMain").value;
    var filename = Math.floor(Math.random() * 10000);

    //download(filename, text);

    localStorage.setItem(filename, text);
}, false);












/*function saveNotes() {
    var geschriebenes = document.getElementById("schreibenMain");
    localStorage.setItem("schreibenMain", geschriebenes.value); //for loop für neuen key aber mache eh mit txt file also whatever
}

function getNotes() {
    return JSON.parse(localStorage.getItem("schreibenMain") || "[]");
}
*/

/*const a1 = document.getElementById("saveButton");
const blob1 = new Blob([document.getElementById("schreibenMain").value], { type: "text/plain" });
a1.href = URL.createObjectURL(blob1);



*/









/*function speicherText() {
    var userInput = document.getElementById("schreibenMain").value;

    var blob = new Blob([userInput], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "document.txt");


}*/