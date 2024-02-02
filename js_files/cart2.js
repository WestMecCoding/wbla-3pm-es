const productData = JSON.parse(sessionStorage.getItem("globalProducts"));
let totalPrice = JSON.parse(sessionStorage.getItem("totalCartPrice"));
console.log(productData);

const containerTwo = document.getElementById("container-two");

const totalPriceTextContainer = document.createElement("div");
totalPriceTextContainer.classList.add("col");
totalPriceTextContainer.classList.add("goob");
containerTwo.appendChild(totalPriceTextContainer);

const totalPriceText = document.createElement("p");
totalPriceText.classList.add("price-text");
totalPriceText.textContent = "Total Price $" + totalPrice;
totalPriceTextContainer.appendChild(totalPriceText);

productData.forEach((product) => {
  const div = document.createElement("div");

  div.classList.add("col");
  div.classList.add("goober");

  const image = document.createElement("img");
  image.classList.add("product-image");
  image.src = product.src;
  image.height = product.height;
  image.width = product.width;
  image.price = product.price;

  div.appendChild(image);

  const priceText = document.createElement("p");
  priceText.classList.add("price-text");
  if (image.price === null) {
    priceText.textContent = "Item Price: $0";
  } else if (image.price !== null) {
    priceText.textContent = "Item Price: $" + image.price;
  }
  div.appendChild(priceText);

  console.log(div);
  containerTwo.appendChild(div);

  //--------------------------------------------------------
  div.addEventListener("click", function () {
    let yesOrNo = "Remove this item from your checkout list?";

    // World's best siwtch() case.
    switch (confirm(yesOrNo)) {
      case true:
        div.remove();
        totalPriceText.textContent =
          "Total Price $" + (totalPrice - image.price);
        totalPrice = totalPrice - image.price;
        break;
      case false:
        break;
      default:
        break;
    }
  });
});

const checkOutDiv = document.createElement("div");
checkOutDiv.classList.add("check-out-div");
document.body.appendChild(checkOutDiv);
const checkOutButton = document.createElement("button");
checkOutButton.classList.add("check-out-button");
checkOutButton.textContent = "Check Out";
checkOutDiv.appendChild(checkOutButton);

checkOutButton.addEventListener("click", function () {
  alert(`Your total is $${totalPrice}. Thank you for shopping with us!`);
  containerTwo.remove();
});

// This is a comment!
