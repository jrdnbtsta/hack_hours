function nth_fib(num) {
    return num < 2 ? num : nth_fib(num-1) + nth_fib(num-2);
}

console.log(nth_fib(10));