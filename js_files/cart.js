const globalProducts = [];

const currentItemPrices = [];

const items = [
  ["kb", 75], // Kettlebell
  ["jr", 10], // Jump Rope
  ["pp", 12], // Protein Powder
  ["db", 100], // Dumbbell
  ["rs", 40], // Running Shoes
  ["pb", 90], // Punching Bag
  ["sud", 100], // Stand-up Desk
  ["hh", 10], // Hula Hoop
  ["hb", 35], // Health Book
  ["pub", 45], // Pull-up bar
  ["hf", 15], // Hydroflask
  ["gb", 50], // Gym Bag
  ["yb", 10], // Yoga Ball
  ["rb", 15], // Resistance Bands
  ["bbg", 20], // Bar Bell Gloves
  ["ym", 15], // Yoga Mat
];

let totalCartPrice = 0;
let currentPrice = 0;

const products = document.querySelectorAll(".col-xl-2");

const totalCartDeductableText = document.getElementById(
  "total-cart-deductable"
);

products.forEach((product, index) => {
  const addToCartText = document.createElement("p");
  addToCartText.textContent = "Add To Cart";
  addToCartText.style.textAlign = "center";
  addToCartText.style.fontSize = "1rem";
  addToCartText.style.color = "white";
  addToCartText.style.backgroundColor = "#26272b";
  addToCartText.style.border = "2px solid white";
  addToCartText.style.marginTop = "-38px";
  addToCartText.style.padding = "5px";
  addToCartText.style.position = "absolute";
  product.appendChild(addToCartText);

  product.addEventListener("click", () => {
    totalCartPrice += items[index][1];
    currentPrice = items[index][1];
    sessionStorage.setItem("totalCartPrice", JSON.stringify(totalCartPrice));
    currentItemPrices.push((currentPrice = items[index][1]));
    sessionStorage.setItem(
      "currentItemPrices",
      JSON.stringify(currentItemPrices)
    );
    if (totalCartPrice === 0) {
      totalCartDeductableText.textContent = "Total Cart Deductible: $0";
    } else if (totalCartPrice > 0) {
      totalCartDeductableText.textContent =
        "Total Cart Deductible: $" + totalCartPrice;
    }

    const image = product.querySelector("img");
    const productData = {
      src: image.getAttribute("src"),
      height: image.getAttribute("height"),
      width: image.getAttribute("width"),
      price: currentPrice,
    };
    globalProducts.push(productData);
    console.log(globalProducts);
    sessionStorage.setItem("globalProducts", JSON.stringify(globalProducts));
  });
});

// This is a cool comment.
