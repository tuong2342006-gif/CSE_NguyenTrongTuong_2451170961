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
Câu A3:
1. Sơ đồ 3 trạng thái của Promise

Promise có 3 trạng thái chính:

            Promise Created
                   |
                   v
               Pending
              /       \
             /         \
            v           v
      Fulfilled      Rejected
      (resolve)       (reject)

2. Callback Hell xảy ra khi callback lồng callback quá nhiều 

3. Ví dụ Callback Hell 4 cấp
getUser(userId, function(user){
    getPosts(user.id, function(posts){
        getComments(posts[0].id, function(comments){
            getLikes(comments[0].id, function(likes){
                console.log(likes);
            });
        });
    });
});

4. Refactor sang async/await
async function loadData() {
    try {
        const user = await getUser(userId);
        const posts = await getPosts(user.id);
        const comments = await getComments(posts[0].id);
        const likes = await getLikes(comments[0].id);
        console.log(likes);

    } catch(error) {
        console.log(error);
    }
}
Kết quả: 
Trái - callback lồng nhau
Phải - code chạy tuần tự, dễ đọc

Phần C: 
Câu C1: 
1. Network Errors (mất mạng giữa chừng)
Dấu hiệu:
WiFi mất
Internet chập chờn
DNS lỗi
Request không gửi được
Cách xử lý:
Bọc try/catch
Hiện thông báo thân thiện
Retry tự động
Cache dữ liệu cũ nếu có
Disable nút spam request

Ví dụ:
async function getProducts() {
  try {
    const response =
      await fetch("/products");

    const data =
      await response.json();

    return data;

  } catch (error) {
    console.log(error);

    alert(
      "Mất kết nối mạng"
    );

    return [];
  }
}

2. API Errors (500 / 404 / 429)
Không phải API trả lỗi là fetch() throw error.
Phải tự kiểm tra:

if (!response.ok) {
  throw new Error(
    response.status
  );
}
404 Not Found
Resource không tồn tại

Ví dụ:
if (response.status === 404) {
  alert(
    "Không tìm thấy dữ liệu"
  );
}
500 Internal Server Error
Lỗi phía server

Ví dụ:
if (response.status >= 500) {
  alert(
    "Server đang gặp lỗi"
  );
}
429 Too Many Requests
Bị rate limit

Ví dụ:
if (response.status === 429) {
  alert(
    "Quá nhiều request, thử lại sau"
  );
}

3. Timeout (>10 giây)

Dùng AbortController.
async function fetchWithTimeout(
  url,
  ms = 10000
) {

  const controller =
    new AbortController();

  const timeout =
    setTimeout(() => {
      controller.abort();
    }, ms);

  try {

    const response =
      await fetch(url, {
        signal:
          controller.signal
      });

    clearTimeout(timeout);

    return response;

  } catch (error) {

    if (
      error.name ===
      "AbortError"
    ) {

      throw new Error(
        "Request timeout"
      );
    }

    throw error;
  }
}

Sử dụng:
await fetchWithTimeout(
  "/products",
  10000
);

4. Retry Logic (3 lần)

Ý tưởng:
Request fail
retry 1
retry 2
retry 3
still fail → throw error

Code:
async function fetchWithRetry(
  url,
  maxRetries = 3
) {

  for (
    let i = 0;
    i < maxRetries;
    i++
  ) {

    try {

      const response =
        await fetch(url);

      if (!response.ok) {
        throw new Error(
          "API Error"
        );
      }

      return response;

    } catch (error) {

      console.log(
        `Retry ${i + 1}`
      );

      if (
        i ===
        maxRetries - 1
      ) {
        throw error;
      }

    }

  }

}

Sử dụng:
const response =
  await fetchWithRetry(
    "/products",
    3
  );

5. Chiến lược tổng thể E-Commerce
- Request
- Timeout Protection
- Try Fetch
- Network Error?
yes → Retry
no
- Check response.ok
- 404 = Not Found UI
- 429 = Wait + Retry later
- 500 = Server Error UI
Success = Render Data

6. Best Practice thực tế
Loading spinner khi request
Retry network errors
Timeout để tránh treo UI
Error message thân thiện
Cache dữ liệu cũ
Không crash toàn app vì 1 API lỗi
Log lỗi vào monitoring

Câu C2:
Bảng so sánh
Method - Khi nào resolve? - Khi nào reject? - Use case
.all() - Tất cả Promise thành công - Chỉ cần 1 Promise fail - Load nhiều data bắt buộc phải đủ
.allSettled() - Khi tất cả Promise kết thúc - Không reject toàn bộ - Dashboard nhiều widget
.race() - Promise đầu tiên hoàn thành (resolve/reject) - Nếu promise đầu tiên reject - Timeout, CDN nhanh nhất
.any() - Promise đầu tiên resolve - Khi tất cả reject - Mirror servers / fallback APIs

1. Promise.all()

Ví dụ E-Commerce:
user profile
cart
orders

Phải có đủ cả 3 mới render
async function loadProfilePage() {
  try {

    const [
      user,
      cart,
      orders
    ] = await Promise.all([

      fetch("/api/user")
        .then(r => r.json()),

      fetch("/api/cart")
        .then(r => r.json()),

      fetch("/api/orders")
        .then(r => r.json())

    ]);

    console.log(
      user,
      cart,
      orders
    );

  } catch (error) {

    console.log(
      "Một API lỗi -> fail hết"
    );

  }
}

2. Promise.allSettled()
Dashboard:
weather widget
stock widget
news widget

Một widget chết không nên làm chết dashboard.
async function loadDashboard() {
  const results =
    await Promise.allSettled([

      fetch("/weather")
        .then(r => r.json()),

      fetch("/stocks")
        .then(r => r.json()),

      fetch("/news")
        .then(r => r.json())

    ]);

  results.forEach(
    (result, index) => {

      if (
        result.status ===
        "fulfilled"
      ) {

        console.log(
          "Success",
          index,
          result.value
        );

      } else {

        console.log(
          "Error",
          result.reason
        );

      }

    }
  );
}

3. Promise.race()
Timeout request.
API nào xong trước thắng

async function fetchWithTimeout() {
  const result =
    await Promise.race([

      fetch("/products"),

      new Promise(
        (_, reject) =>

          setTimeout(() => {

            reject(
              new Error(
                "Timeout"
              )
            );

          }, 10000)
      )

    ]);

  return result;
}

4. Promise.any()
Có nhiều server mirror
Chỉ cần server nào trả OK đầu tiên
async function loadImage() {
  const image =
    await Promise.any([

      fetch(
        "https://cdn1.com/img"
      ),

      fetch(
        "https://cdn2.com/img"
      ),

      fetch(
        "https://cdn3.com/img"
      )

    ]);

  return image;
}