Phần A:
Câu A1:
- Thẻ <meta viewport> chuẩn
<meta name="viewport" content="width=device-width, initial-scale=1.0">
- Giải thích:
+ name ="viewport" khái báo rằng thẻ này dùng để điều khiển viewport của trình duyện trên thiết bị di động
+ width = "device-width" đặt chiều rộng viewport bằng đúng chiều rộng màn hình thiết bị
+ initial-scale=1.0 mức zoom ban đầu là 100%
- Nếu thiếu thẻ này thì sẽ
+ giả lập trang web như hiển thị trên màn hình desktop
+ Tự động thu nhỏ toàn bộ website để vừa màn hình điện thoại
+ Chữ sẽ rất nhỏ
+ Layout có thể bị co lại
+ Người dùng phải zoom mới đọc được
- Ví dụ: Một website desktop rộng 1200px sẽ bị iPhone ép nhỏ xuống màn hình điện thoại thay vì responsive thật sự
- Mobile-First:
+ Viết CSS cho mobile trước
+ Sau đó dùng min-width để mở rộng cho tablet/desktop
+ Ví dụ:
.box {
  width: 100%;
  background: lightblue;
}

@media (min-width: 768px) {
  .box {
    width: 50%;
    background: orange;
  }
}
- Desktop-First
+ Viết CSS cho desktop trước
+ Sau đó dùng max - width để thu nhỏ cho mobile
+ Ví dụ:
.box {
  width: 50%;
  background: orange;
}

@media (max-width: 768px) {
  .box {
    width: 100%;
    background: lightblue;
  }
}
- Mobile-First được khuyên dùng vì hiện nay người dùng mobile rất nhiều và đá số truy cập web đến từ điện thoại nên ưu tiên mobile trước giúp trải nghiệm tốt hơn, CSS gọn và dễ mở rộng hơn, quan trọng hơn là hiệu suốt tốt hơn
Nguồn: tuan_3_css_advanced/13_creating_responsive_layouts.md

Câu A2:
- XS — Extra Small(<576px)
+ Thiết bị: iPhone SE, Android nhỏ
+ Lưới sản phẩm: 1 cột
- SM - Small (<576px)
+ Thiết bị: iPhone Plus/Pro Max, Điện thoại ngang
+ Lưới sản phẩm: 2 cột
- MD - Medium (>= 768px)
+ Thiết bị: iPad, Tablet Android
+ Lưới sản phẩm: 2-3 cột
- LG - Large (>=992px)
+ Thiết bị: Laptop, Desktop nhỏ
+ Lưới sản phẩm: 3-4 cột
- XL - Extra large (>= 1200px)
+ Thiết bị: Desktop lớn
+ Lưới sản phẩm: 4 cột
- XXL - Extra Extra Large (>= 1400px)
+ Thiết bị: màn hình 2K/4K
+ Lưới sản phẩm: 5-6 cột
Nguồn: tuan_3_css_advanced/13_creating_responsive_layouts.md

Câu A3:
Chiều rộng màn hình- .container width:
+ 375px - 100%
+ 600px - 540px
+ 800px - 720px
+ 1000px - 960px
+ 1400px - 1140px
Nguồn: tuan_3_css_advanced/13_creating_responsive_layouts.md\

Câu A4:
1. Variables: SCSS cho phép tạo biến để lưu giá trị dùng nhiều lần
- Ví dụ:
SCSS:
$primary-color: blue;
$padding-size: 20px;

.button {
  background: $primary-color;
  padding: $padding-size;
}
CSS:
$primary-color: red;
2. Nesting: SCSS cho phép viết selector lồng nhau giống cấu trúc HTML
- Ví dụ:
SCSS:
.navbar {
  background: black;

  ul {
    list-style: none;
  }

  li {
    display: inline-block;
  }

  a {
    color: white;
  }
}
CSS:
.navbar {
  background: black;
}

.navbar ul {
  list-style: none;
}

.navbar li {
  display: inline-block;
}

.navbar a {
  color: white;
}
3. Mixins: giúp tái sử dụng nhiều dòng CSS
- Ví dụ: 
SCSS:
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  @include flex-center;
  height: 200px;
}
CSS:
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}
4.Inheritance: Cho phép class kế thừa style từ class khác
-Ví dụ:
SCSS:
.button {
  padding: 10px;
  border-radius: 5px;
}

.primary-button {
  @extend .button;
  background: blue;
}
CSS:
.button,
.primary-button {
  padding: 10px;
  border-radius: 5px;
}

.primary-button {
  background: blue;
}
5. trình duyệt không đọc được file .scss vì .scss không phải CSS chuẩn và nó chứa cú pháp đặc  biệt như nesting, $variables, @mixin, @extend
6. Quy trình: SCSS -> Compiler -> CSS

Phần B: 
Câu B3:
SCSS Compile Command
sass scss/style.scss style.css

- Variables
Có hơn 8 variables
Dùng nhất quán
- Nesting
.header
.card
&:hover
&.featured
- Mixins
respond-to
flex-center
card-shadow
- Partials
_variables.scss
_mixins.scss
_components.scss
- Compile
Có lệnh compile SCSS → CSS

Phần C:
Câu C1:
1. Mobile — 375px
* Navigation
- Chỉ còn:
+ logo
+ nút search
+ avatar/menu
- Sidebar bị thu gọn thành icon
- Menu dạng mobile compact
* Content Grid
- Video hiển thị: 1 cột
* Elements bị ẩn
+ Một số text ở sidebar
+ Category dài bị rút gọn
+ Mini sidebar collapse
* Font Size
+ Nhỏ hơn desktop
+ Title video ngắn lại để vừa màn hình
2. Tablet — 768px
*Navigation
- Thanh search lớn hơn
- Sidebar bắt đầu mở rộng hơn mobile
- Có thêm category bar
* Content Grid
Video hiển thị: 2 cột
* Elements bị ẩn
- Ít bị ẩn hơn mobile
- Một số sidebar vẫn compact
* Font Size
- Lớn hơn mobile một chút
3. Desktop — 1440px
*Navigation
- Full navbar:
+ logo
+ search bar lớn
+ microphone
+ upload
+ notification
+ avatar
- Sidebar đầy đủ text + icon
* Content Grid
Video hiển thị: 4 cột
* Elements bị ẩn
- Gần như không ẩn
* Font Size
- Lớn hơn mobile
- Khoảng cách rộng hơn
