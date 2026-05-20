Câu A1:
1.Inline CSS
-Ví dụ: <p style="color: red; font-size: 18px;">Hello</p>
-Ưu điểm:
+ Nhanh, tiện khi test
+ Áp dụng trực tiếp lên 1 phần tử
-Nhược điểm:
+ Khó bảo trì
+ Không tái sử dụng được
+ Không tách biệt HTML và CSS
- Khi nên dùng:
+ Test nhanh
+ Override tạm thời style
2.Internal CSS
-Ví dụ:
<head>
    <style>
    p {
        color: blue;
        font-size: 18px;
    }
    </style>
</head>
-Ưu điểm: 
+ Dễ quản lý hơn inline
+ Áp dụng cho nhiều phần tử trong 1 trang
-Nhược điểm:
+ Chỉ dùng được trong 1 file HTML
+ Không tái sử dụng cho trang khác
- Khi nên dùng:
+ Trang đơn, project nhỏ
+ Demo nhanh nhiều element
3.External CSS
-Ví dụ:
<link rel="stylesheet" href="style.css">
p{
    color: green;
    font-size: 18px;
}
-Ưu điểm:
+ Tái sử dụng nhiều trang
+ Code sạch, dễ bảo trì
+ Tăng hiệu suất
-Nhược điểm:
+ Cần thêm file
+ Phụ thuộc load file
- Khi nên dùng: 
+ Project thật
+ Website nhiều trang
4. Câu hỏi thêm 
Thứ tự ưu tiên: inline css > internal css > external css
-Giải thích:
+ CSS hoạt động theo độ ưu tiên và thứ tự áp dụng 
+ inline gắn trực tiếp vào element nên ưu tiên cao nhất
+ internal nằm trong <style> nên trung bình
+ external là file ngoài nên thấp hơn
Tài liệu tham chiếu: tuan2_css_core/08_introduction_css.md

Câu A2:
1. h1 - chọn tất cả thẻ <h1>
Kết quả: ShopTLU
2. .price - chọn tất cả phần tử do class price
Kết quả: 25.990.000đ và 45.990.000đ
3. #app header - chọn <header> nằm trong #app
Kết quả: ShopTLU
Home
Products
About
4. nav a:first-child - chọn thẻ <a> đầu tiên bên trong nav
Kết quả: Home
5. .product.featured h2 - chọn <h2> nằm trong phần tử có cả 2 class: product và featured
Kết quả: MacBook Pro
6. article > p - chọn tất cả <p> là con trực tiếp của <article>
Kết quả: 25.990.000đ
Mô tả sản phẩm...
45.990.000đ
Mô tả sản phẩm...
7. a[href="/"] - chọn thẻ <a> có attribute href="/"
Kết quả: Home
8. .top-bar.dark h1 - chọn <h1> nằm trong phần tử có cả class top-bar và dark
Kết quả: ShopTLU
Tài liệu tham chiếu: tuan2_css_core/08_introduction_css.md

