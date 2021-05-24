/* eslint-disable no-magic-numbers */
document.getElementById('main').style.display = 'none';
let message = prompt('What is event name?', 'meeting')
if (message) {
	document.getElementById('main').style.display = 'block';
} else {
	document.getElementById('main').style.display = 'none';
}

const meeting = () => {
	let validTime = /^(?:2[0-3]|[01][0-9]):[0-5][0-9]$/;
	let name = document.querySelector('#fname');
	let time = document.querySelector('#time');
	let place = document.querySelector('#place');

	if (!name.value
		|| !place.value) {
		alert('Input all data');
	} if (!validTime.test(time.value)) {
		alert('Enter time in format hh:mm');
	} if (name.value
		&& validTime.test(time.value)
		&& place.value) {
		alert(`${name.value} has a meeting today at ${time.value} somewhere in ${place.value}`);
	}
}

function convertMoney() {
	let euro = +prompt('Please, enter amount of euro?', '');
	let dollar = +prompt('Please, enter amount of dollar?', '');
	if (euro > 0
		&& dollar > 0) {
		alert(`${euro} euros are equal ${(euro * 33.51).toFixed(2)}hrns, ${dollar} dollars are equal 
${(dollar * 27.76).toFixed(2)}hrns`);
	}
}
document.querySelector('#submit').addEventListener('click', meeting);
document.querySelector('#convert').addEventListener('click', convertMoney);
