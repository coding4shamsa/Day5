window.addEventListener('load', calculateDate)

function calculateDate(){
    var date = new Date;
    var dayNumber = date.getDay();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var ampm = hour >= 12? ('PM') : ('AM');

    var dayNames = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "fri"];

    hour = hour % 12;
    hour = hour ? hour : '12';
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;

    document.getElementById("day").innerHTML = dayNames[dayNumber];

    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("ampm").innerHTML = ampm;

setTimeout(calculateDate, 200)
}

