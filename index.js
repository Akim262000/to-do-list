const todosNode = document.querySelector(".js-todos");
const inputNode = document.querySelector(".js-input");
const buttonNode = document.querySelector(".js-button");

let todos = [];

let todosLocal = '';

function addTodo(text) {
  const todo = {
    text,
    done: false,
    id: `${Math.random()}`,
  };

  todosLocal = localStorage.setItem('todosLocal', JSON.stringify(todo));
  todos.push(todo);
}

let result = localStorage.getItem('todosLocal');
let newResult = JSON.parse(result);


function deleteTodo(id) {
  todos.forEach((todo) => {
    if (todo.id === id) {
      todo.done = true;
    }
  });
}

function render() {
  console.log(todos);
  let html = "";

  todos.forEach((todo) => {
    if (todo.done) {
      return;
    }

    html += `<div class="list">${todo.text}
    <button class="todo-delete" data-id='${todo.id}'></button>
    </div>`;
  });

  todosNode.innerHTML = html;
}

buttonNode.addEventListener("click", () => {
  const text = inputNode.value;

  addTodo(text);
  render();
  inputNode.value = "";
});

todosNode.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") {
    return;
  }

  const id = e.target.dataset.id;

  deleteTodo(id);

  render(JSON.parse.result);
});
// localStorage.clear();
addTodo(newResult.text);
render();
