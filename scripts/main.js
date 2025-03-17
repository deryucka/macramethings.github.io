const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/logo.png") {
    myImage.setAttribute("src", "images/logo-alt-img.png");
  } else {
    myImage.setAttribute("src", "images/logo.png");
  }
});
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h2");
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Let's Meet, ${storedName}`;
}
myButton.addEventListener("click", () => {
  setUserName();
});
