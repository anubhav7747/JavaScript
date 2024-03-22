# Projects related to DOM

## project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
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

<br>

## project 2

```javascript
const formEl = document.querySelector("form");

// formEl.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const height = parseInt(document.querySelector("#height").value);
//   // console.log(height.value);
// //   console.log(height);
//   const weight = parseInt(document.querySelector("#weight").value);
//   // console.log(weight.value);
// //   console.log(weight);
//   const result = document.querySelector("#result");
//   result.innerHTML = weight / (height * height);
// });


// hitesh sir method
formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;
  }
});
```

<br>

## project 3

```javascript
const timeEl = document.querySelector("#time");

setInterval(() => {
  let date = new Date();
  timeEl.innerHTML = date.toLocaleTimeString();
}, 1000);
```