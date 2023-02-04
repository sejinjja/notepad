
function foo(a, b) {
    console.log(a, b) // 1 2
    console.log(arguments) // Arguments(2) [1, 2, callee: ƒ, Symbol(Symbol.iterator): ƒ]
}

foo(1, 2)


function foo(a, b) {
    console.log(a, b) // 1 2
    console.log(arguments) // Arguments(2) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
}

foo(1, 2, 3)


function foo(a, b) {
    console.log(arguments.length) // 3
    console.log(arguments[0]) // 1
    console.log(JSON.stringify(arguments)) // '{"0":1,"1":2,"2":3}'
}

foo(1, 2, 3)


function foo(a, b) {
    console.log(arguments.map(v => v * 2)) // Uncaught TypeError: arguments.map is not a function
}

foo(1, 2, 3)

function foo(a, b) {
    for( const v of arguments ) console.log(v) // 1 2 3
    const arr = [...arguments]
    return arr.map(v => v * 2) // [2, 4, 6]
}

foo(1, 2, 3)

function foo() {} // 유명 함수
const bar = function() {} // 익명함수를 가지고 있는 bar


getFacArr = function (arr) {
    __fac = function (n) { return !(n > 1) ? 1 : __fac(n - 1) * n; }
    __r = [];
    for( __i = 0; __i < arr.length; __i++ ) __r.push(__fac(arr[__i]));
    return __r;
}
console.log(getFacArr([1, 2, 5])); // [1, 2, 120]
console.log(__fac);


getFacArr = function (arr) {
    __r = [];
    for( __i = 0; __i < arr.length; __i++ ) {
        __r.push( ( function (n) {
            return !(n > 1) ? 1 : arguments.callee(n - 1) * n;
        } )( arr[__i] ) )

    }
    return __r;
}
console.log(getFacArr([1, 2, 5])); // [1, 2, 120]

function max(a, b) {
    return a > b ? a : b
}

function max(a, b) {
    const arr = [a, b, c, d, e]
    let max = a
    for( let i = 1; i < arr.length; i++ ) {
        max = max < arr[i] ? arr[i] : max
    }
    return max
}

max(1, 2)
max(1, 2, 3)
max(1, 2, 3, 4)
max(1, 2, 3, 4, 5)

function max(a, b) {
    const arr = [...arguments]
    let max = a
    for( let i = 1; i < arr.length; i++ ) {
        max = max < arr[i] ? arr[i] : max
    }
    return max
}

max(1, 2, 3, 4, 5, 8, 34, 2, 3, 5) // 34


max(5, 4, Infinity)
// 호출 시 예상한 값: 5
// 실제 값: Infinity


function max(...arr) {
    let max = arr[0]
    for( let i = 1; i < arr.length; i++ ) {
        max = max < arr[i] ? arr[i] : max
    }
    return max
}

max(1, 2, 34, 2, 3, 5) // 34


