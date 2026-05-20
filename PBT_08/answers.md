Phần A:
Câu A1:
// 1. Function Declaration
function tinhThueBaoHiem(luong) {
    let thue = 0;
    if (luong > 11000000) {
        thue = luong * 0.1;
    }
    return {
        thue: thue,
        thuc_nhan: luong - thue
    };
}
console.log(tinhThueBaoHiem(15000000));
// 2. Function Expression
const tinhThueBaoHiem2 = function (luong) {
    let thue = 0;
    if (luong > 11000000) {
        thue = luong * 0.1;
    }
    return {
        thue: thue,
        thuc_nhan: luong - thue
    };
};
console.log(tinhThueBaoHiem2(15000000));

// 3. Arrow Function
const tinhThueBaoHiem3 = (luong) => {
    let thue = 0;
    if (luong > 11000000) {
        thue = luong * 0.1;
    }
    return {
        thue: thue,
        thuc_nhan: luong - thue
    };
};
console.log(tinhThueBaoHiem3(15000000));

3 cách khác nhau về hoisting
// Function Declaration  được hoisting toàn bộ hàm
- Ví dụ: 
console.log(test());

function test() {
    return "Hello";
}
- Kết quả: Hello

// Function Expression không hoisting function
- Ví dụ:
console.log(test2());

const test2 = function () {
    return "Hello";
};
- Kết quả:
ReferenceError

// Arrow Function cũng giống Function Expression
- Ví dụ:
console.log(test3());

const test3 = () => {
    return "Hello";
};
- Kết quả": ReferenceError

Câu A2:
// Đoạn 1
function counter() {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
}

const c = counter();

console.log(c.increment());  
// 1
console.log(c.increment());  
// 2
console.log(c.increment());  
// 3
console.log(c.decrement());  
// 2
console.log(c.getCount());   
// 2

// Đoạn 2

for (var i = 0; i < 3; i++) {

    setTimeout(() => console.log("var:", i), 100);

}
for (let j = 0; j < 3; j++) {

    setTimeout(() => console.log("let:", j), 200);

}
Output: 
var: 3
var: 3
var: 3

let: 0
let: 1
let: 2

Giải thích:
- var cps function scope không cố block scope
nên in  3 3 3
- let có block scope
nên callback nhớ đúng giá trị từng vòng lặp 0 1 2
