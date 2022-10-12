let lunch = [
    {item: "Hot Honey Chicken Sandwhich", price: 6.50},
    {item: "Mango Pineapple Lemonade", price: 1.50},
    {item: "Strawberry frosty", price: 2.50},
];


function calculateSubtotal(lunch) {
    let subtotal = 0;
    for (let index = 0; index < lunch.length; index++) {
        const item = lunch[index];
        subtotal += item.price;
    }
    return subtotal;
}

function addTip(subtotal, tipPrecentage) {
    let total = subtotal + subtotal * tipPrecentage;
    return total;
}

function calculateCheck(lunch, tipPercentage) {
    let subtotal = calculateSubtotal(lunch);
    let total = addTip(subtotal, tipPercentage);
    return total;
}
console.log(calculateCheck(lunch, 0.22).toFixed(2));
