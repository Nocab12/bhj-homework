const elementCounter = document.getElementById("clicker__counter");
let counter = +elementCounter.textContent;

const imgCookie = document.getElementById("cookie");

imgCookie.onclick = function() {
	counter += 1;
	elementCounter.textContent = counter;
	if (counter % 2 == 0) {
		imgCookie.width = 200;
		imgCookie.height = 128;
	} else {
		imgCookie.width = 220;
		imgCookie.height = 148;
	}
};