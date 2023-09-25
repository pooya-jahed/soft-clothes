import data from "../products.json" assert { type: "json" };
function getColors() {
  const colors = data.map((element) => {
    return element.colors;
  });
  let colorSet = colors.flat();
  colorSet = new Set(colorSet);
  let colorsList = Array(...colorSet);
  colorsList = colorsList.map((item) => item.toUpperCase());
  colorsList = colorsList.sort();
  console.log(colorsList);
  return colorsList;
}
getColors();
function createColorTag() {
  getColors().forEach((color) => {
    console.log(color);
    const tagSizesContainer = document.getElementById("color-tags-container");
    let colorContainer = document.createElement("div");
    let colorStructure = `
    <input class="form-check-input rounded-4 ms-1 ${color.toLocaleLowerCase()}" id="${color}-color" type="checkbox" ; style='height: 2rem;
      width: 2rem;'">
    <label class="form-check-label text-body ps-3 py-2" for="${color}-color">
      ${color}
    </label>
  `;
    colorContainer.innerHTML = colorStructure;
    colorContainer.classList.add(
      "form-check",
      "form-check-color",
      "mb-3",
      "d-flex"
    );
    tagSizesContainer.appendChild(colorContainer);
  });
}
createColorTag();
