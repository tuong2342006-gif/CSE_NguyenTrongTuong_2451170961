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

Câu C2:
1. CSS thuần — Responsive Navbar
HTML:
<nav class="navbar">

  <div class="logo">
    MyShop
  </div>

  <ul class="menu">
    <li>Home</li>
    <li>Products</li>
    <li>Contact</li>
  </ul>

  <div class="hamburger">
    ☰
  </div>

</nav>
CSS:
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: #222;
  color: white;
}

.menu {
  display: none;
  list-style: none;
  gap: 20px;
}

.hamburger {
  display: block;
  font-size: 24px;
}

@media (min-width: 768px) {

  .menu {
    display: flex;
  }

  .hamburger {
    display: none;
  }
}
2. CSS thuần — Product Card
HTML: 
<div class="card">

  <img src="https://picsum.photos/300/200" alt="">

  <div class="card-body">

    <h3>Product</h3>

    <p>$120</p>

    <button>Buy Now</button>

  </div>

</div>
CSS: 
.card {
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  transition: 0.3s;
}

.card img {
  width: 100%;
}

.card-body {
  padding: 16px;
}

button {
  background: black;
  color: white;
  border: none;
  padding: 10px 16px;
}

.card:hover {
  transform: translateY(-5px);
}
3. Bootstrap version
Navbar
HTML:
<nav class="navbar navbar-expand-md bg-dark navbar-dark">

  <div class="container">

    <a class="navbar-brand" href="#">
      MyShop
    </a>

    <button
      class="navbar-toggler"
      data-bs-toggle="collapse"
      data-bs-target="#menu"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="menu">

      <ul class="navbar-nav ms-auto">

        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>

      </ul>

    </div>

  </div>

</nav>
Product Card
HTML:
<div class="card">

  <img
    src="https://picsum.photos/300/200"
    class="card-img-top"
    alt=""
  >

  <div class="card-body">

    <h5 class="card-title">
      Product
    </h5>

    <p class="card-text">
      $120
    </p>

    <button class="btn btn-dark">
      Buy Now
    </button>

  </div>

</div>

4. So sánh 
- Tiêu chí - Css thuần - bootstrap:
+ Số dòng Css - nhiều - ít
+ thời gian phát triển - chậm hơn - nhanh hơn 
+ responsive - tự viết media queries - có sẵn
+ tùy biến - rất cao - bị giới hạn framework
+ dễ maintain - khó hơn nếu project lớn
+ kích thước file - nhẹ - nặng hơn

TRACK B — TAILWINDCSS
Phần A: 
Câu A1:
- flex -> display: flex
- items-center -> align-items: center
- justify-between -> justify-content: space-between
- p-4 -> padding: 1rem (16px)
- bg-white -> background-color: #ffffff
- s- hadow-md -> box-shadow: medium shadow (e.g. 0 4px 6px rgba(0,0,0,0.1))
- rounded-lg -> border-radius: 0.5rem (8px)
- hover:shadow-xl -> khi hover: tăng - - box-shadow lớn hơn
- transition-shadow -> transition chỉ áp dụng cho box-shadow
- duration-300 -> transition-duration: 300ms
- w-16 -> width: 4rem (64px)
- h-16 -> height: 4rem (64px)
- rounded-full -> border-radius: 9999

Câu A2:
1. Prefix responsive: md:, lg:, xl:
Trong TailwindCSS, các prefix này là breakpoints (responsive theo màn hình)
- md:≥ 768px
- lg:≥ 1024px
- xl:≥ 1280px
2. State modifiers
- hover: Khi rê chuột vào element
- focus: Khi click hoặc tab vào input/button
- active: Khi đang nhấn giữ chuột
- group-hover: Hover vào parent thì affect child
3. Class Tailwind yêu cầu
- Trong Tailwind, class tương đương với d-none d-md-flex (Bootstrap) là: hidden md:flex
- Giải thích:
hidden -> ẩn trên mọi màn (giống d-none)
md:flex -> từ tablet trở lên (≥768px) thì hiển thị dạng flex

Phần C:
Câu C1:
1. So sánh HTML file size
- CSS thuần:
HTML:
<div class="card">
  <img class="card-img">
  <h3 class="card-title">Product</h3>
  <p class="card-price">$20</p>
</div>
CSS: 
.card {
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: 0.3s;
}
.card:hover {
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
}
+ HTML: ngắn hơn
+ Nhưng phải có thêm file CSS riêng

- Tailwind:
<div class="rounded-lg shadow-md hover:shadow-xl transition p-4">
  <img class="rounded mb-3">
  <h3 class="font-semibold">Product</h3>
  <p class="text-gray-500">$20</p>
</div>
+ HTML: dài hơn
+ nhưng ko cần CSS

2. Maintainability (dễ đọc, dễ sửa)
- CSS thuần:
+ Code HTML gọn, dễ nhìn
+ Style tách riêng → rõ ràng
+ Phải nhảy qua lại HTML ↔ CSS
+ Dự án lớn dễ bị class trùng / override khó kiểm soát

- Tailwind:
+ Sửa trực tiếp trong HTML → nhanh
+ Không lo trùng class
+ Dễ debug (nhìn class là biết style)
+ HTML rất dài → khó đọc lúc đầu
+ Người mới sẽ bị “ngợp class”
3. Reusability (tái sử dụng)
- CSS thuần:
+ Tái sử dụng bằng class:
<div class="card"></div>
+ Rất tiện cho component lớn
- Tailwind:
+ Không có class sẵn → phải viết lại nhiều utility
+ Nhưng có 2 cách reuse:
Cách 1: Dùng component (copy)
<div class="rounded-lg shadow-md p-4 ..."></div>
Cách 2: Dùng @apply (Tailwind nâng cao)
.card {
  @apply rounded-lg shadow-md p-4 hover:shadow-xl transition;
}
Sau đó:
<div class="card"></div>

Câu C2:
1. Tại sao Tailwind CSS cuối cùng nhỏ hơn Bootstrap?
- Vì Tailwind chỉ build ra những class bạn dùng, còn Bootstrap là framework có sẵn tất cả component
- Bootstrap: chứa rất nhiều CSS không dùng đến (button, modal, carousel…)
Tailwind: chỉ generate utility classes bạn viết trong HTML
2. PurgeCSS / Tailwind JIT là gì? Loại bỏ gì?
- Nguyên lý:
+ Tailwind quét toàn bộ file HTML / JS
+ Chỉ giữ lại những class thực sự xuất hiện
+ Xóa hết class không dùng
- Nó loại bỏ:
+ Các utility classes không được dùng
+ CSS dư thừa (unused styles)
- JIT (Just-In-Time):
+ Không tạo sẵn toàn bộ CSS
+ Chỉ generate class khi bạn dùng
3. Khi nào KHÔNG nên dùng Tailwind? (2 tình huống)
- Trường hợp 1: Project nhỏ, đơn giản
Ví dụ:
+ Landing page đơn giản
+ Website tĩnh ít component
- Dùng CSS thuần:
+ Nhanh hơn
+ HTML gọn hơn
- Trường hợp 2: Khi cần design quá custom / phức tạp
Ví dụ:
+ Animation phức tạp
+ UI design riêng biệt (không theo utility)
- Tailwind sẽ:
+ Viết class rất dài
+ Khó quản lý