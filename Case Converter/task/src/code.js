const txtValue = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
    ' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,' +
    ' when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
// document.getElementById("text").value = txtValue

document.getElementById('upper-case').addEventListener('click', toUpper);
document.getElementById('lower-case').addEventListener('click', toLower);
document.getElementById('proper-case').addEventListener('click', toProper);
document.getElementById('sentence-case').addEventListener('click', toSentence);
document.getElementById('save-text-file').addEventListener('click', toFile);

function toUpper () {
    let text = document.getElementById("text").value;
    document.getElementById("text").value = text.toUpperCase().trim();
}

function toLower () {
    let text = document.getElementById("text").value;
    document.getElementById("text").value = text.toLowerCase().trim();
}

function toProper() {
    let text = document.getElementById("text").value;
    document.getElementById("text").value = capitalizeAll(text);
}

function toSentence() {
    let text = document.getElementById("text").value.toLowerCase();
    document.getElementById("text").value = capitalizeFirst(text);
}

function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
}

function capitalizeFirst(text) {
    let newText = text.split('.');
    newText.pop();
    return  newText.map((s) => {
        return capitalize(s.trim());
    }).join('. ').trim() +'.';
}

function capitalizeAll(s) {
    return s.split(' ').map((w) => {
        return capitalize(w.trim());
    }).join(' ').trim();
}

function download(filename, text) {
    let elm = document.createElement('a');
    elm.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    elm.setAttribute('download', filename);
    elm.style.display = 'none';

    document.body.appendChild(elm);
    elm.click();
    document.body.removeChild(elm);
}

function toFile() {
    let text = document.getElementById("text").value;
    download('text.txt', text);
}