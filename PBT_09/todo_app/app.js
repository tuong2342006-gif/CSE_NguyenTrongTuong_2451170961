const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector("#todoList");
const todoCount = document.querySelector("#todoCount");

const filterButtons = document.querySelectorAll(".filter-btn");
const clearCompletedBtn = document.querySelector("#clearCompleted");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

let currentFilter = "all";

const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
};

const updateCount = () => {
    const activeTodos = todos.filter(todo => !todo.completed);

    todoCount.textContent = `${activeTodos.length} items left`;
};

const renderTodos = () => {

    todoList.innerHTML = "";

    let filteredTodos = todos;

    if (currentFilter === "active") {
        filteredTodos = todos.filter(todo => !todo.completed);
    }

    if (currentFilter === "completed") {
        filteredTodos = todos.filter(todo => todo.completed);
    }

    filteredTodos.forEach(todo => {

        const li = document.createElement("li");
        li.classList.add("todo-item");

        if (todo.completed) {
            li.classList.add("completed");
        }

        li.dataset.id = todo.id;

        const span = document.createElement("span");
        span.textContent = todo.text;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.classList.add("delete-btn");

        li.append(span, deleteBtn);

        todoList.appendChild(li);
    });

    updateCount();

    saveTodos();
};

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const text = todoInput.value.trim();

    if (!text) return;

    todos.push({
        id: Date.now(),
        text,
        completed: false
    });

    todoInput.value = "";

    renderTodos();
});

todoList.addEventListener("click", (e) => {

    const li = e.target.closest(".todo-item");

    if (!li) return;

    const id = Number(li.dataset.id);

    const todo = todos.find(todo => todo.id === id);

    if (e.target.classList.contains("delete-btn")) {

        todos = todos.filter(todo => todo.id !== id);

        renderTodos();
    }

    else if (e.target.tagName === "SPAN") {

        todo.completed = !todo.completed;

        renderTodos();
    }
});

todoList.addEventListener("dblclick", (e) => {

    if (e.target.tagName !== "SPAN") return;

    const span = e.target;

    const li = span.closest(".todo-item");

    const id = Number(li.dataset.id);

    const todo = todos.find(todo => todo.id === id);

    const input = document.createElement("input");

    input.type = "text";
    input.value = todo.text;

    input.classList.add("edit-input");

    li.replaceChild(input, span);

    input.focus();

    input.addEventListener("keydown", (e) => {

        if (e.key === "Enter") {

            todo.text = input.value.trim() || todo.text;

            renderTodos();
        }
    });
});

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        currentFilter = button.dataset.filter;

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        renderTodos();
    });
});

clearCompletedBtn.addEventListener("click", () => {

    todos = todos.filter(todo => !todo.completed);

    renderTodos();
});

renderTodos();