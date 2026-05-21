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

Câu A2:
- innerHTML
+ Đọc/ghi nội dung dưới dạng HTML
+ Có thể render thẻ HTML
+ Chậm hơn vì phải parse HTML
+ Có nguy cơ XSS
- textContent
+ Đọc/ghi dưới dạng text thuần
+ Không render HTML
+ Nhanh hơn 
+ An toàn hơn 
- Ví dụ innerHTML 
const box = document.querySelector("#box");

box.innerHTML = "<h1>Hello</h1>";
- Kết quả: <h1>Hello</h1>
Trình duyện sẽ tạo ra thẻ <h1> thật
- Ví dụ textContent
const box = document.querySelector("#box");

box.textContent = "<h1>Hello</h1>";
- Kết quả: <h1>Hello</h1>
- Dùng innerHTML
Khi cần tạo HTML động
Render card/layout/template

- Ví dụ:
list.innerHTML = `
    <li>HTML</li>
    <li>CSS</li>
`;
- Dùng textContent
Khi chỉ hiển thị text
Hiển thị dữ liệu user nhập
An toàn bảo mật hơn
- Ví dụ:
title.textContent = userName;
- innerHTML nguy hiểm vì innerHTML sẽ parse chuỗi thành HTML thật.
- Ví dụ nguy hiểm
const userInput = document.querySelector("#search").value;
document.querySelector("#result").innerHTML = userInput;
Nếu nhập:
<img src=x onerror="alert('Hacked!')"> thì alert sẽ chạy
- Cách sửa an toàn:
Dùng textContent
const userInput = document.querySelector("#search").value;
document.querySelector("#result").textContent = userInput;
Lúc này trình duyệt chỉ hiển thị text:
<img src=x onerror="alert('Hacked!')">

Câu A3:
- Khi click vào button
+ Event sẽ nổi bọt (event bubbling) từ phần tử con ra cha:
button → inner → outer
+ Output bình thường
BUTTON
INNER
OUTER
- Giải thích
+ Click vào #btn
+ Chạy event của button
+ Event nổi lên #inner
+ Sau đó nổi lên #outer
- Nếu uncomment e.stopPropagation()
document.querySelector("#btn").addEventListener("click", (e) => {
    console.log("BUTTON");
    e.stopPropagation();
});
- Output
BUTTON
- Giải thích
stopPropagation() sẽ chặn event bubbling.
Event không nổi lên:
+ #inner
+ #outer
nên chỉ còn log của button.