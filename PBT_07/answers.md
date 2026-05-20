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
