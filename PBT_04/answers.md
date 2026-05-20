Phần A:
Câu A1:

1. Position: static
- Vẫn chiếm chỗ trong flow: Có
- Tham chiếu vị trí: Vị trí mặc định của document
- Cuộn theo trang: Có
- Use case: Layout bình thường
2. Position: relative
- Vẫn chiếm chỗ trong flow: Có
- Tham chiếu vị trí: So với vị trí ban đầu của chính nó
- Cuộn theo trang: Có 
- Use case: Dịch chuyển nhẹ element làm mốc cho absolute
3. Position: ablosule
- Vẫn chiếm chỗ trong flow: Không
- Tham chiếu vị trí: So với tổ tiên gần nhất có positon khác với static 
- Cuộn theo trang: Có
- Use case: Popup nhỏ, badge, icon góc
4. Position: fixed
- Vẫn chiếm chỗ trong flow: Không
- Tham chiếu vị trí: So với viewport
- Cuộn theo trang: Không
- Use case: Navbar cố định, nút back-to-top
5. Position: sticky
- Vẫn chiếm chỗ trong flow: Có
- Tham chiếu vị trí: ban đầu như relative, khi cuộn thì bám vào viewport
- Cuộn theo trang: Chỉ bám khi tới ngưỡng
- Use case: Header dính đầu trang
Câu hỏi thêm: 
- Absolute tham chiếu body khi không tìm thấy ancestor nào có position khác static
- Absolute tham chiếu parent khi parent có position: relative; 
hoặc 
position: absolute;
position: fixed;
position: sticky;
-"Nearest positioned ancestor" là element cha gần nhất có position khác static.
Nguồn tham khảo: tuan_2_css_core/12_css_positioning.md
