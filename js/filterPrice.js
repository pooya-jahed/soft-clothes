import data from "../products.json" assert { type: "json" };
function getPrices() {
  const getPrice = data.map((element) => {
    return element.price;
  });
  let PriceSet = getPrice.flat();
  PriceSet = new Set(PriceSet);
  let PriceList = Array(...PriceSet);

  PriceList = PriceList.sort((a, b) => a - b);
  console.log(PriceList);
  document.querySelector(".lowest-price").placeholder = `${PriceList[0]} $`;
  let highestPrice = PriceList.length;
  console.log(PriceList[highestPrice - 1]);
  document.querySelector(".highest-price").placeholder = `${
    PriceList[highestPrice - 1]
  } $`;
  window.addEventListener("change", function () {
    console.log(document.querySelector(".range-max"));
  });
}
getPrices();
