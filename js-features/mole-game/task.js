const molesKilled = document.getElementById("dead");
const misses = document.getElementById("lost");
const hole = Array.from(document.getElementsByClassName('hole'));

let counterKilled = +molesKilled.textContent;
let counterMisses = +misses.textContent;

function checkGameOver() {
	if (counterMisses === 5) {
		alert("Вы проиграли!");
		counterKilled = 0;
		counterMisses = 0;
		molesKilled.textContent = counterKilled;
		misses.textContent = counterMisses;
	} else if (counterKilled === 10) {
		alert("Вы выиграли!");
		counterKilled = 0;
		counterMisses = 0;
		molesKilled.textContent = counterKilled;
		misses.textContent = counterMisses;
	}
};

for (let a in hole) {
	hole[a].addEventListener("click", () => {
		if (hole[a].className.includes('hole_has-mole')) {
		counterKilled += 1;
		molesKilled.textContent = counterKilled;
	} else {
		counterMisses += 1;
		misses.textContent = counterMisses;
	}
	checkGameOver();
	});
}