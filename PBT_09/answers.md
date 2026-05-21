Phần A:
Câu A1:
div#app
├── header
│   ├── h1
│   │   └── "Todo App"
│   └── nav
│       ├── a.active
│       │   └── "All"
│       ├── a
│       │   └── "Active"
│       └── a
│           └── "Completed"
│
└── main
    ├── form#todoForm
    │   ├── input#todoInput
    │   └── button
    │       └── "Add"
    │
    └── ul#todoList
        ├── li.todo-item
        │   └── "Learn HTML"
        └── li.todo-item.completed
            └── "Learn CSS"
2. Query Selector
- Chọn thẻ <h1>
document.querySelector("h1");
- Chọn input trong form
document.querySelector("#todoForm input");
- Chọn tất cả .todo-item
document.querySelectorAll(".todo-item");
- Chọn link đang active
document.querySelector("nav .active");
- Chọn <li> đầu tiên trong #todoListChọn tất cả <a> bên trong <nav>
document.querySelectorAll("nav a");