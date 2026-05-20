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

