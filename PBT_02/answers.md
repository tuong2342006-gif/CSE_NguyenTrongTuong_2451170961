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

