function decrement(num) {
    if(num === 0) {
        return;
    }
    decrement(num-1)
    console.log(num)
}
decrement(10);
function decrement(num) { 
    if (num === 0 ) {   
        return;
    }
    decrement(num-1)
    if(num % 2 === 0) {
      console.log(num)
    }
}
decrement(10);
function fatorial(n) {
    if(n == 0 || n == 1) {
        return 1;
    }
    return n * fatorial(n-1)
}
console.log(fatorial(5));