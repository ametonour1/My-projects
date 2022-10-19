const image = document.querySelector(".image");
const user = document.querySelector(".name");
const text = document.querySelector(".review");
const left = document.querySelector(".leftbtn");
const right = document.querySelector(".rightbtn");
const container = document.querySelector(".container");

 const imageArray = [" 17.jpg", "34.jpg","40.jpg","79.jpg","90.jpg"] ;
const nameArray = [" Kasandra Dudley "," Veiko Morel "," Aron Tanner "," Nick Case "," Ariah Wescott "];
const textArray = ["The secure payments arrived in a timely manner in perfect condition. I appreciated your personal note too","Not only is the website so beautiful, enjoyable and fun but the  secure payments are amazing!","easy pay has the best secure payments around! ","I loved the secure payments it arrived just in time for my birthday! ","Thanks so much! My secure payments was great and delivery was super fast too! "];

user.innerText = nameArray[0];
image.src = imageArray[0];
text.innerText = textArray[0];

let currentUserIndex = 0;
let currentImageIndex = 0;
let currentTextIndex = 0;

container.addEventListener("click",slide);

function slide (e) {
  const item = e.target ;
  if (item.classList[0] === ("leftbtn")){
    currentUserIndex++
    currentImageIndex++
    currentTextIndex++
    if (currentUserIndex === nameArray.length){
      currentUserIndex = 0
      currentImageIndex = 0
      currentTextIndex = 0
    }
    user.innerText = nameArray[currentUserIndex]
    text.innerText = textArray[currentTextIndex]
    image.src = imageArray[currentImageIndex]
    return
  }
  if (item.classList[0] === ("rightbtn")) {
    currentUserIndex--
    currentImageIndex--
    currentTextIndex--
    if ( currentUserIndex < 0) {
      currentUserIndex = nameArray.length-1
      currentTextIndex = textArray.length-1
      currentImageIndex = imageArray.length-1
      user.innerText = nameArray[currentUserIndex]
      text.innerText = textArray[currentTextIndex]
      image.src = imageArray[currentImageIndex]
      return
    
    }
    else {
      user.innerText = nameArray[currentUserIndex]
      text.innerText = textArray[currentTextIndex]
      image.src = imageArray[currentImageIndex]
    }
  }
}


// following code is coded by me while experimenting on the concept it is keept for reference only
/* const text = document.querySelector(".title");
const pbtn = document.querySelector(".plusbtn");
const mbtn = document.querySelector(".minussbtn");
const container = document.querySelector("body");
let numArray = ["hello","how","are","you","doing","!"];
let currentIndex = 0;

text.innerText = numArray[0];
container.addEventListener("click",change);

function change (e) {
  const item = e.target ;
  if (item.classList[0] === ("plusbtn")) 
  {
    currentIndex++
    if (currentIndex === numArray.length) {
      currentIndex = 0
    }
    text.innerText = numArray[currentIndex];
    
    
    return
  }
  if (item.classList[0] === ("minusbtn"))
  {
    currentIndex--
    if (currentIndex < 0) {
      currentIndex = numArray.length-1
      text.innerText = numArray[currentIndex];
      return
    }
    else (
    text.innerText = numArray[currentIndex]);
    
    
  }
} */










