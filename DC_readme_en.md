# **Documentation of Daniel's Contribution**
- ### **By Daniel**

My contribution to this project was mainly the A.I. images `(I also provided the testing email for the contact page, but that's a different topic.)`, alongside Santiago Hernández. I used Microsoft Copilot to create them, which took about a day and a half. This wasn't as much of an issue, because the A.I. is doing all the work. Though you may have seen by now, here are a few of them.

<img src="./images/proteinjarAI.jfif" width="125px">
<img src="./images/hyreoflaskAI.jfif" width="125px">
<img src="./images/runninshoesAI.jfif" width="125px">

## Block 1

```html
<img src="images/proteinjarAI.jfif" alt="protein" height="100%" width="100%" title="Protein powder in a jar, use this before workout to build muscle. (12$)"/>
<img src="images/hyreoflaskAI.jfif" alt="flask" height="100%" width="100%" title="Hydro Flask, hydrophobic and leakage free. ($15)"/>
<img src="images/runninshoesAI.jfif" alt="shoes" height="100%" width="100%" title="Running shoes that are durable so you can run for miles. ($40)"/>
```
## Explanation

Basically just plugging the images in, simple as that.

## Block 2
Moving into a different topic.. I've also popped in to assist Santiago in the contact page in a thing or two. I also helped Isaac with the remove-from-cart function.

>```js
>   switch(confirm(yesOrNo)) {
>       case true:
>        div.remove();
>        totalPriceText.textContent = "Total Price $" + (totalPrice - image.price);
>        break;
>       case false:
>        break;
>       default:
>        break;
>   };
>```
## Explanation

- Isaac and I eventually found out the `confirm()` function exists, so we used it to help us with the remove-from-cart. What it does is that it displays a prompt. This prompt asks whatever is imputed inside the `().` Then, it'll ask a choice of whether `ok,` or `cancel;` if `ok` is selected, it will remove the singular index from the total; if `cancel` is selected, nothing will happen.

## Block 3

> ```js
>    const image = product.querySelector("img");
>    const productData = {
>      src: image.getAttribute("src"),
>      height: image.getAttribute("height"),
>      width: image.getAttribute("width"),
>      "price": currentPrice,
>   };
>```

## Explanation

- Once again, Isaac and I worked on this. and what it does is assign a price from the `items` array, which contains the prices, and sets it to whatever it should be.