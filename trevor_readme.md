# Documentation for Trevor's Contribution

> My contribution to the project was mainly the login page, including the HTML, CSS and Javascript that go into making the page, with some changes and adjustments on the other parts of the project, but mainly the login page. I was also responsible of making sure it was implemented and worked on the other pages, such as the about page, contact page and cart page. Making sure the user can change accounts anytime they would like to on any page. Once signed in you will see the new dropdown which you can change accounts or go to the cart page after adding items to your cart. I would help my team whenever they were stuck with something or needed some help deciding something. 

``` js

function login() {
  var usernameInput = document.getElementById("username");
  var passwordInput = document.getElementById("password");

  var username = usernameInput.value;
  var password = passwordInput.value;

  // Check if the provided username and password match
  if (checkCredentials(username, password)) {
    window.location.href = "index.html";
    localStorage.setItem("username", username)
  } else {
    alert("Incorrect Password or Username, Please try again.");
  }
}

 
```
> This block of code is intended to check against the inputted username and password on the login page, if the username and password are in the local storage then it will go back to the orginal main page of the website. If the username and password are not in the local storage, then it will pop up an alert that says to the user they have an incorrect username or password and they must try again.

``` js

function createAccount() {
  var newUsernameInput = document.getElementById("new-username");
  var newPasswordInput = document.getElementById("new-password");

  var newUsername = newUsernameInput.value;
  var newPassword = newPasswordInput.value;

  // Check if the username already exists
  if (localStorage.getItem(newUsername)) {
    alert("Username already exists. Please choose a different one.");
  } else {
    // Save the new account in localStorage
    localStorage.setItem(newUsername, newPassword);
    localStorage.setItem("username", newUsername);
    alert("Account created successfully! You can now log in.");
  }
}
```
> This function takes in the inputted username and password on the "Create Account" page and puts them into the localStorage, it defines the new username and password and takes the value from them and gives them a dedicated variable. The first part of the if statement checks to see if this new username already exists in the localStorage, if so it will propmt the user to use a different username as that one is currently taken. If the username is not taken, it will take the new username and password and input them into the localStorage so that they can now use these credentials on the login page.

 