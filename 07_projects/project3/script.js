const timeEl = document.querySelector("#time");

setInterval(() => {
  let date = new Date();
  timeEl.innerHTML = date.toLocaleTimeString();
}, 1000);
