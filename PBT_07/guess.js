let randomNumber = Math.floor(Math.random() * 100) + 1;
let maxTurns = 7;
let count = 0;
let guessedNumbers = [];

while (count < maxTurns) {
    let input = prompt(
        `Nhập số từ 1-100\nLượt ${count + 1}/${maxTurns}`
    );
    let guess = Number(input);
    if (
        input === null ||
        input.trim() === "" ||
        isNaN(guess) ||
        guess < 1 ||
        guess > 100
    ) {
        alert("Vui lòng nhập số từ 1 đến 100");
        continue;
    }
    if (guessedNumbers.includes(guess)) {
        alert("Bạn đã đoán số này rồi!");
        continue;
    }
    guessedNumbers.push(guess);
    count++;
    if (guess === randomNumber) {
        alert(`Đúng rồi! Bạn đoán đúng sau ${count} lần!`);
        break;
    }
    else if (guess < randomNumber) {
        alert("Cao hơn");
    }
    else {
        alert("Thấp hơn");
    }
    if (count === maxTurns) {
        alert(
            `Bạn đã thua!\nĐáp án là: ${randomNumber}`
        );

    }
}