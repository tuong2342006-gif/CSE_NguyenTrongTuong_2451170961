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
