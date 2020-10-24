window.addEventListener("load", (event) => {
  let incrementButton = document.getElementById("increment");
  let countDiv = document.getElementById("count");

  let counter = new Counter(countDiv, incrementButton, Client())
  counter.render()
})
