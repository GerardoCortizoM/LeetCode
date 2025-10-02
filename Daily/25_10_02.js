/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var maxBottlesDrunk = function (numBottles, numExchange) {
    let res = numBottles;
    let fullBottles = 0;
    let empty = numBottles;
    while (empty >= numExchange) {
        while (empty >= numExchange) {
            fullBottles++;
            empty -= numExchange;
            numExchange++;
        }
        res += fullBottles;
        empty += fullBottles;
        fullBottles = 0;
    }
    return res;
};

let numBottles = 13, numExchange = 6;
console.log(maxBottlesDrunk(numBottles, numExchange)); //15

numBottles = 10, numExchange = 3;
console.log(maxBottlesDrunk(numBottles, numExchange)); //13

//Another solution, not using two loops but I don't think it is faster. Leetcode gave it basically the same score.
/*

var maxBottlesDrunk = function (numBottles, numExchange) {
    let res = numBottles;
    let empty = numBottles;
    while (empty >= numExchange) {
            empty -= numExchange;
            numExchange++;
            empty++;
            res++;
    }
    return res;
};
*/

/*
You are given two integers numBottles and numExchange.

numBottles represents the number of full water bottles that you initially have. In one operation, you can perform one of the following operations:

Drink any number of full water bottles turning them into empty bottles.
Exchange numExchange empty bottles with one full water bottle. Then, increase numExchange by one.
Note that you cannot exchange multiple batches of empty bottles for the same value of numExchange. For example, if numBottles == 3 and numExchange == 1, you cannot exchange 3 empty water bottles for 3 full bottles.

Return the maximum number of water bottles you can drink.
*/
