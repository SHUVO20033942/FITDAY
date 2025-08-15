let cartCount = 0;
const cartCounter = document.getElementById("cart-count");
document.querySelectorAll(".cart").forEach(button => {
    button.addEventListener("click", () => {
        cartCount++;
        cartCounter.textContent = cartCount;
        alert("Item added to cart!");
    });
});
document.querySelectorAll(".buy").forEach(button => {
    button.addEventListener("click", () => {
        alert("Redirecting to checkout...");
    });