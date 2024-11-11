var countDownTime = new Date("Nov 22, 2024 07:30:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownTime - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days + "<span class='time-label'>D</span>";
    document.getElementById("hours").innerHTML = hours + "<span class='time-label'>H</span>";
    document.getElementById("minutes").innerHTML = minutes + "<span class='time-label'>M</span>";
    document.getElementById("seconds").innerHTML = seconds + "<span class='time-label'>S</span>";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = "00<span class='time-label'>D</span>";
        document.getElementById("hours").innerHTML = "00<span class='time-label'>H</span>";
        document.getElementById("minutes").innerHTML = "00<span class='time-label'>M</span>";
        document.getElementById("seconds").innerHTML = "00<span class='time-label'>S</span>";
        
        setTimeout(function(){
            window.location.href = 'desafioinicial.html';
        }, 2000);
    }
}, 1000);
