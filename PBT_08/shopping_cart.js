function createCart() {

    // private data
    let items = [];

    let discount = 0;

    let discountType = "";

    return {
        addItem(product, quantity = 1) {

            const existing = items.find(
                item => item.id === product.id
            );

            if (existing) {
                existing.quantity += quantity;
            }

            else {
                items.push({
                    ...product,
                    quantity
                });
            }

        },
        removeItem(productId) {
            items = items.filter(
                item => item.id !== productId
            );
        },
        updateQuantity(productId, newQuantity) {
            const item = items.find(
                item => item.id === productId
            );
            if (item) {
                item.quantity = newQuantity;
            }

        },
        getTotal() {
            let total = items.reduce((sum, item) => {
                return sum + (
                    item.price * item.quantity
                );
            }, 0);
            if (discountType === "percent") {
                total = total - (total * discount / 100);
            }
            else if (discountType === "fixed") {
                total = total - discount;
            }
            return total;

        },
        applyDiscount(code) {
            if (code === "SALE10") {
                discount = 10;
                discountType = "percent";
            }
            else if (code === "SALE20") {
                discount = 20;
                discountType = "percent";
            }
            else if (code === "FREESHIP") {
                discount = 30000;
                discountType = "fixed";
            }
            else {
                console.log("Mã giảm giá không hợp lệ");
            }

        },
        printCart() {
            console.log(
                "┌──────────────────────────────────────────────────────────────┐"
            );

            console.log(
                "│ # │ Sản phẩm      │ SL │ Đơn giá      │ Tổng               │"
            );

            console.log(
                "├──────────────────────────────────────────────────────────────┤"
            );
            items.forEach((item, index) => {

                let total =
                    item.price * item.quantity;
                console.log(

                    `│ ${index + 1} │ ${item.name.padEnd(14)} │ ${String(item.quantity).padEnd(2)} │ ${item.price.toLocaleString().padEnd(13)} │ ${total.toLocaleString().padEnd(18)} │`

                );

            });
            console.log(
                "├──────────────────────────────────────────────────────────────┤"
            );

            console.log(

                `│ Tổng cộng: ${this.getTotal().toLocaleString().padStart(45)}đ │`

            );

            console.log(
                "└──────────────────────────────────────────────────────────────┘"
            );

        },
        getItemCount() {
            return items.reduce((sum, item) => {
                return sum + item.quantity;
            }, 0);

        },
        clearCart() {

            items = [];

            discount = 0;

            discountType = "";

        }

    };

}

// TEST
const cart = createCart();
cart.addItem(
    {
        id: 1,
        name: "iPhone 16",
        price: 25990000
    },
    1
);
cart.addItem(
    {
        id: 3,
        name: "AirPods Pro",
        price: 6990000
    },
    2
);
cart.addItem(
    {
        id: 1,
        name: "iPhone 16",
        price: 25990000
    },
    1
);
cart.printCart();
cart.applyDiscount("SALE10");
cart.printCart();
console.log(
    "Số SP:",
    cart.getItemCount()
);
cart.removeItem(3);
console.log(
    "Sau xóa:",
    cart.getItemCount()
);