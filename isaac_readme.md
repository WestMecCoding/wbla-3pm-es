# Documentation for Isaac's contribution

## Contribution Summary

> Here's some info about my contribution: I worked initially on making, cropping and removing backgrounds from images that we'd use on the site with gimp. However, after getting a total of 3 images ready for the site, my team members found a much more efficient method of generating images for our website. With the help of an AI image generator, my team members could quickly generate quality images which functioned at multiple resolutions: exactly what the project needed, and it eleviated the need for me to work with images in gimp.
> Afterwards, I was tasked with making a "cart" functionality to our website working heavilly with javaScript. After about 2 weeks of coding in javaScript, I was able to make it so that each item displayed on the home page had a given price, and when clicked on, the items' prices would be added to the total deductible. Then, I would take that data from the home page and transfer it to the cart page. That way the cart page would display the individual items the user bought, make it so that the items could be bought, resetting the cart page of items, and make it so that any items displayed on the page could be removed from the list.

### Code Block 1 Explanation

> Below is the code for the primary feature I implemented within the project. First this block of code specifically retreives the necessary data from whichever one of the individual items the user clicks on.
> The `forEach` loop navigates through each product on the page. The code reffering to addToCartText simply applies an icon to each product on the page that says "add to cart". The event listener is for whenever any of the individual products are clicked on. When clicked, the product's necessary data is cached in sessionStorage so that the data can be transferred across multiple javaScript files: the data being stored within the code is represented by the totalCartPrice, currentItemPrices, and the globalProducts variables.

### Code Block 1

```js
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
```

### Code Block 2 Explanation

> Below is the code for where the sessionStorage variables are sent after being cached in the first cart.js file.
> This block of code goes through the array globalProducts which was cached in sessionStorage and navigates through each product in the list. For each product in the list, an element is appended to the cart.html webpage, which mirrors the product which was purchased on the home page. This allows the code to remember which products the user purchased on the home page, and then list them off on the cart page. This block of code simply takes all the necessary data for each product, then appends it to the cart page.
> The event listener makes it so that whenever a product is clicked on, the switch case navigates through a confirm element. This makes it so that whenever a product is clicked on, a prompt shows up which asks whether or not you'd like to remove the product from the list of purchased items. If you click OK, then the product is removed and that product's price is subtracted from the total cart deductible.

### Code Block 2

```js
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
```

### Code Block 3 Explanation

> This block of code may look much simpler than the other ones, but when in the development process, it was perhaps one of the most challenging pieces of logic to overcome throughout the project. The code creates a checkout button that, when the user presses it, is supposed to clear the cart page of the all the purchased products and charge the user their current total deductible. For the longest time, finding a way to remove every single purchased item on the cart page without removing other necessary elements of the page such as the nav bar to navigate back to the home page was particularly challenging. However, I stumbled on quite the ingenious solution of appending all purchased item elements to a div titled containerTwo instead of the body itself, then removing only containerTwo when the checkout button was pressed. Solving this issue with such a simple solution was an incredibly satisfying discovery, and a fantastic way to cap off my contribution to the code of the project, in my opinion.

### Code Block 3

```js
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
```
