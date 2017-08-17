/**
 * returns every sequence of throws a single player could throw over a three-round game of rock-paper-scissors
 * rockPaperScissors(1); -> [['rock'],['paper'],['scissors']]
 * rockPaperScissors(2); -> 
 * [['rock','rock'],['rock','paper'],['rock','scissors'],
 * ['paper','paper'],['paper','scissors'],['paper','rock'],
 * ['scissors','scissors'],['scissors','paper'],['scissors','rock']]
 */
function rockPaperScissors(num) {
    let possibilities = [];
    
    if(num === 0) return possibilities;

    function find_possibilities(n, array) {
        if(n === 0) return possibilities.push(array);

        find_possibilities(n-1, array.concat('rock'));
        find_possibilities(n-1, array.concat('paper'));
        find_possibilities(n-1, array.concat('scissors'));
    }

    find_possibilities(num, []);
    
    return possibilities;
}


console.log(rockPaperScissors(3));