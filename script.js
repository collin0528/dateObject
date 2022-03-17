setInterval(function(){
	let date = new Date();
	let hours = date.getHours();
	console.log(hours);
	let ampm = (hours>=12)? "pm":"am";
	if (hours>12) {
		hours = hours-12;
	}
	let min = date.getMinutes();
	console.log(min);
	min = min.toString();
	if (min.length==1) {
		min = "0" + min;

	}

	let sec = date.getSeconds();
	sec = sec.toString();
	console.log(sec);
	if(sec.length==1){
		sec = "0" + sec;
	}
	
	let clock = document.querySelector('#clock');
	let clock_code = `<div id = 'clock_code'>
	<h1> ${hours}:${min}${ampm} <small>${sec} </small> </h1> 
	</div>`;
	clock.innerHTML = clock_code;
})