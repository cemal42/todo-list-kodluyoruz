const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");
const closeWarning = document.querySelector(".close-warning")
const warning = document.querySelector(".warning")
const warningText = document.querySelector(".warning-text")

const todoLocalStorage = JSON.parse(localStorage.getItem("todo-item")) || []

todoBtn.addEventListener("click", () => {
  addItemFunc();
  const removeItem = document.querySelectorAll(".remove-item");
  removeItemFunc(removeItem);
});

let todoArr = []

function addItemFunc() {
  if (todoInput.value && todoInput.value.charCodeAt(0) !== 32) {
    todoArr.push(todoInput.value)
  
    localStorage.setItem("todo-item", JSON.stringify(todoArr))

    todoList.innerHTML += `<li class="todo-item"> ${todoInput.value} <span class="remove-item">x</span></li>`;

    todoInput.value = "";
    warningText.innerHTML = "Listeye başarıyla eklendi"
    warning.style.display = "block"
    setInterval(() => {
      warning.style.display = "none"
    }, 5000)

  } else {
    warningText.innerHTML = "Listeye boş ekleme yapamazsınız!"
    warning.style.display = "block"
    setInterval(() => {
      warning.style.display = "none"
    }, 5000)
  }
}

function closeWarningFunc() {
  closeWarning.addEventListener("click", () => {
    warning.style.display = "none"
  })
}

function removeItemFunc(items) {
  items.forEach((item) => {
    item.addEventListener("click", () => {
      todoList.removeChild(item.parentElement);
      warningText.innerHTML = "Listeden kaldırıldı"
      warning.style.display = "block"
      setInterval(() => {
        warning.style.display = "none"
      }, 5000)
    });
  });
}
