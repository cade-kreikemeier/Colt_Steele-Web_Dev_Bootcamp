const heading = document.querySelector("#rgbColorValue");
const btn = document.querySelector("#changeBtn");

btn.addEventListener("click", () => {
	const rgb = randRgbColor();

	document.body.style.backgroundColor = rgb.value;
	heading.innerText = rgb.value;
	if ((rgb.r < 30 && rgb.g < 30 && rgb.b < 30) || rgb.r + rgb.g + rgb.b < 90) {
		heading.style.color = "white";
	} else {
		heading.style.color = "black";
	}
});

const randRgbColor = () => {
	const r = Math.floor(Math.random() * 255);
	const g = Math.floor(Math.random() * 255);
	const b = Math.floor(Math.random() * 255);
	const value = `rgb(${r}, ${g}, ${b})`;
	return { value, r, g, b };
};
