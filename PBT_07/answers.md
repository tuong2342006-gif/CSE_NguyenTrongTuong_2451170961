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