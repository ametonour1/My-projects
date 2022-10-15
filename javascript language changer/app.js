const container = document.querySelector(".container");
const title = document.querySelector(".title");
const text = document.querySelector(".text");
const gb = document.querySelector(".gb");
const fr = document.querySelector(".fr");
const de = document.querySelector(".de");
const es = document.querySelector(".es");
const gr = document.querySelector(".gr");
const tr = document.querySelector(".tr");
const img = document.querySelector(".imgcontainer",);

let titleArray = ["Hello","Salut","Hallo","Hola","Χαιρετε","Merhaba"];
let textArray = ["This is a javascript demonstration","Ceci est une démonstration javascript","Dies ist eine Javascript-Demonstration","Esta es una demostración de javascript","Αυτή είναι μια επίδειξη javascript","Bu bir javascript gösterimidir"] ;

img.addEventListener("click",darkmode);
container.addEventListener("click", changeLanguage);

function darkmode () {
    img.classList.toggle("imgcontainerActive")
    container.classList.toggle("containerActive")
    title.classList.toggle("titleActive")
    text.classList.toggle("textActive")
};

function changeLanguage (e) {
    const item = e.target;
    if (item.classList[0] === ("gb")) {
        title.innerText = titleArray[0]
        text.innerText = textArray[0]
    }
    if (item.classList[0] === ("fr")) {
        title.innerText = titleArray[1]
        text.innerText = textArray[1]
    }
    if (item.classList[0] === ("de")) {
        title.innerText = titleArray[2]
        text.innerText = textArray[2]
    }
    if (item.classList[0] === ("es")) {
        title.innerText = titleArray[3]
        text.innerText = textArray[3]
    }
    if (item.classList[0] === ("gr")) {
        title.innerText = titleArray[4]
        text.innerText = textArray[4]
    }
    if (item.classList[0] === ("tr")) {
        title.innerText = titleArray[5]
        text.innerText = textArray[5]
    }
}
