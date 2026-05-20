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

Câu A4: -Table
<thead>:  Chứa phần tiêu đề của bảng, thường gồm các cột
<tbody>: Chứa dữ liệu chính của bảng, là phần lớn nhất và gồm nhiều dòng dữ liệu
<tfoot>: Chứa phần kết của bảng, thường dùng hiểu thị tổng, ghi chú
-Tại sao không dùng table để tạo layout vì
+ Không semantic: table chỉ dùng cho dữ liệu dạng bảng 
+ Code khó đọc, khó bảo trì: table lồng nhau rất phức tạp
+ Không responsive tốt: Layout dễ bị vỡ trên màn hình nhỏ
+ Hiệu năng kém: browser phải render toàn bộ table trước nên sẽ chậm hơn
Nguồn 05_tables_hyperlinks.md

Phần B:

Câu B3:
Lỗi 1: Dòng 1 - <!DOCTYPE> thiếu html
Lỗi 2: Dòng 2 - Thiết thuộc tính lang trong <html>
Lỗi 3: Dòng 4 - <title> không đóng
Lỗi 4: Dòng 5 - viết sai "utf8"
Lỗi 5: Dòng 9 - <h1> không đóng đúng
Lỗi 6: Dòng 13 - <a> không đóng
Lỗi 7: Dòng 21 - Thuộc tính src của <img> không có dấu ""
Lỗi 8: Dòng 21 - <img> thiếu thuộc tính alt
Lỗi 9: Dòng 23 - <b> đóng sai vị trí
Lỗi 10: Dòng 30 - Table header dùng <td> thay vì <th>
Lỗi 11: Dòng 38 - Có 2 thẻ <main>
Lỗi 12: Dòng 44 - Thẻ <p> trong footer không đóng

Câu B4:
1. Các thẻ semantic HTML5 được sử dụng trong tiki.vn
-Thẻ <html lang="vi">
 ![alt text](<Screenshot 2026-04-23 233857.png>)
-Thẻ <head>
![alt text](<Screenshot 2026-04-23 234054.png>)  
-Thẻ <body>
![alt text](<Screenshot 2026-04-23 234139.png>)
Các thẻ không dùng semantic
![alt text](<Screenshot 2026-04-23 234414.png>)
2. Tìm 1 <table> trên trang tiki.vn: Không có
![alt text](<Screenshot 2026-04-23 234833.png>)
-Không dùng <thead>,<tbody>
3. Tìm 1 <form> trên trang tiki.vn: Không có
![altt text](<Screenshot 2026-04-23 235726.png>)
-Không có action/ method: GET
- Input types được dùng:
+ Text - nhập từ khóa
+ submit - nút tìm kiếm