// Create a h1 element with "Not this Question Again..." Create a button with "Click Me". Once it's clicked, ask the user if they want to continue being asked to quit. If they enter 'n', stop asking. If they enter anything else, ask again.
var userInput = "";

function buttonClicked() {
    console.log("test");
    while (userInput != "n")
        userInput = prompt("Enter n to quit")
}

var button = document.getElementById("btn");
button.addEventListener("click", buttonClicked);

// If you click the #1 button the title should change to "1" and the background to blue.

function changeBackground(e)
{
    bgCol.style.background= "blue";
}

function changeText(e)
{
    tC.innerText = "1";
}
var tC = document.querySelector(".textChange");
var cC = document.getElementById("btn2");
cC.addEventListener("click",changeBackground);
cC.addEventListener("click", changeText);

// If you click the #2 button the title should change to "2" and the background to red. Use classlist to change the background.
var element = document.querySelector("aside");
function backGroundChange() {
    element.classList.toggle("redBackground")
}

function changeText2(e) {
    tC2.innerText = "2"
}
var tC2= document.querySelector(".textChange2");
var button2 = document.getElementById("btn3");
button2.addEventListener("click", backGroundChange);
button2.addEventListener("click", changeText2);

