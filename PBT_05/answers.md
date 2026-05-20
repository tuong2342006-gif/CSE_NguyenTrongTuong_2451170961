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

