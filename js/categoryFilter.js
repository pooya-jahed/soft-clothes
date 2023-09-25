import data from "../products.json" assert { type: "json" };
console.log(data);

let product = data.map((item) => item);
function createProductCard() {
  const productContainer = document.getElementById("product-container");

  product.forEach((element) => {
    console.log(element.title);
    let card = document.createElement("div");
    const content = `<div class="product-cart-header ">
      <div  class="product-cart-size product-cart-image rounded-2 rounded-3 position-relative">
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
      <p class="product-cart-footer--type text-muted  mb-0 mt-3">${
        element.type
      }</p>
      <h5 class="product-cart-footer--title ">${element.title}</h5>
      ${
        element.off === "" || 0
          ? `<p class="product-cart-footer--offPrice  d-inline-block  h5 text-start">${element.price}$</p>`
          : `<s class="product-cart-footer--price text-muted d-inline-block h5 ">${
              element.price
            }$</s><p class="product-cart-footer--offPrice  d-inline-block  h5 ps-2">${(
              element.price -
              (Number(element.price) / 100) * Number(element.off)
            ).toFixed(2)}</p>`
      }
      
    </div>`;
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
      console.log(cardImage);
      cardImage.addEventListener("mouseenter", (item) => {
        item.target.style = `background-image:url("../assets/img/product-img/product-(${item.id})/${item.catalog}-2.jpg")`;
      });
      cardImage.addEventListener("mouseleave", (item) => {
        item.target.style = `background-image:url("../assets/img/product-img/product-(${item.id})/${item.catalog}-1.jpg")`;
      });
    });
  });
}
createProductCard();
