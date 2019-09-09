const elementTimer = document.getElementById("timer");
let timer = +elementTimer.textContent;

function tinerFunc() {
	timer -= 1;
	elementTimer.textContent = timer;
	if (timer === 0) {
		clearInterval(timerId);
		alert("Вы победили в конкурсе!");
	}
};

const timerId = setInterval(tinerFunc, 1000);