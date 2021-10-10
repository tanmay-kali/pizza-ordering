import axios from "axios";
import Noty from "noty";
let addToCart = document.querySelectorAll(".add-to-cart");
let cartCounter = document.querySelector("#cartCounter");
function updateCart(pizza) {
  axios
    .post("/update-cart", pizza)
    .then((res) => {
      console.log(res);
      cartCounter.innerHTML = res.data.totalQty;
      new Noty({
        type: "success",
        text: "Item Added to Cart",
        timeout: 1000,
        progressBar: false,
      }).show();
    })
    .catch((err) => {
      new Noty({
        type: "error",
        text: "Something Went Wrong",
        timeout: 1000,
        progressBar: false,
      }).show();
    });
}

addToCart.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let pizza = JSON.parse(btn.dataset.pizza);
    updateCart(pizza);
  });
});
