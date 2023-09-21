// _____________________________________________
import data from "../products.json" assert { type: "json" };
// console.log(data);
let product = data.map((item) => item);
const searchInput = document.getElementById("search-input");
export default function searchHandler() {
  console.log("run");
  let productName = data.map((item) => item.title);
  // console.log(productName);

  searchInput.addEventListener("keyup", function (e) {
    let regex = /[a-z]/i;
    let keyPress = e.key;
    let search = "";
    let searchResult = [];
    console.log(keyPress);
    console.log(regex.test(keyPress));
    if (e.code === "Space" || regex.test(keyPress) === true) {
      search = searchInput.value.toLowerCase().trim();
      let result = productName.filter((item) => {
        item = item.toLowerCase();
        item.includes(search) ? searchResult.push(item) : false;
        console.log(search);
        console.log(searchResult);
      });
    } else {
      alert("wrong");
      searchInput.value = null;
    }
  });
}
setTimeout(function () {
  searchInput.addEventListener("click", searchHandler());
}, 2000);

// -----------------------------------------
