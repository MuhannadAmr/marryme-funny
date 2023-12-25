// var noBTN=document.querySelector("button");
// var count = 0;
// noBTN.addEventListener("mouseenter" , function(eInfo){
//     noBTN.style.left = Math.floor(Math.random()*1000);
//     noBTN.style.top = Math.floor(Math.random()*700);
//     count++;
//     if(count==4){
//         document.querySelector("picture").innerHTML = `<img src="img/marry-me-anime.gif">`
//     }

// })

// =================================================


var noBTN=document.querySelector("button");
var count = 0;
noBTN.addEventListener("mouseenter" , function(eInfo){
    noBTN.classList.add("position-absolute");
    noBTN.style.left = Math.floor(Math.random()*1000);
    noBTN.style.top = Math.floor(Math.random()*700);
    count++;
    if(count==4){
        document.querySelector("picture").innerHTML = `<img src="img/marry-me-anime.gif">`
    }

})