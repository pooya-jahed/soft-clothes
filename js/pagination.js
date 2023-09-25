setTimeout(function () {
  const pageOne = document.querySelector(".page-item-one");
  const Previous = document.querySelector(".Previous");

  let pageOneClass = pageOne.classList;
  pageOneClass = [...pageOneClass];
  pageOneClass = pageOneClass.filter((item) => item === "active");
  if (pageOneClass == "active") {
    Previous.classList.add("disabled");
  }
  let productCartList = document.querySelectorAll(".product-cart");

  if (productCartList.length > 15) {
    let paginationPage = Math.ceil(productCartList.length / 15);
    console.log(paginationPage);
  }
}, 2000);
