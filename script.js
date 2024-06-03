//Получаю все элементы со страницы html по Id
const todoInput = document.getElementById("todoInput");
const createTaskButton = document.getElementById("taskButton");
const todoList = document.getElementById("todoList");
// Создаю новую функцию для создания задачи 
function createTask() {
    // Создаю новый элемент для того, чтобы положить туда задачу из списка
  const todoItem = document.createElement("li");
  //Положу текстовую инфорамцию в li
  todoItem.textContent = todoInput.value;
  //Добавлю свойство для того, чтобы каждая довабленная li следовала за предыдущей
  todoList.appendChild(todoItem);
  todoInput.value = ""; // пустой инпут после перехода задачи
}
//Функция check выполненной задачи
function checkTask(event) {
  const element = event.target;
  element.classList.toggle("done");
}
//Функция слушатель события на кнопку 
createTaskButton.addEventListener("click", createTask);
//Функция слушатель события на клик по задаче из списка
todoList.addEventListener("click", checkTask);