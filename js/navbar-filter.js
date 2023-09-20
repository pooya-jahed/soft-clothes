import data from "../products.json" assert { type: "json" };
console.log(data);
export default function filterSearch() {
  let product = data.map((item) => item.type);
  console.log(product);
  const searchInput = document.getElementById("search-input");

  searchInput.addEventListener("keyup", function (e) {
    let regex = /[a-z]/i;
    let keyPress = e.key;
    let search = "";
    console.log(keyPress);
    console.log(regex.test(keyPress));
    if (e.code === "Space" || regex.test(keyPress) === true) {
      let search = searchInput.value.toLowerCase();
      let result = product.filter((item) => {
        item = item.toLowerCase();
        item.includes(search) ? console.log(item) : false;
      });
    } else {
      alert("wrong");
      searchInput.value = null;
    }
  });
}
filterSearch();
