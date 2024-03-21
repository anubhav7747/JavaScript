# Projects related to DOM

## project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
console.log("anubhav");

// My Method
// const greyEl = document.getElementById("grey");
// const whiteEl = document.getElementById("white");
// const blueEl = document.getElementById("blue");
// const yellowEl = document.getElementById("yellow");

// greyEl.addEventListener("click", () => {
//   document.body.style.backgroundColor = "gray";
// });

// whiteEl.addEventListener("click", () => {
//   document.body.style.backgroundColor = "white";
// });

// blueEl.addEventListener("click", () => {
//   document.body.style.backgroundColor = "blue";
// });

// yellowEl.addEventListener("click", () => {
//   document.body.style.backgroundColor = "yellow";
// });

// Hitesh Sir Method using if statement. Later I updated it in to switchstatement.
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // using if statement
    // if (e.target.id === "grey") body.style.backgroundColor = e.target.id;
    // if (e.target.id === "white") body.style.backgroundColor = e.target.id;
    // if (e.target.id === "blue") body.style.backgroundColor = e.target.id;
    // if (e.target.id === "yellow") body.style.backgroundColor = e.target.id;

    // using switch statement
    const value = e.target.id;
    switch (value) {
      case "grey":
        body.style.backgroundColor = value;
        break;
      case "white":
        body.style.backgroundColor = value;
        break;
      case "blue":
        body.style.backgroundColor = value;
        break;
      case "yellow":
        body.style.backgroundColor = value;
        break;
      default:
        break;
    }
  });
});
```
