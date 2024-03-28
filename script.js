//Получаю все элементы со страницы html по Id
const todoInput = document.getElementById("todo");
const addButton = document.getElementById("addWhatToDo");
const todoList = document.getElementById("todoList");
// Создаю новую функцию для создания задачи (получаю значение из инпута (todoInput.value) путем создания новой переменной, в которой будут хранится текстовые данные из todo листа  )
function createTask() {
  const getTaskValue = todoInput.value;
  // Создаю новый элемент для того, чтобы положить туда из списка
  const todoItem = document.createElement("li");
  //Положу текстовую инфорамцию в li
  todoItem.textContent = getTaskValue;
  //Добавлю свойство для того, чтобы каждая довабленная li следовала за предыдущей
  todoList.appendChild(todoItem);
  todoInput.value = ""; // пустой инпут после перехода задачи
}
//Функция check выполненной задачи
function checkTask(event) {
  const element = event.target;
  element.classList.toggle("done");
}
//Функция слушатель события на кнопку addButton
addButton.addEventListener("click", createTask);
//Функция слушатель события на клик по задаче из списка
todoList.addEventListener("click", checkTask);