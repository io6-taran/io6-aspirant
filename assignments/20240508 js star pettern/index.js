//four square star pattern
document.write("SquareStarOfFourPattern");
document.write("<br>");
const SquareStarOfFourPattern = () => {
  let str = "";
  for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 4; j++) {
      str = str + "* ";
    }
    str = str + "<br>";
  }
  document.write(str);
};
SquareStarOfFourPattern();

//Eight square star pattern
document.write("SquareStarOfEightPattern");
document.write("<br>");
const SquareStarOfEightPattern = () => {
  let str = "";
  for (let i = 1; i <= 8; i++) {
    for (let j = 1; j <= 8; j++) {
      str = str + "* ";
    }
    str = str + "<br>";
  }
  document.write(str);
};
SquareStarOfEightPattern();

document.write("reversal left triangle");
document.write("<br>");
const reversalLeftTriangle = () => {
  for (let a = 5; a >= 1; a--) {
    for (let b = 1; b <= a; b++) {
      document.write("* ");
    }
    document.write("<br>");
  }
};
reversalLeftTriangle();

const rightTriangle = (num) => {
  for (let i = num; i >= 1; i--) {
    for (let j = 1; j <= i - 1; j++) {
      document.write(`&nbsp;&nbsp;`);
    }
    for (let a = num; a >= i; a--) {
      document.write("*");
    }
    document.write("<br>");
  }
};
let num = Number(prompt("Enter the numbers"));
rightTriangle(num);
