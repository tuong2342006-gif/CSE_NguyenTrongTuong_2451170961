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

Câu A3:
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. Lấy các số chẵn
const evenNums = nums.filter(n => n % 2 === 0);
console.log(evenNums);
// [2, 4, 6, 8, 10]

// 2. Nhân mỗi số với 3
const multiplyBy3 = nums.map(n => n * 3);
console.log(multiplyBy3);
// [3, 6, 9, ..., 30]

// 3. Tính tổng tất cả
const total = nums.reduce((sum, n) => sum + n, 0);
console.log(total);
// 55

// 4. Tìm số đầu tiên > 7
const firstGreaterThan7 = nums.find(n => n > 7);
console.log(firstGreaterThan7);
// 8

// 5. Kiểm tra CÓ số > 10 không
const hasGreaterThan10 = nums.some(n => n > 10);
console.log(hasGreaterThan10);
// false

// 6. Kiểm tra TẤT CẢ đều > 0
const allGreaterThan0 = nums.every(n => n > 0);
console.log(allGreaterThan0);
// true

// 7. Tạo mảng "Số X là [chẵn/lẻ]"
const evenOddText = nums.map(
    n => `Số ${n} là ${n % 2 === 0 ? "chẵn" : "lẻ"}`
);
console.log(evenOddText);

// 8. Đảo ngược mảng (không mutate gốc)
const reversedNums = [...nums].reverse();
console.log(reversedNums);
// [10, 9, ..., 1]

Câu A4:
const product = {
    name: "iPhone 16",
    price: 25990000,
    specs: {
        ram: 8,
        storage: 256,
        color: "Titan"
    }
};
// Destructuring
const {
    name,
    price,
    specs: { ram, color }
} = product;
console.log(name, price, ram, color);
// iPhone 16 25990000 8 Titan
console.log(specs);
// ReferenceError

- Giải thích: 
specs: { ram, color } chỉ lấy ram và color không tạo biến specs nên console.log(specs) sẽ lỗi
// Spread
const updated = {
    ...product,
    price: 23990000,
    sale: true
};
Output: 
console.log(updated.price);
// 23990000

console.log(updated.sale);
// true

console.log(product.price);
// 25990000
Giải thích: spread tạo object mới, product gốc không bị đổi

// Spread gotcha
const copy = { ...product };
copy.specs.ram = 16;
console.log(product.specs.ram);
Output:
16
Giải thích spread chỉ copy shallow copy và copy nông
nên copy.specs === product.specs
// true
khi sửa copy.specs.ram = 16 thì object gốc cũng bị đổi