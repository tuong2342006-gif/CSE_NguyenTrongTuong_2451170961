Phần A:
Câu A1:
1. type="email" - Ô nhập text, tự kiểm tra có @ - dùng cho form đăng ký 
2. type="file" - nút chọn file từ máy - có kiểm tra loại file - dùng upload ảnh đánh giá sản phẩm
3. type="range" - thanh kéo - giới hạn min/max - dùng chọn khoảng giá
4. type="color" - bảng chọn màu - chỉ chọn màu hợp lệ - dùng cho màu sản phẩm 
5. type="date" - hiển thị lịch chọn ngày - kiểm tra định dạng ngày hợp lệ - dùng chọn ngày giao hàng
6. type="hidden" - không hiển thị trên giao diện - dùng lưu ID sản phẩm
7. type="time" - chọn ô giờ - kiểm tra định dạng - dùng chọn giờ giao hàng
8. type="week" - chọn tuần trong năm - kiểm tra hợp lệ - dùng chọn tuần giao hàng
9. type="reset" - nút reset form - dùng xóa toàn bộ dữ liệu đã nhập
10. type="tel" - ô nhập số điện thoại - dùng nhập số điện thoại
11. type="radio" - nút tròn chọn 1 trong nhiều - chỉ được chọn 1 - dùng chọn phương thức thanh toán
Nguồn: 07_forms_interactive.md + Core Technical Truth

Câu A2:
TH1: Kết quả là không submit được vì required bắt buộc phải nhập, để trống nên trình duyệt báo lỗi.
TH2: Kết quả là không submit được vì type="email" yêu cầu đúng định dạng email phải có @.
TH3: Kết quả là không submit được vì 15 > max(10), vượt giới hạn.
TH4: Kết quả là không submit được vì pattern yêu cần đúng 10 chữ số, nhưng "abc123" có chữ và không đủ 10 số.
TH5: Kết quả là không submit được vì minlegth = 8 nhưng chỉ nhập 3 ký tự.
So sánh:
- kết quả thực tế giống dự đoán
- HTML5 validation hoạt động đúng:
required - bắt buộc
type - kiểm tra định dạng
min/max - giới hạn số
pattern - regex
minlegth - độ dài
Nguồn: 07_forms_interactive.md + Core Technical Truth

Câu A3:
1. <label for="email"> quan trọng vì <label> liên kết với <input> thông qua for="id" và khi dùng screen reader, nó sẽ đọc tên của trường nhập thay vì chỉ đọc "edit text"
2. dùng <fieldset> + <legend> khi nhóm nhiều input liên quan với nhau 
Ví dụ 
<fieldset>
    <legend>Phương thức thanh toán</legend>

    <input type="radio" name="pay">Tiền mặt<br>
    <input type="radio" name="pay>Chuyển khoản<br>
</fieldset>
3. dùng aria-label khi không có <label> hiển thị hoặc element không có text 
Ví dụ: <button aria-label="Tìm kiếm"></button>
4. Không nên dùng aria-label khi đã có <label> vì <label> đã cung cấp thông tin đầy đủ rồi, dùng thêm aria-label sẽ gây trùng lặp và gây rối cho screen reader
Nguồn: 07_forms_interactive.md + Accessbilities

Câu A4:
1. loading="lazy" trên thẻ <img> là thuộc tính của <img> giúp trì hoãn tải ảnh cho đến khi ảnh gần xuất hiện trong màn hình.
Cản thiện: 
-Tăng tốc độ load trang ban đầu
-Giảm băng thông
-Tốt cho hiệu năng
Không nên dùng khi ảnh ở trang đầu, ảnh quan trọng như logo, banner chính vì lazy load có thể làm ảnh hiển thị chậm hơn.
2. Cần nhiều <source> trong <video> vì trình duyệt khác nhau hỗ trợ định dạng khác nhau và nếu 1 format không chạy thì trình duyệt sẽ dùng format khác .
3 định dạng video phổ biến:
-MP4(.mp4)
-WebM(.webm)
-Ogg<.ogg>
3. Thuộc tính alt của <img> dùng để mô tả nội dung ảnh giúp screen reader đọc cho người khiếm thị, hiển thị khi ảnh lỗi và tốt cho SEO.
alt cho các trường hợp:
-Ảnh sản phẩm iPhone 12
alt="iPhone 16 Pro màu xanh"
-Ảnh trang trí
alt=""
-Ảnh biểu đồ doanh thu Q1/2026
alt="Biểu đồ doanh thu quý 1 năm 2023 tăng từ tháng 2 đến tháng 4"
Nguồn: 06_graphics_multimedia.md + Core Technical Truth

Câu A5:
1. Dùng cách 1 khi ảnh chỉ để đơn giản, không cần chú thích thêm
Ví dụ:
<img src="avatar.jpg" alt="Ảnh đại diện">
<img src="logo.jpg" alt="Logo trường">
2. Dùng cách 2 khi ảnh là nội dung quan trọng, cần có chú thích và mô tả bổ sung
Ví dụ:
<figure>
    <image src="iphone.jpg" alt="iPhone 16">
    <figcaption>iPhone 16 - 24.000.000đ<figcaption>
</figture>

<figture>
    <image src="chart.png" alt="Biểu đồ doanh thu">
    <figcaption>Doanh thu tăng trưởng</figcaption>
</figture>
