const pollTitle = document.getElementById("poll__title");
const pollAnswers = document.getElementById("poll__answers");

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
xhr.responseType = "json";
xhr.send();
xhr.onreadystatechange = function() {
	if(xhr.readyState === 4 && xhr.status === 200) {
		pollTitle.textContent = xhr.response.data.title;
		for (let a in xhr.response.data.answers) {
			pollAnswers.insertAdjacentHTML("beforeEnd", 
				`<button class="poll__answer">
              		${xhr.response.data.answers[a]}
            	 </button>`)
		}
		let pollAnswer = Array.from(document.querySelectorAll(".poll__answer"));
		for (let i in pollAnswer) {
			pollAnswer[i].addEventListener("click", () => {
				console.log("123");
				alert("Спасибо, ваш голос засчитан!");
				window.location.reload();
			});
		}
	}
};