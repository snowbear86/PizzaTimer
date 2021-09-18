const startingMins = 7;
let time = startingMins * 60;

const countdownEl = document.getElementById('countdown');
const fulfillmentTime = document.getElementById('fulfillmentTime');
console.log(fulfillmentTime.innerHTML);

var today = new Date();

setInterval(updateCountdown, 1000);


function setNewDate(){
    today = new Date()
}

//Current time and fulfillment time calculation:
function getCurrentHour(){

    var hours = today.getHours();
    return hours;

}

function getCurrentMinute(){
    var minutes = today.getMinutes();
    // console.log("current min", minutes)
    return minutes;
}

function getCurrentSeconds(){
    var seconds = today.getSeconds();
    // console.log("seconds", seconds)
    return seconds
}


function formatTime(hourMark, minuteMark, secondsMark, timerSecs){
    
    if(secondsMark + parseInt(timerSecs) > 60){
        minuteMark += 1
    }
    if(minuteMark >=60){
        minuteMark -= 60;
        hourMark += 1;
    }
    if (hourMark >= 12){
        hourMark -= 12;
    }
    
    if (minuteMark < 10){
        var todaysTime = hourMark + ':' +'0'+minuteMark;
    }
    else{
        var todaysTime = hourMark + ":" + (minuteMark)

    }
    // console.log("Current Secs:", secondsMark, "Timer Secs:", timerSecs)
    // fulfillmentTime.innerHTML = todaysTime;
    return todaysTime;
    

}

fulfillmentTime.innerHTML = formatTime(getCurrentHour(), getCurrentMinute()+startingMins)



function updateCountdown() {
    // console.log("testing")
    setNewDate()
    //calculating the timer
    const mins = Math.floor(time / 60);
    let secs = time % 60;
    secs = secs < 10 ? '0' + secs : secs;
    countdownEl.innerHTML = mins + ':'+ secs;

    if(time > 7*60){
        time--;
    };

    var currentMin = (getCurrentMinute()+mins)
    var currentSecs = (getCurrentSeconds())

    fulfillmentTime.innerHTML = formatTime(getCurrentHour(), currentMin, currentSecs, secs)
    // console.log(currentMin+ ":" + currentSecs)
    // return fulfillmentTime
 
}

buttonAdd = document.querySelector("#addPizza");
buttonAdd.onclick = function(){
    console.log("you clicked the add pizza button");
    time += 60;
    

    

}

buttonDelete = document.querySelector("#deletePizza");
buttonDelete.onclick = function(){
    console.log("you clicked to delete a pizza");
    if (time - 60 > 7*60 ){
        time -= 60;
    } else{
        time = 7*60;
    }
}

// updateCountdown()
