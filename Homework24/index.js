const rangeRed = document.querySelector('.range__red');
const rangeGreen = document.querySelector('.range__green');
const rangeBlue = document.querySelector('.range__blue');
const body = document.querySelector('body');

function changeColor () {
	let rangeRedValue = rangeRed.value;
	let rangeGreenValue = rangeGreen.value;
	let rangeBlueValue = rangeBlue.value;
	const text = document.querySelectorAll('.range-label');
	const legend = document.querySelector('legend');

	console.log(rangeRedValue, rangeGreenValue, rangeBlueValue);
	body.style.background = `rgb(${rangeRedValue},
	${rangeGreenValue},${rangeBlueValue})`;

	if (rangeRedValue < 70 && rangeGreenValue < 70 && rangeBlueValue < 70) {
		text[0].style.color = `#fff`;
		text[1].style.color = `#fff`;
		text[2].style.color = `#fff`;
		legend.style.color = `#fff`;
	} else {
		text[0].style.color = `#000`;
		text[1].style.color = `#000`;
		text[2].style.color = `#000`;
		legend.style.color = `#000`;
	}
}