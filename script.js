window.addEventListener('DOMContentLoaded', function() {

	const updateTimer = setInterval(function() {
	future = Date.parse("Mar 31, 2025 23:59:59");
	now = new Date();
	diff = future - now;
	
	days = Math.floor(diff / (1000 * 60 * 60 * 24));
	hours = Math.floor(diff / (1000 * 60 * 60));
	mins = Math.floor(diff / (1000 * 60));
	secs = Math.floor(diff / 1000);
	
	d = days;
	let daysText;
	if(days === 11 || days === 12) {
		daysText = 'дней'
	} else {
		if(days % 10 === 1) {
			daysText = 'день'
		} else if(days % 10 === 2 || days % 10 === 3 || days % 10 === 4) {
			daysText = 'дня'
		} else {
			daysText = 'дней'
		}
	}

	h = hours - days * 24;
	let hoursText;
	if(h === 11 || h === 12) {
		hoursText = 'часов'
	} else {
		if(h % 10 === 1) {
			hoursText = 'час'
		} else if(h % 10 === 2 || h % 10 === 3 || h % 10 === 4) {
			hoursText = 'часа'
		} else {
			hoursText = 'часов'
		}
	}

	m = mins - hours * 60;
	let minsText;
	if(m === 11 || m === 12) {
		minsText = 'минут'
	} else {
		if(m % 10 === 1) {
			minsText = 'минута'
		} else if(m % 10 === 2 || m % 10 === 3 || m % 10 === 4) {
			minsText = 'минуты'
		} else {
			minsText = 'минут'
		}
	}

	s = secs - mins * 60;
	let secsText;
	if(s === 11 || s === 12) {
		secsText = 'секунд'
	} else {
		if(s % 10 === 1) {
			secsText = 'секунда'
		} else if(s % 10 === 2 || s % 10 === 3 || s % 10 === 4) {
			secsText = 'секунды'
		} else {
			secsText = 'секунд'
		}
	}
	
	document.getElementById("timer")
	  .innerHTML =
		'<div>' + d + '<span>' + daysText + '</span></div>' +
	  	'<div>' + h + '<span>'+ hoursText + '</span></div>' +
		'<div>' + m + '<span>'+  minsText +'</span></div>' +
		'<div>' + s + '<span>'+ secsText +'</span></div>'
	}, 1000)

	window.addEventListener('scroll', function () {
		const scrollPosition = window.scrollY;
		console.log(scrollPosition);
	  });
})