function maxProfit(prices) {
    let minPrice = Infinity;   
    let maxProfit = 0;        

    for (let price of prices) {

        if (price < minPrice) {
            minPrice = price;
        } else {
           
            maxProfit = Math.max(maxProfit, price - minPrice);
        }
    }

    return maxProfit;
}

console.log(maxProfit([7,1,5,3,6,4])); 

