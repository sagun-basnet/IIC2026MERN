// const btn = document.getElementsByTagName("button");
// const btn = document.getElementsByClassName("clickBtn");

// const btn = document.getElementById("btn")
// const btnClick = () => {
//   alert("Button clicked");
// };

const btn1 = document.querySelector(".clickBtn1");
const btn2 = document.querySelector(".clickBtn2");
const div = document.querySelector(".container");

btn1.addEventListener("click", () => {
  div.style.marginLeft = "30rem";
});
// btn2.addEventListener("click", () => {
//   div.style.display = "none";
// });
// console.log(btn1.innerHTML);
btn1.innerHTML = "Hello";
