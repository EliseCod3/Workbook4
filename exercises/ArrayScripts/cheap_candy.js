let products = [
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


    //Which candies costs less than $4.00?
    
    console.log("Candies that cost less than $4.00")
    let cheapCandies = [];

    for (let index = 0; index < products.length; index++) {
        const product = products[index];
        if (product.price < 4.00) {
            cheapCandies.push(product);
        }
    }
    console.log(cheapCandies);

    console.log("");
    //Which candies has "M&M" in its name?

    function searchCandy(products, name) {
        for (let index = 0; index < products.length; index++) {
            const candy = products[index];
            if (candy.product.indexOf(name) != -1) {
                console.log(candy.product);
                
            }
        }
    }
    searchCandy(products, "M&Ms");

        //let mmCandies = [];
        //for (let index = 0; index < products.length; index++) {
        //    const candy = products[index];
        //    if (candy == "M&Ms") {
        //        mmCandies.push(candy.product);
        //    }
        //}
        //console.log(mmCandies);
    

    console.log("");
    //Do we carry "Swedish Fish"?
    for (let index = 0; index < products.length; index++) {
        const candy = products[index];
        if (candy.product == "Swedish Fish") {
            console.log("Yes we do carry Swedish Fish");
        }
        
    }