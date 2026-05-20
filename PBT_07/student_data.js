const students = [
    { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
    { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
    { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
    { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
    { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
    { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
    { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" },
];



let gioi = 0;
let kha = 0;
let trungBinh = 0;
let yeu = 0;

let maxStudent = null;
let minStudent = null;

let totalMath = 0;
let totalPhysics = 0;
let totalCs = 0;

let maleTotal = 0;
let femaleTotal = 0;

let maleCount = 0;
let femaleCount = 0;



console.log("| STT | Tên    | TB   | Xếp loại    |");
console.log("|-----|--------|------|-------------|");


for (let i = 0; i < students.length; i++) {

    let student = students[i];

    let average =
        student.math * 0.4 +
        student.physics * 0.3 +
        student.cs * 0.3;

    average = average.toFixed(1);

    let rank = "";

    if (average >= 8.0) {
        rank = "Giỏi";
        gioi++;
    }

    else if (average >= 6.5) {
        rank = "Khá";
        kha++;
    }

    else if (average >= 5.0) {
        rank = "Trung bình";
        trungBinh++;
    }

    else {
        rank = "Yếu";
        yeu++;
    }

    console.log(
        `| ${i + 1} | ${student.name} | ${average} | ${rank} |`
    );

    if (maxStudent === null || average > maxStudent.average) {
        maxStudent = {
            name: student.name,
            average: average
        };
    }

    if (minStudent === null || average < minStudent.average) {
        minStudent = {
            name: student.name,
            average: average
        };
    }

    totalMath += student.math;
    totalPhysics += student.physics;
    totalCs += student.cs;

    if (student.gender === "M") {
        maleTotal += Number(average);
        maleCount++;
    }

    else {
        femaleTotal += Number(average);
        femaleCount++;
    }
}

console.log("\nThống kê xếp loại");

console.log("Giỏi:", gioi);
console.log("Khá:", kha);
console.log("Trung bình:", trungBinh);
console.log("Yếu:", yeu);



console.log("\nSinh viên điểm cao nhất");

console.log(
    `${maxStudent.name} - ${maxStudent.average}`
);



console.log("\nSinh viên điểm thấp nhất");

console.log(
    `${minStudent.name} - ${minStudent.average}`
);



console.log("\nĐiểm trung bình từng môn");

console.log(
    "Math:",
    (totalMath / students.length).toFixed(1)
);

console.log(
    "Physics:",
    (totalPhysics / students.length).toFixed(1)
);

console.log(
    "CS:",
    (totalCs / students.length).toFixed(1)
);

console.log("\nĐiểm TB theo giới tính");

console.log(
    "Nam:",
    (maleTotal / maleCount).toFixed(1)
);

console.log(
    "Nữ:",
    (femaleTotal / femaleCount).toFixed(1)
);