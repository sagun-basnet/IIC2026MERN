// const myTimeOut = setTimeout(() => {
//   console.log("From Timeout");
// }, 4000);

// clearTimeout(myTimeOut);

let sec = 0;
let min = 0;
let hrs = 0;

const myIntervel = setInterval(() => {
  sec++;
  //   console.log(sec);
  if (sec === 8) {
    sec = 0;
    min++;
  }
  if (min === 6) {
    min = 0;
    hrs++;
  }

  console.log(`${hrs} : ${min} : ${sec}`);
}, 1000);
