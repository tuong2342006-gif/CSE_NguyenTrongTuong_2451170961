Phần A:
Câu A1:
// Đoạn 1
console.log(x);
var x = 5;
// output:
undefined
// vì:
var bị hoisting nên biến được tạo trước,
nhưng chưa có giá trị nên là undefined

// Đoạn 2
console.log(y);
let y = 10;
// output:
ReferenceError
// vì:
let không được dùng trước khi khai báo
do Temporal Dead Zone

// Đoạn 3
const z = 15;
z = 20;
console.log(z);
// output:
TypeError
// vì:
const không thể gán lại giá trị

// Đoạn 4
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);
// output:
[1, 2, 3, 4]
// vì:
const không đổi được biến arr
nhưng vẫn sửa được dữ liệu bên trong array

// Đoạn 5
let a = 1;
{
    let a = 2;
    console.log("Trong block:", a);
}
console.log("Ngoài block:", a);
// output:
Trong block: 2
Ngoài block: 1
// vì:
let có block scope
a trong block và ngoài block là 2 biến khác nhau
Nguồn: tuan_4_javascript_basics/01_basics_introduction.md
 
Câu A2:
console.log(typeof null);          // object
console.log(typeof undefined);     // undefined
console.log(typeof NaN);           // number

console.log("5" + 3);              // 53
console.log("5" - 3);              // 2
console.log("5" * "3");            // 15

console.log(true + true);          // 2

console.log([] + []);              // ""
console.log([] + {});              // [object Object]
console.log({} + []);              // 0
Giải thích:  
(1) "5" + 3 vì dấu + có thể dùng để nối chuỗi nên số 3 bị ép kiểu thành string => "5" + "3" = "53"
(2) "5" - 3 vì dấu - chỉ dùng cho toán học nên nó sẽ ép "5" thành number => 5 - 3 = 2

Câu A3:
console.log(5 == "5");               // true
console.log(5 === "5");              // false

console.log(null == undefined);      // true
console.log(null === undefined);     // false

console.log(NaN == NaN);             // false

console.log(0 == false);             // true
console.log(0 === false);            // false

console.log("" == false);            // true
Giải thích: 
- == là so sánh giá trị, có ép kiểu dữ liệu 
- === là so sánh giá trị và kiểu dữ liệu
- nên dùng === vì an toàn hơn, không bị ép kiểu ngoài ý muốn, dễ debug lỗi và code rõ ràng hơn

Câu A4:
// Các giá trị falsy trong JavaScript
false
0
-0
0n
""
null
undefined
NaN

if ("0") console.log("A");
// In
// vì "0" là string nên truthy

if ("") console.log("B");
// Không in
// vì chuỗi rỗng là falsy

if ([]) console.log("C");
// In
// vì array rỗng vẫn là truthy

if ({}) console.log("D");
// In
// vì object rỗng vẫn là truthy

if (null) console.log("E");
// Không in
// vì null là falsy

if (0) console.log("F");
// Không in
// vì 0 là falsy

if (-1) console.log("G");
// In
// vì số khác 0 là truthy

if (" ") console.log("H");
// In
// vì " " là string có chứa space
// không phải chuỗi rỗng nên truthy

Câu A5:
// Cách 1
var greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;

// Cách 2
var url = `https://api.example.com/users/${userId}/orders?page=${page}`;

// Cách 3
var html = `
<div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
    <span>Giá: ${price}đ</span>
</div>
`;

Phần C:
Câu C1:
// Code đã sửa

function tinhGiaGiamGia(giaBan, phanTramGiam) {
    // kiểm tra input có phải số không
    if (
        typeof giaBan !== "number" ||
        typeof phanTramGiam !== "number"
    ) {
        return "Input không hợp lệ";
    }
    // kiểm tra phần trăm giảm
    if (phanTramGiam < 0 || phanTramGiam > 100) {
        return "Phần trăm giảm không hợp lệ";
    }
    let giamGia = giaBan * phanTramGiam / 100;
    let giaSauGiam = giaBan - giamGia;
    // kiểm tra miễn phí
    if (giaSauGiam === 0) {
        console.log("Sản phẩm miễn phí!");
    }
    return giaSauGiam;
}
// Test
const gia = tinhGiaGiamGia(100000, 20);
console.log("Giá sau giảm: " + gia + "đ");
const gia2 = tinhGiaGiamGia(50000, 110);
console.log("Giá: " + gia2);

// sửa var thành let
for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log("Item " + i);
    }, 1000);

}

// Lỗi 1
if (giaSauGiam = 0)
- Sai vì: dùng = là phép gán và ko được phép so sánh
- Sửa:
if (giaSauGiam === 0)

// Lỗi 2
const gia = tinhGiaGiamGia("100000", 20)
- Sai vì "100000" là string nên cần number
- Sửa: 
const gia = tinhGiaGiamGia(100000, 20)

// Lỗi 3
thiếu validate kiểu dữ liệu
- Sai vì nếu input không phải số thì hàm vẫn chạy
- Sửa: typeof giaBan !== "number"

// Lỗi 4
dùng var cho giamGia 
- Sai vì var có funtion scope
- Sửa let giamGia

// Lỗi 5
thiếu dấu ;

// Lỗi 6 (lỗi ẩn)
for (var i = 0; i < 5; i++)
- Sai vì var không có block scope, callback trong setTimeout chạy sau khi vòng lặp kết thúc, lúc đó i = 5
- Sửa: for (let i = 0; i < 5; i++)

Câu C2:
const menu = [
    {
        name: "Phở bò",
        price: 65000,
        quantity: 2
    },
    {
        name: "Trà đá",
        price: 5000,
        quantity: 3
    },
    {
        name: "Bún chả",
        price: 55000,
        quantity: 1
    }

];
// true = có tip
// false = không tip
const hasTip = true;

// giả lập ngày Wednesday
const isWednesday = true;
let total = 0;

console.log("╔══════════════════════════════════════╗");
console.log("║         HÓA ĐƠN NHÀ HÀNG            ║");
console.log("╠══════════════════════════════════════╣")

// in món ăn
for (let i = 0; i < menu.length; i++) {
    let item = menu[i];
    let itemTotal = item.price * item.quantity;
    total += itemTotal;

    console.log(
        `║ ${i + 1}. ${item.name} x${item.quantity} @${item.price / 1000}k = ${itemTotal / 1000}k`
    );
}

console.log("╠══════════════════════════════════════╣");

// tính giảm giá
let discountPercent = 0;

if (total > 1000000) {

    discountPercent = 15;

}
else if (total > 500000) {

    discountPercent = 10;
}
// giảm thêm thứ 4
if (isWednesday) {
    discountPercent += 5;
}
let discount = total * discountPercent / 100;

let afterDiscount = total - discount;

// VAT
let vat = afterDiscount * 0.08;

// tip
let tip = 0;
if (hasTip) {
    tip = afterDiscount * 0.05;
}
// tổng thanh toán
let finalTotal = afterDiscount + vat + tip;

console.log(
    `║ Tổng cộng:           ${total.toLocaleString()}đ`
);
console.log(
    `║ Giảm giá (${discountPercent}%):      ${discount.toLocaleString()}đ`
);
console.log(
    `║ VAT (8%):            ${vat.toLocaleString()}đ`
);
console.log(
    `║ Tip (5%):            ${tip.toLocaleString()}đ`
);
console.log("╠══════════════════════════════════════╣");
console.log(
    `║ THANH TOÁN:          ${finalTotal.toLocaleString()}đ`
);
console.log("╚══════════════════════════════════════╝");