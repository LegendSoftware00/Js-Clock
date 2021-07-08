var clockContainer = document.querySelector(".clock-container");
var hr = document.querySelector("#hour");
var miN = document.querySelector("#minute");
var sec = document.querySelector("#second");

function clockDateAnimation() {
    var d = new Date();
    aHour = d.getHours();
    aMinute = d.getMinutes();
    aSecond = d.getSeconds();

    sec.style.transform = "rotate(" + (aSecond * 6) + "deg" + ")";
    miN.style.transform = "rotate(" + (aMinute * 6) + "deg" + ")";
    hr.style.transform = "rotate(" + (aHour * 30) + "deg" + ")";
    console.log(aHour +":" + aMinute + ":" + aSecond )
    
}
setInterval(clockDateAnimation, 1000);