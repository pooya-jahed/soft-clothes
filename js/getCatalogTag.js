import data from "../products.json" assert { type: "json" };
function getSizes() {
  const s = data.map((element) => {
    return element.sizes;
  });
  let mySet = s.flat();
  mySet = new Set(s.flat());
  let b = Array(...mySet);
  b = b.sort();
  b = b.sort((a, b) => a - b);
  b = b.reverse();
  console.log(b);
  return b;
}
getSizes();
function createSizeTag() {
  getSizes().forEach((tag) => {
    // console.log(tag);
    const tagSizesContainer = document.getElementById("tag-sizes-container");
    let tagContainer = document.createElement("div");
    let tagStructure = `<input type="checkbox" class="btn-check" id="${tag}-check" autocomplete="off"><label class="btn bg-light-subtle " for="${tag}-check">${tag}</label>
    </label>`;
    tagContainer.innerHTML = tagStructure;
    tagContainer.classList.add(
      "form-check",
      "form-check-inline",
      "form-check-size",
      "p-1",
      "mx-1"
    );
    tagSizesContainer.appendChild(tagContainer);
  });
}
createSizeTag();
