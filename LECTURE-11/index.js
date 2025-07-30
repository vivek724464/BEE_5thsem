// Accessing DOM Nodes
// 1. Using Id
//2. Using class
//3. Using Tag Name.
//4. Query Selector/ Query Selectore all    > tagname id or class can be passed  

// let el1=document.getElementById("head");
// console.log(el1);


// let el2=document.getElementsByClassName("item");   // returns collection
// console.log(el2[0]);   // acessing ele using indexing in the collection.

// let el3=document.getElementsByTagName("p");   // returns collection
// console.log(el3);     // indexing can be used

let el4=document.querySelector("p");    // using tagname
console.log(el4);

// let el5=document.querySelector(".item");    // using classname use . // return first match of the class > can be accessed using index or can be looped over
// console.log(el5);
let el6=document.querySelectorAll(".item")   // return collection  of all that match the class 
console.log(el6);


let el7=document.querySelector("#container")    // using id > use #
console.log(el7);

// Properties

// these are getter and setter both
// innerText, innerHtml, textContent


// let data = el7.innerText;
// console.log(data);

// el7.innerText="changes using js";


// let data2=el7.innerHTML;    // returns html
// console.log(data2);


// let data3=el7.innerText;    // return innertext
// console.log(data3);

// let data4=el7.textContent;    // it returns commented text and hidden data also 
// console.log(data4);


// Using setter  to add

// el7.innerHTML=`<li class="item">item 1</li>
//         <li class="item">item 2</li>
//         <li class="item">item 3</li>`



/*getAttribute    returns get attributes of an element
setAttribute
classList
*/
// console.log(el7);
console.dir(el7);  // can see all attributes
let el5=document.querySelector(".item"); 
console.dir(el5);

console.dir(el5.getAttribute("class"))
el5.setAttribute("id", "js");
console.dir(el5.getAttribute("id"))



el5.classList.add("item1");
console.log(el5.classList);

//   const signupBtn = document.querySelector(".signup");
//   const form = document.querySelector("form");

//   signupBtn.addEventListener("click", () => {
//     if (form.style.display === "none") {
//       form.style.display = "block"; 
//     } else {
//       form.style.display = "none"; 
//     }
//   });

const signupBtn = document.querySelector(".signup");
const form = document.querySelector(".form");

signupBtn.addEventListener("click", () => {
  form.classList.toggle("hidden");
});














