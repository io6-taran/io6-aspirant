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

for (let i = 20; i <= 30; i++) {
  for (let j = 20; j <= 10; j++) {
    console.log(`table of ${i} x ${j}`, i * j);
  }
}
