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
Nguồn tham khảo: tuan_3_css_advanced/13_creating_responsive_layouts.md

 Phần C
 Câu C1:
 -Tình huống: Navigation bar ngang(logo + menu + buttons)
 + nên dùng: flexbox vì navbar là layout 1 chiều (ngang).Flexbox rất mạnh cho căn trái/phải, căn giữa và spacing giữa các items
 - Lưới ảnh Instagram(3 cột đều nhau, số ảnh không biết trước) 
 + nên dùng: grid vì đây là layout 2 chiều(hàng + cột).Grid giúp chia cột dều và tự động xuống hàng rất dễ
 - Layout blog: main content + sidebar
 + nên dùng: grid vì có cấu trúc rõ ràng nhiều vùng: content + sidebar.Grid phù hợp cho layout tổng thể của trang
 - Footer với 4 cột thông tin
 + nên dùng : được cả 2 grid hoặc flexbox vì nếu chỉ là 1 hàng ngang đơn giản thì flexbox đủ dùng. Nếu muốn có cột đều nhau, responsive đẹp và grid tốt hơn
 - Card sản phẩm (ảnh trên, text giữa, nút dưới — nút luôn dính đáy)
 + nên dùng: flexbox vì Card là layout theo chiều dọc. Dùng flex-direction: column và margin-top: auto để đẩy nút xuống đáy rất tiện
 Câu C2:
 -Lỗi 1: Cards không đều chiều cao, nút bị lệch
 Nguyên nhân: card có lượng text khác nhau: card nhiều text nên cao hơn và card ít text nên thấp hơn.
 Nút .btn nằm ngay sau nội dung nên bị lệch lên/xuống
 Code lỗi: 
 .card-container{
  display:flex;
  flex-wrap:wrap;
}

.card{
  width:30%;
  margin:1.5%;
}
Code sửa:
.card{
  width:30%;
  margin:1.5%;

  display:flex;
  flex-direction:column;
}

.btn{
  margin-top:auto;
}
Giải thích: 
+ flex-direction: column - xếp nội dung theo chiều dọc
+ margin-top: auto - đẩy nút xuống đáy card
-> tất cả nút sẽ thẳng hàng
Lỗi 2: item không nằm giữa màn hình
+ Nguyên nhân 
nhưng chưa dùng:
justify-content
align-items
+ Mặc định:
justify-content: flex-start;
align-items: stretch;
-> item dính góc trên trái
+Code sửa: 
.hero{
  height:100vh;

  display:flex;

  justify-content:center;

  align-items:center;
}

.hero-content{
  text-align:center;
}
+ Giải thích:
justify-content: center: căn giữa ngang
align-items: center: căn giữa dọc
- Lỗi 3: sidebar bị co lại
+ Nguyên nhân 
Trong flexbox: 
flex-shrink: 1; là mặc định nên sidebar sẽ bị co khi content quá lớn
+ Code lỗi: 
.layout{
  display:flex;
}

.sidebar{
  width:250px;
}

.content{
  flex:1;
}
+ Cách sửa: 
.sidebar{
  width:250px;

  flex-shrink:0;
}
+ Giải thích:
flex-shrink: 0 - cấm sidebar co lại
flex: 0 0 250px - không grow, không shrink và width = 250px