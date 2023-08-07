let date= document.getElementById("date");
var local = new Date();

console.log(local)

date.innerHTML=local.toLocaleString();

let text = document.getElementById("text")
let button = document.getElementById("button")


button.addEventListener("click", function(){
    text.style.color="brown";
    text.style.fontSize="72px"
    text.style.backgroundColor="black"
})