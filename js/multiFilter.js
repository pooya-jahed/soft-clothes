let productContainer = document.querySelector("#product-container");
const colorContainer = document.querySelector("#post-color");
const TypesContainer = document.querySelector("#post-types");
const sizesContainer = document.querySelector("#post-sizes");
const BrandsContainer = document.querySelector("#post-Brand");
const seasonContainer = document.querySelector("#post-season");
const datesContainer = document.querySelector("#post-dates");
const modelsContainer = document.querySelector("#post-models");
const genderContainer = document.querySelector("#post-gender");
const priceContainer = document.querySelector("#post-price");
const statusContainer = document.querySelector("#post-status");
const rateContainer = document.querySelector("#post-rate");
const offsContainer = document.querySelector("#post-off");

const postCount = document.querySelector("#post-count");
const noResults = document.querySelector("#no-results");

let postsData = "";
let currentFilters = {
  brand: [],
  colors: [],
  gender: [],
  type: [],
  sizes: [],
  season: [],
};

fetch("../products.json").then(async (response) => {
  postsData = await response.json();
  console.log(postsData);
  postsData.map((post) => post);
  postsData.map((post) => createPost(post));
  postCount.innerText = postsData.length;
  let brandsData = [
    ...new Set(
      postsData
        .map((post) => post.brand)
        .reduce((acc, curVal) => acc.concat(curVal), [])
    ),
  ];
  let genderData = [
    ...new Set(
      postsData
        .map((post) => post.gender)
        .reduce((acc, curVal) => acc.concat(curVal), [])
    ),
  ];
  let colorData = [
    ...new Set(
      postsData
        .map((post) => post.colors)
        .reduce((acc, curVal) => acc.concat(curVal), [])
    ),
  ];
  let typesData = [
    ...new Set(
      postsData
        .map((post) => post.type)
        .reduce((acc, curVal) => acc.concat(curVal), [])
    ),
  ];
  let sizesData = [
    ...new Set(
      postsData
        .map((post) => post.sizes)
        .reduce((acc, curVal) => acc.concat(curVal), [])
    ),
  ];
  let seasonData = [
    ...new Set(
      postsData
        .map((post) => post.season)
        .reduce((acc, curVal) => acc.concat(curVal), [])
    ),
  ];
  brandsData.map((item) => createFilter("brand", item, BrandsContainer));
  genderData.map((item) => createFilter("gender", item, genderContainer));
  colorData.map((item) => createFilter("colors", item, colorContainer));
  typesData.map((item) => createFilter("type", item, TypesContainer));
  sizesData.map((item) => createFilter("sizes", item, sizesContainer));
  seasonData.map((item) => createFilter("season", item, seasonContainer));

  console.log(brandsData);
});
const createPost = (postData) => {
  const {
    id,
    title,
    brand,
    model,
    price,
    sizes,
    colors,
    status,
    season,
    data,
    type,
    off,
  } = postData;
  console.log(typeof postData.imageUrl.catalog[0]);
  const post = document.createElement("div");
  post.classList.add(
    "post",
    "product-cart",
    `product-cart${id + 1}`,
    "col-12",
    "col-lg-6",
    "col-xl-4",
    "mb-4",
    "mb-md-6",
    "pt-lg-3",
    "item",
    `item${id + 1}`
  );

  post.innerHTML = `
  <div class="product-cart-header ">
  <div class="product-cart-size product-cart-image rounded-2 rounded-3 position-relative"
  style="background-image: url('../assets/img/product-img/product-(${id})/${
    postData.imageUrl.catalog[0]
  }.jpg');">
  <div class="action-section position-absolute  h-25 w-100" type=" button">
  <i id="liveToastBtn"
      class=" btn rounded-5 product-cart-image--add--shop bi bi-cart text-black-50 bg-white ">
  </i>
    <i id="liveToastFavoriteBtn" class=" btn rounded-5 product-cart-image--add--favorite bi bi-heart text-black-50
  bg-white "></i>
</div></div>
</div>
<div class="product-cart-footer z-index-2 mt-2 text-lg-start text-center ">
    <a class="text-decoration-none " href="${title}.html"></a>
    <p class="product-cart-footer--type text-muted  mb-0 mt-3">${type}</p>
    <h5 class="product-cart-footer--title ">${title}</h5>
    <p class="product-cart-footer--offPrice  d-inline-block  h5 text-start">${
      off === "" || 0
        ? `<p class="product-cart-footer--offPrice  d-inline-block  h5 text-start">${price}$</p>`
        : `<s class="product-cart-footer--price text-muted d-inline-block h5 ">${price}$</s><p class="product-cart-footer--offPrice  d-inline-block  h5 ps-2">${(
            price -
            (Number(price) / 100) * Number(off)
          ).toFixed(2)}</p>`
    }</p>
    <div class="post-tags ">
    ${`<span class="post-tag">${brand}</span>`}
  </div>
  <div class="post-footer">
  <span class="post-level">${brand}</span>
</div>
</div>
</div>
</div>
  `;

  productContainer.append(post);
};

const createFilter = (key, param, container) => {
  const filterButton = document.createElement("button");
  filterButton.className = "filter-button";
  filterButton.innerText = param;
  filterButton.setAttribute("data-state", "inactive");
  filterButton.addEventListener("click", (e) =>
    handleButtonClick(e, key, param, container)
  );

  container.append(filterButton);
};
const handleButtonClick = (e, key, param, container) => {
  const button = e.target;
  const buttonState = button.getAttribute("data-state");
  if (buttonState == "inactive") {
    button.classList.add("is-active");
    button.setAttribute("data-state", "active");
    currentFilters[key].push(param);
    handleFilterPosts(currentFilters);
  } else {
    button.classList.remove("is-active");
    button.setAttribute("data-state", "inactive");
    currentFilters[key] = currentFilters[key].filter((item) => item !== param);
    handleFilterPosts(currentFilters);
  }
};

const handleFilterPosts = (filters) => {
  let filteredPosts = [...postsData];
  console.log(filteredPosts);
  let filterKeys = Object.keys(filters);

  filterKeys.forEach((key) => {
    let currentKey = filters[key];
    if (currentKey.length <= 0) {
      return;
    }

    filteredPosts = filteredPosts.filter((post) => {
      let currentValue = post[key];
      console.log(currentValue);
      return Array.isArray(currentValue)
        ? currentValue.some((val) => currentKey.includes(val))
        : currentKey.includes(currentValue);
      console.log(currentValue);
    });
    console.log(postsData);
  });

  //   if (filters.categories.length > 0) {
  //     filteredPosts = filteredPosts.filter((post) =>
  //       post.categories.some((category) => {
  //         return filters.categories.includes(category);
  //       })
  //     );

  //     // filteredPosts = filteredPosts.filter((post) =>
  //     //   filters.categories.every((filter) => {
  //     //     return post.categories.includes(filter);
  //     //   })
  //     // );
  //   }

  //   if (filters.level.length > 0) {
  //     filteredPosts = filteredPosts.filter((post) =>
  //       filters.level.includes(post.level)
  //     );
  //   }

  postCount.innerText = filteredPosts.length;
  if (filteredPosts.length == 0) {
    noResults.innerText = "Sorry, we couldn't find any results.";
  } else {
    noResults.innerText = "";
  }

  productContainer.innerHTML = "";
  filteredPosts.map((post) => createPost(post));
};
