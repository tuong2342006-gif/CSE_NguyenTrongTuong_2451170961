Track A 
Phần A:
Câu A1:
1. Mobile (<768px)
- Áp dụng: col-12
- Mỗi box chiếm: 12/12 cột
Layout
[ Box 1 ]
[ Box 2 ]
[ Box 3 ]
[ Box 4 ]
2. Tablet (768px - 991px)
- Áp dụng: col-md-6
- Mỗi box chiếm: 6/12 cột
Layout
[ Box 1 ][ Box 2 ]
[ Box 3 ][ Box 4 ]
3. Desktop (≥992px)
- Áp dụng: col-lg-3
- Mỗi box chiếm: 3/12 cột
Layout
[ Box 1 ][ Box 2 ][ Box 3 ][ Box 4 ]
4. col-md-6 nghĩa là
- md: áp dụng từ breakpoint medium
tức: ≥ 768px
- 6: chiếm 6/12 cột grid
tức: 50% chiều rộng
5. Tại sao không cần viết col-sm-12?
- Vì: col-12 đã áp dụng cho mọi kích thước từ nhỏ trở lên
- Bootstrap dùng Mobile-First:
+ CSS base áp dụng cho mobile trước.
+ Breakpoint lớn hơn sẽ override sau.
- Nên: col-12 đã đủ để  mobile full width và không cần thêm col-sm-12.
Nguồn: tuan_4_css_frameworks/bootstrap/

Câu A2:
1. Giải thích d-none d-md-block
class="d-none d-md-block"
- Ý nghĩa: d-none/ display: none;
-> Ẩn element.
d-md-block
- Từ breakpoint: >= 768px, element sẽ display: block;
2. Ví dụ
(1) mt-3
- Nghĩa là: margin-top
- Kích thước: 1rem
- CSS tương đương: margin-top: 1rem;
(2) mb-4
- Nghĩa là: margin-bottom
- CSS: margin-bottom: 1.5rem;
(3) px-4
- Nghĩa là: padding-left + padding-right
- CSS:
padding-left: 1.5rem;
padding-right: 1.5rem;
(4) py-2
- Nghĩa là: padding-top + padding-bottom
- CSS:
padding-top: 0.5rem;
padding-bottom: 0.5rem;
(5) mb-auto
- Nghĩa là: margin-bottom: auto;
- Công dụng thường dùng với:
+ flexbox
+ đẩy element xuống cuối container
3. Khác nhau giữa .container, .container-fluid, .container-md
(1) .container
<div class="container">
- Đặc điểm
+ Có max-width theo breakpoint.
+ Nội dung nằm giữa.
+ Không full màn hình.
- Responsive
+ Mobile: gần full width
+ Desktop: giới hạn chiều rộng
- Dùng khi:
+ Website thông thường
+ Blog
+ E-commerce
(2) .container-fluid
<div class="container-fluid">
- Đặc điểm
width: 100%;
-> Luôn full màn hình.
- Dùng khi:
+ Banner lớn
+ Dashboard
+ Full-width layout
(3).container-md
<div class="container-md">
- Đặc điểm:
+ <768px -> full width
+ ≥768px -> fixed width giống .container
Nguồn: tuan_4_css_frameworks/bootstrap/

Phần C:
Câu C1:
1. Đổi $primary của Bootstrap sang #E63946
- Bootstrap dùng: SASS/SCSS variables
- Muốn đổi màu primary chuẩn Bootstrap thì cần:
+ cài Bootstrap source SCSS
+ sửa biến $primary
+ compile lại SCSS → CSS
2. Quy trình thực hiện
- Bước 1 — Cài Bootstrap bằng npm
+ npm install bootstrap
- Bước 2 — Tạo file SCSS riêng
+ Ví dụ: custom.scss
- Bước 3 — Override biến $primary
+ $primary: #E63946;
@import "../node_modules/bootstrap/scss/bootstrap";
- Bước 4 — Compile SCSS → CSS
+ Ví dụ dùng Sass: sass custom.scss custom.css
- Bước 5 — Link CSS mới vào HTML
<link rel="stylesheet" href="custom.css">
3. Kết quả
- Tất cả component Bootstrap dùng màu primary sẽ đổi màu:
+ .btn-primary
+ .bg-primary
+ .text-primary
+ .border-primary
+ navbar
+ alerts
+ badges
+ links
+ forms
- Cần công cụ Node.js + npm, bootstrap source SCSS, Sass
4.Tại sao KHÔNG nên override trực tiếp?
Vấn đề
- Chỉ sửa được một component
- Chỉ .btn-primary đổi màu
- Các class khác vẫn xanh mặc định:
+ .bg-primary
+ .text-primary
+ .alert-primary
-> Giao diện không đồng bộ
- Khó maintain
+ Sau này đổi màu: phải sửa nhiều nơi,dễ conflict CSS
- Dễ bị Bootstrap override
5. Tại sao nên dùng SASS variables?
+ Đồng bộ toàn hệ thống
+ Dễ bảo trì
+ Theo đúng cách bootstrap thiết kế

