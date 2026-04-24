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

Phần C:
Câu C1:
<!DOCTYPE html> <!--Khai báo HTML5-->
<html lang="vi"> <!--Ngôn ngữ tiếng Việt-->
<head>
    <meta charset="UTF-8"> <!--Hỗ trợ Unicode-->
    <meta name="viewport" content="width=device-width, initial-scalee=1.0">
    <!--Responsive-->
    <title>Chi tiết sản phẩm<?title> <!-- Tiêu đề trang -->
</head>
<body>
    <!-- Header -->
    <header><!-- header dùng cho phần đầu trang -->
    <h1>Logo / Tên website</h1><!-- h1 cho tiêu đề chính -->
    <nav> <!-- nav vì đây là thanh điều hướng -->
    <ul> <!-- ul vì menu không có thức tự -->
        <li><a href="#">Trang chủ</a></li>
        <li><a href="#">Danh mục</a></li>
        <li><a href="#">Liên hệ</a></li>
    </ul>
    </nav>
</header>

<!-- BREADCRUMD -->
<nav aria-label="breadcrumb"><!-- nav vì đây là điều hướng -->
    <ol><!--ol vì breadcrumb có thứ tự -->
    <li><a href="#">Trang chủ</a></li>
    <li><a href="#">Điện thoại</a></li>
    <li>iPhone 16</li> <!-- phần hiện tại không cần link -->
    </ol>
</nav>

<!-- MAIN CONTENT -->
<main> <!-- main chứa nội dung chính của trnag -->
    <section><!-- section vì đây là 1 phần nội dung lớn -->
    <div> class="product-images"> <!-- dvi để gom nhóm ảnh -->
        <figure> <!-- figure cho nội dung media -->
        <image src="#" alt="Ảnh chính"> <!-- ảnh sản phẩm -->
        <figcaption>Ảnh chính</figcaption> <!-- mô tả ảnh -->
        </figure>

        <div class ="thumbnail-list"> <!-- danh sách ảnh nhỏ -->
            <img src="#" alt="Ảnh 1">
            <img src="#" alt="Ảnh 2">
            <img src="#" alt="Ảnh 3">
        </div>
    </div>

    <!-- Thông tin sản phầm -->
    <article><!--article vì nội dung này độc lập -->
    <h2>Tên sản phẩm</h2> <!--tiêu đề sản phẩm -->
    <p class="price">Giá</p> <!--giá -->
    <div class="rating"> <!-- nhóm đánh giá -->
        <span>★★★★★</span> <!-- hiện thị sao -->
    </div>

    <p class"description">Mô tả sản phẩm</p> <1-- mô tả -->
    </article>
</section>

<!-- Bảng thông số -->
<section> <!-- section riêng cho thông số -->
    <h3>Thông số kỹ thuật</h3>
    <table> <!-- tiêu đề -->
        <thread> <!--phần tiêu đề bảng -->
            <tr>
                <th>Thuộc tính</th>
                <th>Giá trị</th>
            </tr>
        </thread>
        <tbody> <!-- nội dung bảng -->
        <tr>
            <td>CPU</td>
            <td>...</td>
        </tr>
        </tbody>
    </table>
</section>

<!-- đánh giá -->
<section>
    <h3>Đánh giá</h3>
    <article> <!-- comment là 1 article độc lập -->
    <h4>Tên người dùng</h4>
    <p>Nội dung bình luận</p>
    </article>
</section>

<main>
<!-- sidebar -->
<aside> <!-- aside vì nội dung phụ -->
    <h3>Sản phẩm tương ứng</h3>
    <ul> <!--danh sách sản phầm -->
        <li>
        <article><!-- mỗi sản phẩm là 1 đơn vị độc lập -->
        <h4>Tên SP</h4>
        <p>Giá</p>
        </article>
        </li>
    </ul>
</aside>

<!-- footer -->
<footer> <!-- footer cho phần cuối trang -->
    <p>&copy; 2026 Website</p>
</footer>
</body>
</html>

Câu C2:
Nói rằng chỉ cần dùng <div> cho mọi thứ rồi thêm class là đủ thực ra là một cách làm nhanh nhưng không bền.Về mặt kỹ thuật, semantic HTML mạng lại lợi ích rõ ràng mà <div> không thể thay thế hoàn toàn. Thứ nhát là SEO: các công cụ tìm kiếm không chỉ đọc nội dung mà còn phân tích cấu trúc trang. Khi bạn dùng các thứ như <main>, <article>, <nav>, chúng giúp bot hiểu đâu là nội dung chính, đâu là điều hướng hay phần phụ.Nếu tất cả đều là <div>, trang sẽ giống như một khối mù, làm giảm khả năng xếp hạng. Thứ hai là Accessibility: người dùng sử dụng screen reader phụ thuộc rất nhiều vào semantic HTML để điều hướng nhanh. Các thẻ có ý nghĩa giúp họ nhảy đến nội dung cần thiết mà không phải đọc toàn bộ trang, điều mà <div> không cung cấp nếu không bổ sung thêm ARIA phức tạp.
Một ví dụ cụ thể: khi xây dựng trang tin tức, nếu mỗi bài viết được đặt trong <article>, công cụ tìm kiếm và screen reader đều hiểu đây là một đơn vị nội dụng độc lập. Ngược lại, nếu dung <div class="post">, bạn phải giải thích thêm bằng nhiều cách khác, vừa rườm rà vừa dễ sai.
Tuy vậy, không phải lúc nào <div> cũng vô dụng. Trong các trường hợp như tạo layout bằng flexbox/grid, hoặc làm wrapper để áp CSS, <div> vẫn là lựa chọn hợp lý vì những phần này không mang ý nghĩ nội dung.
Tóm lại, semantic HTML không phải là học thêm cho khó mà là đầu tư đúng để website dễ hiểu hơn với cả máy và người.

Phân C:
Câu C1:
Lỗi 1: Dòng 2 - input"Tên" không có <label for="..">, vi phạm accessibility
Sửa:<label for="name">Tên:</label>
<input type="text" id="name" name="name" required>
Lỗi 2: Dòng 4 - Input email thiếu <label>, placeholder không thay label
Sửa: <label for="password">Email:</label>
<input>type="email" id="email" name="email" requied>
Lỗi 3: Dòng 6 - Password không có label, vi phạm accessibility
Sửa: <label for="password">Mật khẩu:</label>
<input type="password" id="password" name="password" required>
Lỗi 4: Dòng 7 - "Nhập lại mật khẩu" không có label + không phân biệt field, không có id/name riêng
Sửa: <label for="cònirm">Nhập lại mật khẩu:</label>
<input type="password"> id="confirm" name="confirm" required>
Lỗi 5:Dòng 9 - phone dùng type="text" + có sẵn value, sai type
Sửa: <label for="phone">Số điện thoại:</label>
<input>type="tel" id="phone" name="phone" placeholder ="0901234567" required>
Lỗi 6: Dòng 11= <select> không có label, vi phạm accessibiliyy 
Sửa: <label for="city">Thành phố:</label>
<select id="city" name="city" required>
    <option value="">Chọn</option>
    <option>Hà Nội</option>
    <option>TP.HCM></option>
</select>
Lỗi 7: Dòng 16 - checkbox điều khoản thiếu input, có label nhưng không có checkbox
Sửa:<label>
<input type="checkbox" name="terms" required>
Tôi đồng ý điều khoản
</label>
Lỗi 8: Dòng 20 - nút submid dùng input + không có aria-label, kém semantic hơn 
Sửa: <button type="submit" aria-label="gửi form">Gửi</button>
Câu C2:

