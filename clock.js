showDate();
setInterval(showTime, 1000);
function showTime() {
    var d = new Date();
    var hour = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var session = "AM";

    if (hour > 12) {
        session = "PM";
        hour -= 12;
    }
    if (hour == 0) {
        hour = 12;
    }
    hour = (hour < 10)? "0"+hour : hour;
    min = (min < 10)? "0"+min : min;
    sec = (sec < 10)? "0"+sec : sec;
    
    var time = hour+ ":" + min + ":" + sec;

    document.querySelector(".time").innerHTML = time;
    document.querySelector(".session").innerHTML = session;
}
function showDate() {
    var cal = new Date();
    var year = cal.getFullYear();
    var month = cal.getMonth();
    var dateOfMonth = cal.getDate();
    var day = cal.getDay();
    const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const Month = ["January", "February", "March"
    , "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var fullDate =  dayOfWeek[day] + ", " +  Month[month] + " " + dateOfMonth + ", " + year;
    console.log(fullDate);
    document.querySelector(".date").innerHTML = fullDate;
}