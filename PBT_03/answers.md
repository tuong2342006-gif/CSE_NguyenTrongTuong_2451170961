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

Câu A3:
-Trường hợp 1: content-box 
.box-1{
    width: 400px;
    padding: 20px;
    border: 5px solid black;
    marginL 10px;
}
+Chiều rộng hiển thị = 400 + (20x2) + (5x2) = 450px
+Không gian chiếm trên trang(có margin): 450 + (10x2) = 470px
-Trường hợp 2: border-box
.box-2{
    box-sizing: border-box;
    width: 400px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
+Chiều rộng hiển thị = 400px
+Chiều rộng content thực tế = 400 - (20x2) - (5x2) = 350px
+Không gian chiếm trên trang: 400 + (10x2) = 420px
-Trường hợp 3: margin collapse
.box-a {margin-bottom: 25px;}
.box-b {margin-top: 40px;}
+Khoảng cách giữa 2 box = 40px
+Vì sao khoảng cách giữa 2 box không phải 65px vì xảy ra margin collapse (gộp margin)
hai margin dọc thì không cộng mà lấy giá trị lớn nhất
-Nâng cao: 
.box-a {margin-bottom: -10px;}
.box-b {margin-top: 40px;}
+ Khoảng cách = 30px vì theo quy tắc 2 số cùng dương thì lấy max, 1 dương 1 âm thì cộng lại và 2 âm thì lấy âm lớn hơn 
Tài liệu tham chiếu: tuan2_css_core/08_introduction_css.md

Câu A4: 
1. tính specificity score(a,b,c) cho mỗi rule
-rule A 
p{color: black;} - 1 tag
specificity: (0,0,1)
-rule B
.price {color: blue;} - 1 class
specificity: (0,1,0)
-rule C
#main-price{color: red;} - 1ID
specificity: (1,0,0)
-rule D 
p.price{color: green;} - 1 tag + 1 class
specificity: (0,1,1)
2. 
element sẽ có màu red vì ID luôn mạnh hơn class và tag, rule C thắng tất cả
3. Nếu thêm <p class="price" id="main-price" style="color: orange;"> element sẽ có màu orange
4. nếu rule A thêm !important, element có màu black vì lúc này override toàn bộ specificity bình thường và các rule khác không có nên bị override hết

Phần B:
Câu B1: 
CSS Selectors đã sử dụng:
1. element selector: body, table, th, td
2. class selector: .active
3. ID selector: #main- header 
4. Descendant selector: #main-header nav a
5. pseudo-class: hover, :nth-child(even)

Câu B2:
Phần 1:
Hộp 1 - content - box
chiều rộng thực tế = 350px
Hộp 2 - border - box
chiều rộng thực tế = 300px
Giải thích:
+ content-box chỉ tính phần content nên padding + border cộng thêm, tổng lớn hơn width khai báo
+ border -box: width bao gồm cả padding và border nên tổng chiều rộng không đổi
Phần 2: 
- Khi không dùng border-box
+ mỗi cột thực tế:
sidebar: 250 + 30 = 280px
content: 500 + 40 = 540px
ads: 250 + 30 = 280px
tổng: 1100px ( vỡ layout)
- khi dùng border-box 
* {
    box-sizing: border-box;
}
tổng = 1000px

Câu B3:
1. Danh sách rules + specificity
1.p - (0,0,1)
2. .text - (0,1,0)
3. .hightlight - (0,1,0)
4. .text.hightlight - (0,2,0)
5. p.text - (0,1,1)
6. p.text.hightlight - (0,2,1)
7. #demo - (1,0,0)
8. p#demo - (1,0,1)
9. #demo.text - (1,1,0)
10. p#demo.text.hightlight - (1,2,1)
2. Kết quả cuối cùng
element hiển thị màu gold
3. giải thích: rule cuối có specificity cao nhất (1,2,1) nên override tất cả các rule còn lại
4. nếu đổi thứ tự css
- nếu không có rule nào cùng specificity: kết quả không đổi
- nếu có 2 rule cùng specificity: rule viết sau sẽ thắng (cascade)

Phần C:
Câu C1:
1. Tính chiều rộng thực tế
-Sidebar
width: 300px;
padding: 20px;
border: 1px;
sidebar = 300 + (20x2) + (1x2) = 342px
-Content
width: 660px;
padding: 30px;
border: 1px;
content = 660 + (30x2) + (1x2) = 722px
Tổng: 1064px mà container chỉ 960px
2.Layout bị vỡ vì tổng width > container cho nên khồn đủ chỗ nằm ngang và content bị rớt xuống dòng
3. Cách sửa
Cách 1: Dùng border-box 
* { 
    box-sizing: border-box;
}
-sidebar = 300px 
-content= 660px
Tổng: 960px
Cách 2: không dùng border-box
phải tự trừ padding + border
-sidebar = 300 - 40 - 2 = 258px
- content = 660 - 60 - 2 = 598px
.sidebar {
    width: 258px;
}
.content {
    width: 598px;
}
Tổng: 960px (thỏa mãn)

