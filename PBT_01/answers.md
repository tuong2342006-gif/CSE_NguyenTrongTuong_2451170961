Phần A:
Câu A1 - HTTP & Browser
1. Khi nhập https.//shoppe.vn vào trình duyệt và nhấn Enter, trình duyệt thực hiện các bước:
Bước 1: DNS Lookup (Tìm IP)
Bước 2: Thiết lập kết nối TCP và TLS
Bước 3: Gửi HTTP Request
Bước 4: Server xử lý và trả về HTTP Response
Bước 5: Browser nhận HTML và tạo DOM
Bước 6: Fetch tài nguyên phụ (CSS/JS)
Bước 7: Render Pipeline
Nguồn: 01_introduction_html_universe.md:
- mục 2: Big Picture - Client-Server-Archiecture
- mục 3: Browser Rendering Pipeline
2. Trong DevTools của Chrome, tab Network cho thấy thông tin:
- Danh sách tất cả HTTP Requests
- Status Code (200, 404)
- Loại tài nguyên: HTML, CSS
- Kích thước file
- Thời gian load từng request
- Tổng thời gian load trang
![alt text](<Screenshot Request Css.png>)
![alt text](<Screenshot Status.png>)
![alt text](<Screenshot Time Load.png>)
Nguồn: 01_introduction_html_universe.md: mục 6: Hands-on Practice