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

Phần C:
Câu C1:
- Lỗi 1 — Sai event "onclick"
+ Sai
addEventListener("onclick", ...)
+ Đúng
addEventListener("click", ...)
addEventListener không dùng "onclick".

- Lỗi 2 — Gán lại cho const
+ Sai
countDisplay = count;
countDisplay là DOM element nên không thể gán số trực tiếp.Đúng
countDisplay.textContent = count;
+ Đúng
countDisplay.textContent = count;

- Lỗi 3 — innerHTML = null
+ Sai
historyList.innerHTML = null;
+ Đúng
historyList.innerHTML = "";
Nên clear bằng chuỗi rỗng.

- Lỗi 4 — Quên gọi hàm .remove()
+ Sai
item.remove;
+ Đúng
item.remove();
Thiếu () nên hàm không chạy.

- Lỗi 5 — localStorage.getItem() trả về string
+ Sai
count = localStorage.getItem("count");
count sẽ thành string.
+ Đúng
count = Number(localStorage.getItem("count")) || 0;

- Lỗi 6 — Không load history từ localStorage
Code chỉ load count nhưng không load history.
+ Thiếu
historyList.innerHTML =
    localStorage.getItem("history") || "";

- Lỗi 7 — History sau khi load mất event click
Khi load bằng innerHTML, các event cũ không còn hoạt động.
Cần bind lại event cho từng <li>.
+ Sửa
const items = historyList.querySelectorAll("li");

items.forEach(item => {

    item.addEventListener("click", function() {

        deleteHistory(this);
    });
});

- Lỗi 8 — Dùng innerHTML cho số đơn giản
+ Sai
countDisplay.innerHTML = count;
+ Tốt hơn
countDisplay.textContent = count;
An toàn và đúng semantic hơn.
Code đã sửa hoàn chỉnh
const countDisplay =
    document.querySelector(".count");

const historyList =
    document.getElementById("history");

let count = 0;

document
    .querySelector("#incrementBtn")
    .addEventListener("click", function() {

        count++;

        countDisplay.textContent = count;

        const li =
            document.createElement("li");

        li.textContent =
            "Count changed to " + count;

        li.addEventListener("click", function() {

            deleteHistory(this);
        });

        historyList.append(li);
    });

document
    .querySelector("#decrementBtn")
    .addEventListener("click", function() {

        count--;

        countDisplay.textContent = count;
    });

document
    .querySelector("#resetBtn")
    .addEventListener("click", () => {

        count = 0;

        countDisplay.textContent = count;

        historyList.innerHTML = "";
    });

function deleteHistory(element) {

    element.parentNode.removeChild(element);
}

document
    .querySelector("#clearHistory")
    .addEventListener("click", () => {

        const items =
            historyList.querySelectorAll("li");

        items.forEach(item => {

            item.remove();
        });
    });

window.addEventListener("beforeunload", () => {

    localStorage.setItem("count", count);

    localStorage.setItem(
        "history",
        historyList.innerHTML
    );
});

window.addEventListener("load", () => {

    count =
        Number(localStorage.getItem("count")) || 0;

    countDisplay.textContent = count;

    historyList.innerHTML =
        localStorage.getItem("history") || "";

    const items =
        historyList.querySelectorAll("li");

    items.forEach(item => {

        item.addEventListener("click", function() {

            deleteHistory(this);
        });
    });
});

Câu C2:
1. Vì sao bind event lên 1000 elements là BAD PRACTICE?
- Ví dụ BAD
const items = document.querySelectorAll(".item");

items.forEach(item => {

    item.addEventListener("click", () => {

        console.log("clicked");
    });
});

- Nếu có 1000 elements:
+ tạo 1000 event listeners
+ tốn RAM
+ chậm hơn
+ khó maintain
+ dynamic elements mới thêm sẽ không có event
- Event Delegation giải quyết thế nào?
Thay vì bind lên từng element, ta bind lên parent.
Event bubbling sẽ giúp parent nhận event từ child.

+ Ví dụ tốt hơn
document
    .querySelector("#list")
    .addEventListener("click", (e) => {

        if (e.target.classList.contains("item")) {

            console.log("clicked");
        }
    });
Ưu điểm Event Delegation
- Cách cũ	
+ 1000 listeners
+ Tốn memory
+ Chậm
+ Khó maintain
- Event Delegation
+ 1 listener
+ Tiết kiệm memory
+ Nhanh hơn
+ Dễ maintain

2. Refactor bằng DocumentFragment
- Code cũ
for (let i = 0; i < 1000; i++) {

    const div = document.createElement("div");

    div.textContent = `Item ${i}`;

    document.body.appendChild(div);
}
- Vấn đề
appendChild() vào DOM thật:
+ browser phải render lại
+ tính layout lại
+ repaint/reflow liên tục

1000 lần append
-> có thể gây 1000 lần reflow.
- Refactor với DocumentFragment
const fragment = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
    const div = document.createElement("div");
    div.textContent = `Item ${i}`;
    fragment.appendChild(div);
}

document.body.appendChild(fragment);
- Vì sao nhanh hơn?
DocumentFragment
là DOM ảo trong memory.

- Khi append vào fragment:
+ chưa render ra màn hình
+ không reflow
+ không repaint
- Cuối cùng: document.body.appendChild(fragment);
- So sánh
Cách thường:
+ 1000 lần update DOM
+ nhiều redflow
+ chậm hơn 
+ tồn tài nguyên
DocumentFragment
+ 1 lần update DOM 
+ 1 reflow
+ nhanh hơn 
+ tối ưu hơn

