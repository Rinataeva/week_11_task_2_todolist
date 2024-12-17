const input = document.querySelector(".todo__input-field");
const button = document.querySelector(".todo__button");
const list = document.querySelector(".todo__list");

function createTask() {
const item = document.createElement("li");
const checkbox = document.createElement("input");
const clearListButton = document.createElement("button");

item.appendChild(checkbox);
item.appendChild(document.createTextNode(input.value));

list.appendChild(item);
input.value = "";

checkbox.type = "checkbox";
checkbox.classList.add("todo__checkbox");

clearListButton.textContent = "Clear List";
clearListButton.classList.add("todo__clear-button");
clearListButton.addEventListener("click", clearAllTasks);
list.appendChild(clearListButton);

}

function checkTask(event) {
  const element = event.target;
  if(element.classList.contains("todo__checkbox")) {
    const todoItem = element.parentElement;
   todoItem.classList.toggle("todo__task--done");
     }
}

function clearAllTasks() {
  list.innerHTML = "";
}
button.addEventListener("click", createTask);
list.addEventListener("click", checkTask);
clearListButton.addEventListener("click", clearAllTasks);
