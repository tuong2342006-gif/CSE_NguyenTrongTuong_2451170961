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

Câu A2:
- TH1: 
.container { display: flex; }
.item { flex: 1; }
+ display: flex là các item nằm trên cùng 1 hàng
+ flex: 1 là chia đều chiều rộng
| 1 | 2 | 3 | 4 | - bố cục
+ 1 hàng và 4 cột bằng nhau
- TH2: 
.container {
  display: flex;
  flex-wrap: wrap;
}

.item {
  width: 45%;
  margin: 2.5%;
}
+ wrap là xuống hàng khi thiếu chỗ
+ 45% + 2,5% + 2,5% = 50%
+ mỗi item chiến khoảng nửa hàng
| 1 | 2 |
| 3 | 4 | - bố cục
| 5 | 6 |
+ 3 hàng và 2 cột
- TH3: 
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
+ space-between là item đầu sát trái, item đầu sát phải, item giữa nằm giữa
+ align-items: center là căn giữa theo chiều dọc
|1                2                3| - bố cục
+ 3 item nằm ngang và khoảng cách đều
- TH4:
.container {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  gap: 20px;
}
+ Grid có: 
Cột 1 = 200px
Cột 2 = chiếm phần còn lại
Cột 3 = 200px
Khoảng cách giữa cột = 20px
|  item1  |     item2      |  item3  |
| 200px   |      1fr       | 200px   | - bố cục
+ 1 hàng và 3 cột
sidebar | content | sidebar
- TH5: 
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
+ Có 3 cột bằng nhau và 7 items sẽ tự xuống hàng
| 1 | 2 | 3 |
| 4 | 5 | 6 | - bố cục
| 7 |
+ 3 hàng và hàng cuối chỉ cps item 7 ở cột đầu tiên
 Ph
