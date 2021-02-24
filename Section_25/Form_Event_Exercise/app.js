const form = document.querySelector("form");
const list = document.querySelector("#list");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const productInput = form.elements.product;
	const qtyInput = form.elements.qty;
	addProduct(productInput.value, qtyInput.value);
	productInput.value = "";
	qtyInput.value = "";
});

const addProduct = (product, qty) => {
	const newProduct = document.createElement("li");
	newProduct.innerText = `${qty} ${product}`;
	list.appendChild(newProduct);
};
