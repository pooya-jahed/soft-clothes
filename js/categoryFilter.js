import data from "../products.json" assert { type: "json" };
console.log(data);

let product = data.map((item) => item);
function createProductCard() {
  const productContainer = document.getElementById("product-container");
  const content = `<div class="product-cart-header ">
      <div class="product-cart-size product-cart-image rounded-2 rounded-3 position-relative">
        <div class="action-section position-absolute  h-25 w-100" type=" button">
          <i id="liveToastBtn"
            class=" btn rounded-5 product-cart-image--add--shop bi bi-cart text-black-50 bg-white ">
          </i>
          <i id="liveToastFavoriteBtn" class=" btn rounded-5 product-cart-image--add--favorite bi bi-heart text-black-50
          bg-white "></i>
        </div>
      </div>
    </div>
    <div class="product-cart-footer z-index-2 mt-2 text-lg-start text-center ">
      <a class="text-decoration-none" href="detail-2.html"></a>
      <p class="product-cart-footer--type text-muted  mb-0 mt-3">Dress</p>
      <h4 class="product-cart-footer--title ">Smocked bodies Dress</h4>
      <s class="product-cart-footer--price text-muted d-inline-block h5 ">$49.90</s>
      <p class="product-cart-footer--offPrice  d-inline-block px-3 h5">
        $39.90
      </p>
    </div>`;

  product.forEach((element) => {
    let card = document.createElement("div");
    card.innerHTML = content;
    card.classList.add(
      "product-cart",
      "col-12",
      "col-lg-6",
      "col-xl-4",
      "mb-4",
      "mb-md-6",
      "pt-lg-3"
    );
    productContainer.appendChild(card);
    let productImage = document.querySelectorAll(".product-cart-image");

    productImage.forEach((cardImage) => {
      cardImage.style = `background-image:url("../assets/img/product-img/product-(1)/bodice-Dress-Smocked-1.jpg")`;
      cardImage.addEventListener("mouseenter", (item) => {
        item.target.style = `background-image:url("../assets/img/product-img/product-(1)/bodice-Dress-Smocked-2.jpg")`;
      });

      cardImage.addEventListener("mouseleave", (item) => {
        item.target.style = `background-image:url("../assets/img/product-img/product-(1)/bodice-Dress-Smocked-1.jpg")`;
      });
    });
  });
}
const allProducts = document.getElementById("check-all");
setInterval(function () {
  if (allProducts.checked) {
    while (
      document.getElementsByClassName("product-cart").length <= product.length
    ) {
      createProductCard();
    }
  }
  if (allProducts.checked === false) {
    document.getElementById("product-container").innerHTML = "";
    if (allProducts.checked) {
      can;
    }
  }
}, 1000);
