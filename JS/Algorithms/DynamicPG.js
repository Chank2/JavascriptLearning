//learn to cache
function addTo80(n) {
    return n + 80;
} 
addTo80(5)

let cache = {};
function memoizeAddTo80(n) {
if (n in cache) {
    return cache[n];
} else {
    console.log('long time');
    const answer = n + 80;
    cache[n] = answer;
    return answer;
}
}

// console.log(1, memoizeAddTo80(6))
// // console.log(cache)
// // console.log('-----------')
// console.log(2, memoizeAddTo80(6))

// let's make that better with no global scope. This is closure in javascript so.
function memoizeAddTo80(n) { 
let cache = {};
    return function(n) {
        if (n in cache) {
        return cache[n];
        } else {
        console.log('long time');
        const answer = n + 80;
        cache[n] = answer;
        return answer;
        }
    }
}

const memoized = memoizeAddTo80();
console.log(1, memoized(6))
// console.log(cache)
// console.log('-----------')
console.log(2, memoized(6))

//Fibonacci
let calculations = 0;
function Fibonacci(n) {
    // console.log(calculation++);
    if(n<2) {return n}
    return Fibonacci(n-1) + Fibonacci(n-2);
}
function fibonacciMaster() { // O(n) but increase the space complexity
    let cache = {};
    return function fib(n) {
        calculations++;
        if (n in cache) {
            return cache[n];
        }
        else {
            if(n<2) {return n}
            else {
                cache[n] = fib(n-1) + fib(n-2);
                return cache[n];
            }
        }
    }
}

function fibonacciMaster2(n) {
    let answer = [0,1];
    for ( let i = 2; i <= n; i++) {
      answer.push(answer[i-2]+ answer[i-1]);
    }
    return answer.pop();
  }

const fasterFib = fibonacciMaster();
console.log('Slow', Fibonacci(35))
console.log('DP', fasterFib(100));
console.log('DP2', fibonacciMaster2(100));
console.log('we did ' + calculations + ' calculations');

  