var whatBTN = document.querySelector(".btn-outline-success");
var clickBTN = document.querySelector(".btn-warning")
whatBTN.addEventListener("click", function(){
    document.querySelector("picture").innerHTML = `<img src="img/giphy thinking of your butt.gif" class="w-100">`;
    whatBTN.classList.add("d-none");
    clickBTN.classList.remove("d-none");
    clickBTN.classList.add("d-inline");
    document.querySelector("picture").classList.remove("w-50");
    document.querySelector("h2").innerHTML="";
    document.querySelector("p").innerHTML="";
})
function changePic(){
    document.querySelector("picture").innerHTML = `<img src="img/slap-ass.gif" class="w-100"></img>`;
    clickBTN.classList.add("d-none");
    document.querySelector("img").addEventListener("click" , lastchange);
    document.querySelector("p").innerHTML ="Finally, click on the picture";
}
function lastchange(){
    document.querySelector("picture").innerHTML = `<img src="img/cute-couple-i-want-to-grow-old-together.gif" class="w-100"></img>`;

    document.querySelector("h2").innerHTML = `I Love You <i class="fa-regular fa-heart"></i> <3!`
    document.querySelector("p").innerHTML = `<i class="fa-solid fa-quote-left"></i> I need you like a heart needs a beat. <i class="fa-solid fa-quote-right"></i>`

}