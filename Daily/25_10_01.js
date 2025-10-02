/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
    let empty = numBottles;
    let drank = numBottles;
    while (empty >= numExchange) {
        empty -= numExchange;
        drank++;
        empty++;
    }
    return drank;
};

let numBottles = 9, numExchange = 3;
console.log(numWaterBottles(numBottles, numExchange)); //13

numBottles = 15, numExchange = 4;
console.log(numWaterBottles(numBottles, numExchange)); //19

/*
There are numBottles water bottles that are initially full of water. You can exchange numExchange empty water bottles from the market with one full water bottle.

The operation of drinking a full water bottle turns it into an empty bottle.

Given the two integers numBottles and numExchange, return the maximum number of water bottles you can drink.
    */
