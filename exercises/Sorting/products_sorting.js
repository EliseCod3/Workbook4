products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Skittles Original", price: 1.98},
    {product: "Snickers Minis", price: 4.48},
    {product: "Hershey Milk Chocolate Bar", price: 6.29},
    {product: "Nerds", price: 3.48},
    {product: "Sour Patch Kids", price: 5.77},
    {product: "KitKat", price: 4.66},
    // TODO: fill the array with 10 candies of various
    // price ranges
    ];

    products.sort(function(a, b) {
        if (a.product < b.product) return -1;
        else if (a.product == b.product) return 0;
        else return 1;
    });

    console.log(products);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    
    products.sort(function(a, b) {
        return b.price - a.price;
    });

    console.log(products);