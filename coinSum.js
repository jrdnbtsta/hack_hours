/*
In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:
1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
1 euro (100p)
2 euro (200p)
It is possible to make £2 in the following way:
1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?
example usage of `makeChange`:
// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/

function coinSum(target) {
    
    let coins = [1, 2, 5, 10, 20, 50, 100, 200];

    function findChange(target, coins){
        if(coins.length === 0) return 0;
        if(target === 0) return 1;
        if(target < 0) return 0;

        return findChange(target - coins[0], coins) + findChange(target, coins.slice(1));
    }

    return findChange(target, coins);
}

console.log(coinSum(200));