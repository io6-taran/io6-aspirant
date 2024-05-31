//1.What is the data-type of
/* a. 'Italy'-->String.
 b. 501-->number
 c. false-->boolean
 d. [23,546,67,8,90]-->array
 e. undefinded-->undefined
 f. null-->object
 g. {}-->object
 h.Number(india)-->nan
 i.Date()-->object
 j. ?-->
*/
//2. Find output
/*console.log("output-1", "500" + 100); -->500100
	console.log("output-2", 56 + 100); -->156
	console.log("output-3", 56 + "100");  -->56100
	console.log("output-4", "500" / "100");  -->5
	console.log("output-5", 56 + 100 + true);  -->157
	console.log("output-6", 56 + 100 + Number(true));  -->157
	console.log("output-7", 56 + 100 + "true");  -->156true
	console.log("output-8", 56 + 100 + Number("true"));  -->nan
	console.log("output-9", 56 + 100 + Number("Vinay"));  -->nan
	console.log("output-9", 50 - "100" + "Vinay");  -->-50vinay
*/
/*function areaOftriangle({ side = 0 }) {
  console.log(`Side of Square: ${side}`);
  const area = side * side;
  console.log(`The Area of square is: ${area}`);
}

areaOftriangle({ side: 10 });

areaOftriangle(547);

let num = prompt("Enter any number to find Even Odd");
/*document.write("find number even and odd");*/

if (num % 2 == 0) {
  console.log(num, "Number is Even");
} else {
  console.log(num, "Number is Odd");
}
/* document.write(
    "calculate average marks"
  );
function calculateMarksSimple(
  studentName,
  physics,
  chemistry,
  maths,
  comp,
  english
) {
  console.log(`Hi ${studentName} !`);

  const sumOfMarks = physics + chemistry + maths + comp + english;

  console.log(`You got ${sumOfMarks} / 100, 
	Your marks are in 
	Physics: ${physics}, 
	English: ${english},
	Chemistry: ${chemistry},
	Computer: ${comp},
	Maths: ${maths}  
	`);

  const average = sumOfMarks / 5;

  console.log(`Your average score is ${average}`);
}

calculateMarksSimple("taran", 98, 87, 90, 76, 89);

/*let numb = prompt("Enter any number to find simple interest");
let P = 5,
  R = 10,
  T = 15;
let SI = (P * T * R) / 100;
console.log("Simple Interest = " + SI);
*/
