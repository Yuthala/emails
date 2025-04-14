window.addEventListener('DOMContentLoaded', function() {

//функция обратного отсчета времени
	const updateTimer = setInterval(function() {
	future = Date.parse("May 31, 2025 23:59:59");
	now = new Date();
	diff = future - now;

	days = Math.floor(diff / (1000 * 60 * 60 * 24));
	hours = Math.floor(diff / (1000 * 60 * 60));
	mins = Math.floor(diff / (1000 * 60));
	secs = Math.floor(diff / 1000);
	if(days >= 0) {
		//вычисляем сколько дней/часов/минут/секунд осталось в таймере
		d = days;
		h = hours - days * 24;
		m = mins - hours * 60;
		s = secs - mins * 60;
	//останавливаем счетчик, когда время обратного отсчета заканчивается	
	} else if(days < 0) {
		clearInterval(updateTimer);
	}

	let daysText,
	hoursText,
	minsText,
	secsText

	forms = {
		0: ['дней', 'часов', 'минут', 'секунд'],
		1: ['день', 'час', 'минута', 'секунда'],
		2: ['дня', 'часа', 'минуты', 'секунды'],
		3: ['дня', 'часа', 'минуты', 'секунды'],
		4: ['дня', 'часа', 'минуты', 'секунды'],
		5: ['дней', 'часов', 'минут', 'секунд'],
		6: ['дней', 'часов', 'минут', 'секунд'],
		7: ['дней', 'часов', 'минут', 'секунд'],
		8: ['дней', 'часов', 'минут', 'секунд'],
		9: ['дней', 'часов', 'минут', 'секунд'],
		11: ['дней', 'часов', 'минут', 'секунд'],
		12: ['дней', 'часов', 'минут', 'секунд'],
		13: ['дней', 'часов', 'минут', 'секунд'],
		14: ['дней', 'часов', 'минут', 'секунд']
	}


	const time = [d, h, m, s]
	//"обрезаем" первую цифру полученного числа кроме 11, 12, 13, 14
 	const timeTransformed = time.map((item) => {
		if(item != 11 && item != 12 && item != 13 && item != 14) {
			return item % 10;
		} else {
			return item;
		}
	})

	//проходим полученный массив (i - индексы массива); 
	// соответствующую форму времени подставляем из объекта forms
	for(let i = 0; i < 4; i++) {
		switch(i) {
			case 0:
				if (timeTransformed[i] >= 5 && timeTransformed[i] <= 14 || timeTransformed[i] == 0) {
					daysText = forms[5][i]
				} else if (timeTransformed[i] == 1) {
					daysText = forms[timeTransformed[i]][i]
				} else {
					daysText = forms[timeTransformed[i]][i]
				}
				break;

			case 1:
				if (timeTransformed[i] >= 5 && timeTransformed[i] <= 14 || timeTransformed[i] == 0) {
					hoursText = forms[5][i]
				} else if (timeTransformed[i] == 1) {
					hoursText = forms[timeTransformed[i]][i]
				} else {
					hoursText = forms[timeTransformed[i]][i]
				}
				break;
			
			case 2:
				if (timeTransformed[i] >= 5 && timeTransformed[i] <= 14 || timeTransformed[i] == 0) {
					minsText = forms[5][i]
				} else if (timeTransformed[i] == 1) {
					minsText = forms[timeTransformed[i]][i]
				} else {
					minsText = forms[timeTransformed[i]][i]
				}
				break;

			case 3:
				if (timeTransformed[i] >= 5 && timeTransformed[i] <= 14 || timeTransformed[i] == 0) {
					secsText = forms[5][i]
				} else if (timeTransformed[i] == 1) {
					secsText = forms[timeTransformed[i]][i]
				} else {
					secsText = forms[timeTransformed[i]][i]
				}
				break;
		}
	}
	
	//отрисовываем в div id="timer"
	document.getElementById("timer")
	  .innerHTML =
		'<div>' + d + '<span>' + daysText + '</span></div>' +
	  	'<div>' + h + '<span>'+ hoursText + '</span></div>' +
		'<div>' + m + '<span>'+  minsText +'</span></div>' +
		'<div>' + s + '<span>'+ secsText +'</span></div>'
	}, 1000)




//toggle Подробнее/Свернуть в карточке кейса
function textCollapse() {
	const linkCollapse = document.querySelectorAll(".icon-link");
	const paragraph = document.querySelectorAll('.card-text');
	let isOpen = false;

	if (typeof linkCollapse === 'object' && linkCollapse!== null && 
		typeof paragraph === 'object' && paragraph!== null)  {
			for (let i = 0; i < linkCollapse.length; i++) {
				linkCollapse[i].addEventListener("click", function() {
					paragraph[i].classList.toggle("p-collapsed");
					if(!isOpen) {
						linkCollapse[i].innerHTML = 'Свернуть' + '<svg class="bi" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>';
						isOpen = true;
					} else if(isOpen) {
						linkCollapse[i].innerHTML = 'Подробнее' + '<svg class="bi" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>';
						isOpen = false;
					}
				 });
			 }
		}
}
textCollapse();


	// Функция определения Y-скролла
	// window.addEventListener('scroll', function () {
	// 	const scrollPosition = window.scrollY;
	// 	// console.log(scrollPosition);
	//   });
})