import data from "../products.json" assert { type: "json" };
console.log(data);

let product = data.map((item) => item);

function getProductData() {
  let getCartProductType = document.getElementsByClassName(
    "product-cart-footer--type"
  );
  let productType = product.map((item) => item.type[0]);
  console.log(productType);
  console.log(getCartProductType);
  getCartProductType[0].textContent = productType[0];
  const productHeader = document.querySelector(".product-category");
  if (productHeader.textContent === "All Products") {
    console.log("helllo");
  }
}
