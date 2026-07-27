// const btn = document.getElementsByTagName("button");
// const btn = document.getElementsByClassName("clickBtn");

// const btn = document.getElementById("btn")
const btnClick = () => {
  alert("Button clicked");
};

const btn = document.querySelector(".clickBtn");

btn.addEventListener("click", btnClick);
