document.addEventListener("DOMContentLoaded", Function () {
let cart = [];
const cartCount =
document.getElementById("cart-count");
const cartItems =
document.getElementById("cart-items");
const cartTotal =
document.getElementById("cart-total");
const cartSection =
document.getElementById("cart");
const checkoutBtn =
document.getElementById("checkout-btn");

document.querySelectorAll(".add-to-cart").forEach(button => {

button.assEventListener("click",function () {
const nae =
this.getAttribute("data-name");
const price=
parseFloat(this.getAttribute("data-price"));

const existingItem = 
cart.find(item=> item.name === name);
if (existingItem) {

existingItem.quantity++;
}

updateCart();
});
});


document.getElementById("cart-btn").addEventListener("click ,function () {
cartSection.style.display= (cartSection.style.display ==="block") ? "none" : "block";
});

function updateCart() {
cartItems.innerHTML = "";
let total= 0;

cart.forEach(item => {
total += item.price *
item.quantity;
cartItems.innerHTML +=
`<li>egp{item.name} (xegp
{item.quantity}) - egpegp{(item.price* item.quantity).toFixed(2)}</li>`;
}):

cartTotal.textContent =
total.toFixed(2):
cartCount.textCOntent =
cart.reduce((sum, item) => sum + item.quantity, 0);
}

checkoutBtn.addEVentListener("click", function () {
alert("Proceeding to checkout...");
});


document.getElentById("Checkout-Form").addEventListener("submit" ,function (e) {
e.preventDefault();
alert("Order Placed");
this.reset();
});
});
