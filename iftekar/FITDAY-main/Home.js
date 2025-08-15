// home-js/script.js


document.addEventListener("DOMContentLoaded", function () {
  let cartCount = 0;

  // If cart count exists in localStorage, load it
  if (localStorage.getItem("cartCount")) {
    cartCount = parseInt(localStorage.getItem("cartCount"));
  }

  // display cart counter in nav
  const nav = document.querySelector(".div_nav_iftekar ul");
  if (nav) {
    const cartItem = document.createElement("li");
    cartItem.innerHTML = `<a href="#">Cart (<span id="cart-count">${cartCount}</span>)</a>`;
    nav.appendChild(cartItem);
  }

  // Function to update cart
  function updateCart() {
    cartCount++;
    localStorage.setItem("cartCount", cartCount);
    document.getElementById("cart-count").textContent = cartCount;
    alert("Item added to cart!");
  }

  // Add event listeners for "ADD TO CART" buttons
  const addToCartButtons = document.querySelectorAll(".single_masonary_content a");
  addToCartButtons.forEach(button => {
    if (button.textContent.trim().toUpperCase() === "ADD TO CART") {
      button.addEventListener("click", function (event) {
        event.preventDefault();
        updateCart();
      });
    }
  });

  // VIEW DETAILS click handler (just logs for now)
  const viewDetailsButtons = document.querySelectorAll(".product_anchor a");
  viewDetailsButtons.forEach(button => {
    button.addEventListener("click", function (event) {
      console.log("Viewing details for:", this.closest(".ditails_of_product").querySelector("h2").textContent);
    });
  });
});


//mofozol js

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
    //shuvo css
    document.addEventListener("DOMContentLoaded", () => {
  console.log("FITDAY page loaded.");

  
  document.querySelectorAll('a.nav-link, footer a').forEach(link => {
    link.addEventListener("click", e => {
      const targetId = link.getAttribute("href");
      if (targetId && targetId.startsWith("#") && document.querySelector(targetId)) {
        e.preventDefault();
        document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
      }
    });
  });
  // moffozol js
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const successMessage = document.getElementById('formSuccess');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Grab values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Simple email regex for validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validation
    if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields.');
      return;
    }

    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // If passed, show success and reset form
    successMessage.classList.remove('d-none');
    form.reset();

    // Hide success message after 4 seconds
    setTimeout(() => {
      successMessage.classList.add('d-none');
    }, 4000);
  });
});