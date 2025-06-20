
//HTML deki clock yapısına ulaşmak için:
 let clock=document.getElementById("clock");


function clockupdate(){

let day = new Date();

let hours   = String(day.getHours()).padStart(2,"0");
let minutes = String(day.getMinutes()).padStart(2, "0");
let seconds = String(day.getSeconds()).padStart(2, "0");

let timeString = `${hours}:${minutes}:${seconds}`;

clock.innerText = timeString;


console.log(hours);
console.log(minutes);
console.log(seconds);
console.log(timeString);

}


setInterval(clockupdate,1000);
