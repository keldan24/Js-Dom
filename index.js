document.addEventListener("DOMContentLoaded", function () {
    const products = document.querySelectorAll(".card");
  
    function updateTotalPrice() {
      let totalPrice = 0;
      products.forEach((product) => {
        const quantity = parseInt(product.querySelector(".quantity").textContent);
        const unitPrice = parseInt(
          product.querySelector(".unit-price").textContent.replace("$", "")
        );
        totalPrice += quantity * unitPrice;
      });
      document.querySelector(".total").textContent = totalPrice + " $";
    }
  
    // Event listener for increasing quantity
    products.forEach((product) => {
      const plusBtn = product.querySelector(".fa-plus-circle");
      plusBtn.addEventListener("click", function () {
        const quantityElement = product.querySelector(".quantity");
        let quantity = parseInt(quantityElement.textContent);
        quantityElement.textContent = quantity + 1;
        updateTotalPrice();
      });
    });
  
    // Event listener for decreasing quantity
    products.forEach((product) => {
      const minusBtn = product.querySelector(".fa-minus-circle");
      minusBtn.addEventListener("click", function () {
        const quantityElement = product.querySelector(".quantity");
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 0) {
          quantityElement.textContent = quantity - 1;
          updateTotalPrice();
        }
      });
    });
  
    // Event listener for deleting items
    products.forEach((product) => {
      const deleteBtn = product.querySelector(".fa-trash-alt");
      deleteBtn.addEventListener("click", function () {
        product.remove();
        updateTotalPrice();
      });
    });
  
    // Event listener for liking items
    products.forEach((product) => {
      const likeBtn = product.querySelector(".fa-heart");
      likeBtn.addEventListener("click", function () {
        likeBtn.classList.toggle("liked");
      });
    });
  });
  