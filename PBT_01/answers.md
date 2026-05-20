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

Câu A2 - Semantic HTML
Lỗi 1: Dùng <div class= "header">
- Google không hiểu đây là header 
- Không thể hiện rõ đây là phần đầu trang
Lỗi 2: Menu không dùng <nav>
- Link điều hướng nhưng không đặt trong <nav>
- SEO không nhận biết được navigation
Lỗi 3: Nội dung chính không dùng <main>
- Không xác định được nội dung chính của trang
Lỗi 4: Sản phẩm không dùng <article>
- Google không hiểu đây là 1 item riêng
- Product là nội dung độc lập nhưng dùng <div>
Lỗi 5: Tiêu đề không dùng heading 
Lỗi 6: Ảnh không có alt
Lỗi 7: Footer không dùng <footer>
Sửa:
<header>
    <div class="logo">ShopTLU</div>
    <nav>
        <a href="/">Trang chủ</a>
        <a href="/product">Sản phẩm</a>
    </nav>
</header>

<main>
    <article>
        <h2>iPhone 16 Pro</h2>
        <p><strong>25.990.000đ</strong></p>
        <figure>
            <img src="iphone.jpg" alt="iPhone 16 Pro>
        </figure>
    </article>
</main>

<footer>
    <p>2026 ShopTLU</p>
</footer>    
Nguồn: 04_semantic_html.md

Câu A3 - Block vs Inline
- mô tả bằng text art
Hộp 1
Text A TexT B
Hộp 2
Text C Text D
Hộp 3
Giải thích:
- <div> là block element: luôn chiếm toàn bộ chiều ngang nên hộp 1, hộp 2, hộp 3 mỗi cái nằm một dòng
- <span> và <strong> là inline element: Không xuống dòng và hiện thị trên cùng một dòng nên Text A và Text B cùng 1 dòng, Text C và Text D cùng một dòng
Nguồn: 04_semantic_html.md 
