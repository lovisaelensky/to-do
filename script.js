
var button = document.getElementById("add-btn");
var newItem = document.getElementById("userInput");
var ul = document.querySelector("ul");
var list = document.getElementsByTagName("li");
var del = document.getElementsByClassName("delete-btn");

// Adds event listeners to already existing items
for (var i = 0; i < del.length; i++) {
  del[i].addEventListener("click", deleteListElement);
}

for (var i = 0; i < list.length; i++) {
  list[i].addEventListener("click", liClick);
}

// Removes parent element (since button is a child)
function deleteListElement() {
  this.parentElement.remove();
}

function liClick() {
  this.classList.toggle("done");
}

function inputLength() {
  return newItem.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.innerText = newItem.value;
  ul.appendChild(li);
  newItem.value = "";

  var deleteBtn = document.createElement("button");
  deleteBtn.appendChild(document.createTextNode("Delete"));
  li.appendChild(deleteBtn);
  ul.appendChild(li);

  // Register action on newly added elements
  li.addEventListener("click", liClick);
  deleteBtn.addEventListener("click", deleteListElement);
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  } else {
    alert("You have to write something!");
  }
}

function addListAfterEnter(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);
newItem.addEventListener("keypress", addListAfterEnter);
