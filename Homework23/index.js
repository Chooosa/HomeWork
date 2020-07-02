const tb = document.querySelector('.text-box');
let txt = document.querySelector('.par');
let rem = 1;
let wheel = false;
let angryStep = document.querySelectorAll('.angry-step');

//1
document.addEventListener('mousemove', (event) => {
	txt = document.querySelector('.par');
	switch (rem) {
		case 30:
			angryStep[0].style.background = `#FF0000`;
			txt.remove();
			addMsg('Ну я же попросил не двигать мышкой');
			break;
		case 100:
			angryStep[1].style.background = `#FF0000`;
			txt.remove();
			addMsg(`Ты опять? Попросили же не двигать мышкой`);
			break;
		case 200:
			angryStep[2].style.background = `#FF0000`;
			txt.remove();
			addMsg(`Понятно все с тобой,
				вообще не слушаешься, может ты еще
				и колесиком начнешь крутить?`);
			//wheel=true;
			break;
	}
	if (rem < 200) {
		rem++;
	}
});

//2
document.addEventListener('wheel', (event) => {
	txt = document.querySelector('.par');
	switch (rem) {
		case 200:
			angryStep[3].style.background = `#FF0000`;
			txt.remove();
			addMsg(`Просто прекрасно, а ну давай еще крутани)`);
			break;
		case 230:
			angryStep[4].style.background = `#FF0000`;
			txt.remove();
			addMsg(`Все ясно, ну тогда еще наведи мыш на текст`);
			break;
	}
	if (rem < 230) {
		rem++;
	}
});

//3
document.addEventListener('mouseover', (event) => {
	txt = document.querySelector('.par');
	if (rem == 230) {
		angryStep[5].style.background = `#FF0000`;
		txt.remove();
		addMsg(`Угу, ну раз тебе нравится
		меня доводить, тогда кликни на текст!`);
		rem++;
	}
})

//4
document.addEventListener('click', (event) => {
	txt = document.querySelector('.par');
	switch (rem) {
		case 231:
			angryStep[6].style.background = `#FF0000`;
			txt.remove();
			addMsg(`Ну все, мое терпение почти на исходе,
				для полного счатстья не хватает одного нажатия
				на текст!!!`);
			rem++;
			break;
		case 232:
			angryStep[7].style.background = `#FF0000`;
			txt.remove();
			addMsg(`АААААА, всеее, доканал!!!!!
				Мне надо остыть, перезагрузи
				пожалуйста страницу)`);
			sessionStorage.setItem('fin', 2);
			break;
	}
})

//5
window.addEventListener('load', (event) => {
	if (sessionStorage.getItem('fin') == 2) {
		alert('Спасибо,  надеюсь это больше не повторится');
		rem=1;
		sessionStorage.setItem('fin', 1);
	}
});

function addMsg (text) {
	tb.insertAdjacentHTML("beforeend", `<p class="par text">
		${text}</p>`);
}