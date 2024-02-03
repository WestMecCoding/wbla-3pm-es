# Documentation for Myles' Contribution

## Quick Summary

We were tasking to create a website for a brand called ELEVATE. They are focused around providing services and products to improve a person's lifestyle mentally and physically.

Below are some of my contributions.



## The Navbar

```html
    <nav class="navbar bg-dark navbar-expand-lg text-center" data-bs-theme="dark">
      <div class="container-fluid">
        <div class="logo-div">
          <span class="navbar-brand"
            ><img
              id="logoimg"
              src="./images/logo.png"
              alt="elevate logo"
              height="75px"
              width="75px"
          /></span>
          <p class="d-inline-block mt-4 fs-3">ELEVATE</p>
        </div>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

            <div
              class="collapse navbar-collapse border-0 bg-dark"
              id="navbarSupportedContent"
            >
              <div class="navbar-nav bg-dark m-auto">
                <a href="index.html" class="nav-link me-5" aria-current="page"
                  >Home</a
                >
                <a href="about_index.html" class="nav-link mx-5">About</a>
                <a href="contact.html" class="nav-link mx-5">Contact</a>
                <a href="login.html" id="login-button" class="nav-link mx-5"
                  ><span id="loginNav">Login/Register</span></a
                >

            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle bg-dark mt-2"
                id="user-dropdown"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                username should be here
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" id="cart-button" href="#">Cart</a>
                </li>
                <li>
                  <a class="dropdown-item" id="changeAccount" href="#"
                    >Change Accounts</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
```

I developed the entire navbar using Bootstrap.

It has a dark background with the brand's logo and name, there is a few links that go to the other pages, as well as a dropdown that appears when you are signed in.
    
Unfortunately, you are unable to literally log out as we couldn't figure out how to make that happen with the methods we used.

When you click the dropdown you will be able to go back to the login page to switch accounts, or go to the cart page to see what you've added to it.

If you were to go on the webpage on a device with a smaller resolution the links would disappear and a button would appear allowing you to click it for a dropdown with the links there.




## Dropdown Functionality

Bootstrap has built in functionality for the dropdown, so I did not have to do much for it.

```js
const userDropdown = document.getElementById("user-dropdown");
const loginButton = document.getElementById("login-button");
const dropdown = document.querySelector(".dropdown");
const cartButton = document.getElementById("cart-button");
const changeAccount = document.getElementById("changeAccount");

if (localStorage.getItem("username")) {
  userDropdown.textContent = localStorage.getItem("username");
  loginButton.style.display = "none";
  dropdown.style.display = "block";
}
```

This allows the dropdown text on the navbar to be set to the username of the account that the user has logged in with.



## The Product Columns

```html
    <div class="row justify-content-between mt-2">
        <div class="col col-xl-2 w-15 p-0">
          <img
            src="./images/kettlebellAI.jfif"
            alt="kettlebell"
            height="100%"
            width="100%"
            title=" 10 Kettle Bells, this set of kettle bells weigh from 5lbs to 50lbs. ($75)"
          />
        </div>
        <div class="col col-xl-2 w-15 p-0">
          <img
            src="images/jumpropeAI.jfif"
            alt="jumprope"
            height="100%"
            width="100%"
            title="Jump Rope, highly resistant and durable so it won't break when you step on it. ($10)"
          />
        </div>

        <div class="w-100 d-lg-none"></div>

        <div class="col col-xl-2 w-15 p-0">
          <img
            src="images/proteinjarAI.jfif"
            alt="protein"
            height="100%"
            width="100%"
            title="Protein powder in a jar, use this before workout to build muscle. (12$)"
          />
        </div>
        <div class="col col-xl-2 w-15 p-0">
          <img
            src="images/DumbellsAI.jfif"
            alt="dumbells"
            height="100%"
            width="100%"
            title="Adjustable Dumbells, can go from 5lbs to 50lbs. ($100) "
          />
        </div>
      </div>

      <div class="row justify-content-between mt-3">
        <div class="col col-xl-2 w-15 p-0">
          <img
            src="images/runninshoesAI.jfif"
            alt="shoes"
            height="100%"
            width="100%"
            title="Running shoes that are durable so you can run for miles. ($40)"
          />
        </div>
        <div class="col col-xl-2 w-15 p-0">
          <img
            src="images/punchingbagAI.jfif"
            alt="punching bag"
            height="100%"
            width="100%"
            title="Punching Bag, 500lbs, chain that can hold up even
          with intense force. ($90)"
          />
        </div>

        <div class="w-100 d-lg-none"></div>

        <div class="col col-xl-2 w-15 p-0">
          <img
            src="images/standingDesk.png"
            alt="standing desk"
            height="100%"
            width="100%"
            title="Standing Desk for all human heights. ($100)"
          />
        </div>
        <div class="col col-xl-2 w-15 p-0">
          <img
            src="images/hula_hoop.png"
            alt="hula hoop"
            height="100%"
            width="100%"
            title="Hula Hoop stable so it doesn't fall apart. ($10)"
          />
        </div>
      </div>

      <div class="row justify-content-between mt-3">
        <div class="col col-xl-2 w-15 p-0">
          <img
            src="images/bookAI.jfif"
            alt="diet book"
            height="100%"
            width="100%"
            title="Diet Book with the Knowledge of many health professionals. ($20)"
          />
        </div>
        <div class="col col-xl-2 w-15 p-0">
          <img
            src="images/doorway_pull-up_bar.png"
            alt="pull up bar"
            height="100%"
            width="100%"
            title="Pull Up Bar, extremely durable and will stay attached to the wall. ($45)"
          />
        </div>

        <div class="w-100 d-lg-none"></div>

        <div class="col col-xl-2 w-15 p-0">
          <img
            src="images/hyreoflaskAI.jfif"
            alt="flask"
            height="100%"
            width="100%"
            title="Hydro Flask, hydrophobic and leakage free. ($15)"
          />
        </div>
        <div class="col col-xl-2 w-15 p-0">
          <img
            src="images/gymbagAI.jfif"
            alt="gym bag"
            height="100%"
            width="100%"
            title="Gym bag, carries all of the things you need at the gym. ($50)"
          />
        </div>
      </div>

      <div class="row justify-content-between mt-3">
        <div class="col col-xl-2 w-15 p-0">
          <img
            src="images/yogaballAI.jfif"
            alt="yoga ball"
            height="100%"
            width="100%"
            title="Yoga ball that can withstand 300lbs. ($10)"
          />
        </div>
        <div class="col col-xl-2 w-15 p-0">
          <img
            src="images/ResistenceBandsAI.jfif"
            alt="resistance bands"
            height="100%"
            width="100%"
            title="Resistance bands, made with highly resistant fabric to fit any scenario. ($15)"
          />
        </div>

        <div class="w-100 d-lg-none"></div>

        <div class="col col-xl-2 w-15 p-0">
          <img
            src="images/barbell glovesAI.jfif"
            alt="bar bell gloves"
            height="100%"
            width="100%"
            title="Bar bell gloves, breathable and adjustable so it can fit all sizes. ($20)"
          />
        </div>
        <div class="col col-xl-2 w-15 p-0">
          <img
            src="images/exercisematAI.jfif"
            alt="exercise mat"
            height="100%"
            width="100%"
            title="Exercise mat, highly resistant so it lasts long making it fit all types of exercises. ($15) "
          />
        </div>
    </div>
```

I developed the layout of these product columns using Bootstrap.

There are a total of sixteen individual cells each with an image of a product inside.

On the layout there's four rows and each have four cells inside spaced evenly apart. They are positioned across the page horizontally.

On a smaller resolution they will rearrange into four square blocks with four cells fitted inside.





## Project Contribution Summary

We all worked a little bit on everything, but our main individual contributions are as follows:

### Myles

- HTML Structure and CSS styling on the Home page.
- Overall layout for the site.



### Trevor

- HTML Structure and CSS styling on the Login page.
- Functionality for the Login page.



### Brock

- All of the writing for the summary of the brand on the Home page.
- All of the writing for the About page of the site.



### Isaac

- Functionality of adding items to Cart.
- Functionality of items in cart appearing on the Cart page.



### Santiago

- Worked with Daniel to provide images of the products using an AI generator.
- Made most of the content on the Contact page.



### Daniel

- Worked with Santiago to provide images of the products using an AI generator.