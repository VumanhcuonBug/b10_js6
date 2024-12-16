// //lay cac element
// const todoInput = document.getElementById("todo-input");
// const addButton = document.getElementById("add-button");
// const todoList = document.getElementById("todo-list");

// //khi kich vao nut add
// addButton.addEventListener("click", function () {
//   const todoText = todoInput.value;//biet lay gia tri tu input
//   if (todoText !== "") {//kiem tra rong
//     const todoItem = document.createElement("li");//tao element li
//     todoItem.textContent = todoText;//gan noi dung cho the li
//     todoList.appendChild(todoItem);//gan the li thanh con cho the ul
//     todoInput.value = "";//gan gia tri rong cho o input

//     todoItem.addEventListener("click", function () {
//       todoItem.classList.toggle("completed");//ham gach cheo khi da hoan thanh viec
//     });

//     const deleteButton = document.createElement("button");//tao button xoa
//     deleteButton.textContent = "Xoa";//tao chu xoa cho nut
//     todoItem.appendChild(deleteButton);//them nut xoa vao cuoi the li

//     deleteButton.addEventListener("click", function () {//nghe su kien xoa
//       todoItem.remove();// xoa khi kich nut
//     });
//   }
// });

//lay cac ellement
// var todoInput = document.querySelector("#todo-input");
// var addButton = document.querySelector("#todo-button");
// var menu = document.querySelector("#menu");

// addButton.addEventListener("click", () => {
//   const value = todoInput.value//lay gia tri tu o input
//   if(value !== ""){
//     const todoItem = document.createElement("li");//tao element
//     todoItem.textContent = value;//gan value cho the li
//     menu.appendChild(todoItem);//gan the li vao menu
//     todoInput.value = "";//gan gia tri rong cho o input

//     todoItem.addEventListener("click", () =>{
//       todoItem.classList.toggle("completed");
//     });

//     const deleteButton = document.createElement("button");
//     deleteButton.textContent = "xoa";
//     todoItem.appendChild(deleteButton);
//     deleteButton.addEventListener("click", () => {
//       menu.removeChild(todoItem);
//     })
//   }
// });

// var inputText = document.querySelector("#input-textarea");
// var button = document.querySelector("#button-demo");
// var preview = document.querySelector("#output-textarea");

// button.addEventListener("click", () => {
//   const value = inputText.value;
//   preview.innerHTML = value;
// })

// var board = document.querySelector("#colorBoard");
// var preview = document.querySelector("#color-preview")

// board.addEventListener("change", () => {
//   const value = board.value;
//   preview.style.backgroundColor = value;
// })

// var openButton = document.querySelector("#open-modal-button");
// var closeButton = document.querySelector("#close-button");
// var modal = document.querySelector("#modal");

// openButton.addEventListener("click", () => {
//   modal.style.display = "block";
// })

// closeButton.addEventListener("click", () => {
//   modal.style.display = "none";
// })

// function openTab(event, tabName) {
//     const tabContents = document.getElementsByClassName("tab-content");
//     for (let i = 0; i < tabContents.length; i++) {
//       tabContents[i].classList.remove("active");
//     }

//     const tabButtons = document.getElementsByClassName("tab-button");
//     for (let i = 0; i < tabButtons.length; i++) {
//       tabButtons[i].classList.remove("active");
//     }

//     document.getElementById(tabName).classList.add("active");
//     event.currentTarget.classList.add("active");
//   }

// const add = () => {
//   var input1 = document.querySelector("#num1");
//   var input2 = document.querySelector("#num2");
//   var result = document.querySelector("#result");
//   const res = parseFloat(input1.value) + parseFloat(input2.value);
//   result.textContent = res;
// };


// const subtract = () => {
//     var input1 = document.querySelector("#num1");
//     var input2 = document.querySelector("#num2");
//     var result = document.querySelector("#result");
//     const res = parseFloat(input1.value) - parseFloat(input2.value);
//     result.textContent = res;
//   };

//   const multiply = () => {
//     var input1 = document.querySelector("#num1");
//     var input2 = document.querySelector("#num2");
//     var result = document.querySelector("#result");
//     const res = parseFloat(input1.value) * parseFloat(input2.value);
//     result.textContent = res;
//   };

//   var input1 = document.querySelector("#num1");
//     var input2 = document.querySelector("#num2");
//     var result = document.querySelector("#result");
//   const divide = () => {
    
//     const res = parseFloat(input1.value) / parseFloat(input2.value);
//     result.textContent = res;
//   };


// var bar = document.getElementById("chart");

// const data = [10, 20, 15, 30, 25];

// for (const element of data) {
//     const newElement = document.createElement("div");
//     newElement.classList.add("bar");
//     newElement.style.height = element + "px";
//     bar.appendChild(newElement);
// }

// var inputRange = document.getElementById("slider");
// var  value = document.getElementById("valueDisplay");

// inputRange.addEventListener("input", () => {
//     value.innerHTML= inputRange.value;
// })

// const slider = document.getElementById("slider");
// const valueDisplay = document.getElementById("valueDisplay");

// slider.addEventListener("input", function () {
//   valueDisplay.textContent = slider.value;
// });
