function updateClock(){
// console.log('oiwjefwoiej')
//Retrive the current time
var currentTime = new Date();
//Retrive hours, minutes, seconds
var currentHours = currentTime.getHours();
var currentMinutes = currentTime.getMinutes();
var currentSeconds = currentTime.getSeconds();

//avoid (time < 10) no leading 0 situation
///? use to send value before ":" if the condition is true, otherwise send the value after ":""
currentMinutes = (currentMinutes < 10 ? '0' : '') + currentMinutes;
currentSeconds = (currentSeconds < 10 ? '0' : '') + currentSeconds;

//set AM/PM and Hours
var timeOfDay = (currentHours < 12) ? "AM" : "PM";
currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;
currentHours = (currentHours === 0) ? 12 : currentHours;

var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

//display the clock
// document.getElementById("clock").childNodes[0].replaceChild(currentTimeString);
// console.log(currentTimeString)
$('#clock').html("<h1>" + currentTimeString + "</h1>");
// $('#clock').text(currentTimeString)
};


// onload="updateClock(); setInterval('updateClock()', 1000 )"


setInterval('updateClock()', 1000);



// setInterval(function(){
// 	// console.log('oiwjefwoiej')
// 		//Retrive the current time
// 		var currentTime = new Date();
// 		//Retrive hours, minutes, seconds
// 		var currentHours = currentTime.getHours();
// 		var currentMinutes = currentTime.getMinutes();
// 		var currentSeconds = currentTime.getSeconds();

// 		//avoid (time < 10) no leading 0 situation
// 		///? use to send value before ":" if the condition is true, otherwise send the value after ":""
// 		currentMinutes = (currentMinutes < 10 ? '0' : '') + currentMinutes;
// 		currentSeconds = (currentSeconds < 10 ? '0' : '') + currentSeconds;

// 		//set AM/PM and Hours
// 		var timeOfDay = (currentHours < 12) ? "AM" : "PM";
// 		currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;
// 		currentHours = (currentHours === 0) ? 12 : currentHours;

// 		var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

// 		//display the clock
// 		// document.getElementById("clock").childNodes[0].replaceChild(currentTimeString);
// 		// console.log(currentTimeString)
// 		$('#clock').html("<h1>" + currentTimeString + "</h1>");





// 	console('hello')
// }, 5000)