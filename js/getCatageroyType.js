import data from "../products.json" assert { type: "json" };
function getTypes() {
  const type = data.map((element) => {
    return element.type;
  });
  let clothType = type.flat();
  console.log(clothType);
  let clothList = clothType.map((item) => item.toUpperCase());
  clothList = clothList.sort();
  clothType = new Set(clothType);
  let TypeCloth = Array(...clothType);
  TypeCloth = TypeCloth.map((item) => item.toUpperCase());
  TypeCloth = TypeCloth.sort();

  return TypeCloth;
}
// console.log(getTypes());
//
//
//
//
//
//   return colorsList;
// }
// getColors();
// // function createColorTag() {
// //   getColors().forEach((color) => {
// //     console.log(color);
// //     const tagSizesContainer = document.getElementById("color-tags-container");
// //     let colorContainer = document.createElement("div");
// //     let colorStructure = `
// //     <input class="form-check-input rounded-4 ms-1 ${color.toLocaleLowerCase()}" id="${color}-color" type="checkbox" ; style='height: 2rem;
// //       width: 2rem;'">
// //     <label class="form-check-label text-body ps-3 py-2" for="${color}-color">
// //       ${color}
// //     </label>
// //   `;
// //     colorContainer.innerHTML = colorStructure;
// //     colorContainer.classList.add(
// //       "form-check",
// //       "form-check-color",
// //       "mb-3",
// //       "d-flex"
// //     );
// //     tagSizesContainer.appendChild(colorContainer);
// //   });
// // }
// // const colorTab = document.getElementById("collapseFour");
// // colorTab.addEventListener("click", createColorTag());
