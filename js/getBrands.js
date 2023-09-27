import data from "../products.json" assert { type: "json" };
function getBrands() {
  const brands = data.map((element) => {
    return element.brand;
  });
  let brandSet = brands.flat();
  brandSet = new Set(brandSet);
  let brandsList = Array(...brandSet);
  brandsList = brandsList.map((item) => item.toUpperCase());

  //   console.log(brandsList);
  return (brandsList = brandsList.sort());
}
getBrands();
function createBrandTag() {
  getBrands().forEach((brandItem) => {
    console.log(brandItem);
    const tagSizesContainer = document.getElementById("brands-tags-container");
    let brandsContainer = document.createElement("div");
    let brandStructure = `<input class="h3 list-inline-item" id="brand-${brandItem}" type="checkbox"
    style="width: 25px;height: 25px;">
  <label
    class="form-check-label  icon-link-hover  text-decoration-underline fw-bold fs-6 ms-2 "
    for="brand-${brandItem}">
    ${brandItem}
  </label>`;
    brandsContainer.innerHTML = brandStructure;
    brandsContainer.classList.add(
      "form-check",
      "mb-3",
      "d-flex",
      "form-check-brands"
    );
    tagSizesContainer.appendChild(brandsContainer);
  });
}
const brandsTab = document.getElementById("collapseFive");
brandsTab.addEventListener("click", createBrandTag());
