const fontSize = Array.from(document.querySelectorAll(".font-size"));
const book = document.getElementById("book");

function fontSizeActive(e) {
	 e.preventDefault();
	 const container = e.target;
	 for (let a in fontSize) {
	 	fontSize[a].classList.remove("font-size_active");
	 	book.classList.remove("font-size_big");
	 	book.classList.remove("font-size_small");
	 }

	container.classList.add("font-size_active");
	if (container.classList.contains("font-size_small")) {
		book.className = "font-size_small";
	} else if (container.classList.contains("font-size_big")) {
		book.className = "font-size_big";
	}
};

for (let a in fontSize) {
	fontSize[a].addEventListener("click", fontSizeActive);
}