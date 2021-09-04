const startingMins = 7;
let time = startingMins * 60;

const countdownEl = document.getElementById('countdown');
const fulfillmentTime = document.getElementById('fulfillmentTime');
console.log(fulfillmentTime.innerHTML);
setInterval(updateCountdown, 1000);



function updateCountdown() {
    //Current time and fulfillment time calculation:
    var today = new Date()
    var hours = today.getHours()
    if (hours >= 12){
        hours -= 12;
    }
    var minutes = today.getMinutes()
    var todaysTime = hours + ":" + (minutes+7)
    
    console.log(todaysTime);
    fulfillmentTime.innerHTML = todaysTime;



    //calculating the timer
    const mins = Math.floor(time / 60);
    let secs = time % 60;
    secs = secs < 10 ? '0' + secs : secs;
    countdownEl.innerHTML = mins + ':'+ secs;



    if(time > 7*60){
        time--;
    };

    
}

button = document.querySelector("#addPizza");
button.onclick = function(){
    console.log("you clicked the add pizza button");
    time += 60;
    todaysTime += 1;
}
