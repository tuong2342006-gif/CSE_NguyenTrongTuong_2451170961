Phần A:
Câu A1:
Thứ tự output sẽ là:
1 - Start
4 - End
3 - Promise
6 - Promise 2
2 - Timeout 0ms
7 - Nested timeout
5 - Timeout 100ms

Event Loop là cơ chế của JavaScript dùng để quyết định khi nào lấy task từ queue để thực thi
- Luồng hoạt động:
- Call Stack rỗng
- Chạy toàn bộ Microtask Queue
- Lấy 1 Macrotask chạy
- Kiểm tra Microtask lại
- Lặp lại

Microtask Queue
Chứa các tác vụ ưu tiên cao:
- Promise.then()
- queueMicrotask()
- MutationObserver
Microtask luôn chạy trước Macrotask

Macrotask Queue
Chứa các tác vụ như:
- setTimeout()
- setInterval()
- setImmediate()
- I/O events

Câu A2:
1. await fetch(...) — fetch trả về gì? Tại sao cần await?
- fetch() không trả về dữ liệu ngay
Nó trả về: Promise<Response>
- Cần await vì do request mạng mất thời gian:
+ Gửi request
+ Chờ server phản hồi
+ Nhận response
Nếu không await:
const response = fetch(url);
console.log(response.ok);
Lỗi vì:
+ response đang là Promise
+ không phải Response object

2. response.ok — Khi nào false?
if (!response.ok)
- response.ok là shortcut kiểm tra:
status >= 200 && status < 300
- Nếu status ngoài khoảng này:
ok = false

3. response.json() — Tại sao cần await lần nữa?
const data = await response.json();
response.json() cũng trả về:
Promise<any>
Vì browser cần:
+ Nhận raw bytes
+ Đọc body
+ Convert JSON text
+ Parse thành object
4. try...catch — Catch những lỗi gì?
try {
   ...
} catch(error) {
   ...
}
Catch được:
- Network error 
- Lỗi tự throw
- JSON parse error
- 404 / 500 tự động catch
