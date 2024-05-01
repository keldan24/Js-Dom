document.addEventListener("DOMContentLoaded", function () {
    const products = document.querySelectorAll(".card");


// Function to update total price
    function updateTotalPrice() {
        let totalPrice = 0;
        products.forEach(function (prd) {
            const quantity = parseInt(prd.querySelector(".quantity").textContent);
            const unitPrice = parseInt(prd.querySelector(".unit-price").textContent.replace("$", ""));
            totalPrice += quantity * unitPrice;
        });
        document.querySelector(".total").textContent = `$${totalPrice}`;
    }


// Fnction for increasing quantity
    function quantityfunc(btnClass, increment) {
        products.forEach(function (prd) {
            const quantityElement = prd.querySelector(".quantity");
            const btn = prd.querySelector(btnClass);
            btn.addEventListener("click", function () {
                let quantity = parseInt(quantityElement.textContent);
                if (increment || (quantity > 0 && !increment)) {
                    quantityElement.textContent = increment ? quantity + 1 : quantity - 1;
                    updateTotalPrice();
                }
            });
        });
    }
    quantityfunc(".fa-plus-circle", true);
    quantityfunc(".fa-minus-circle", false);

  
// Event-listener for deleting items from cart
    products.forEach(function (prd) {
        const deleteBtn = prd.querySelector(".fa-trash-alt");
        deleteBtn.addEventListener("click", function () {
            const quantityElement = prd.querySelector(".quantity");
            quantityElement.textContent = "0";
            updateTotalPrice();
        });
    });


// Event listener for liking products
    products.forEach(function (prd) {
        const likeBtn = prd.querySelector(".fa-heart");
        likeBtn.addEventListener("click", function () {
            likeBtn.classList.toggle("liked");
        });
    });
});
