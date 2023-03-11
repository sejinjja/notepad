
let weakmap = new WeakMap()
let obj = {key: 'key'}
weakmap.set(obj, 'hello')
console.log(weakmap.get(obj)) // 'hello'
obj = null // obj가 가비지 컬렉션에 의해 제거됨
// weakMap {obj, 'hello'} 또한 가비지 컬렉션에 의해 제거된다.


let map = new Map()
let obj = {key: 'key'}
map.set(obj, 'hello')
console.log(map.get(obj)) // 'hello'
obj = null // obj가 가비지 컬렉션에 의해 제거됨
// map {obj, 'hello'} 제거 되지 않는다.



let cache = new WeakMap()
function expensiveOperation(obj) {
    if (cache.has(obj)) {
        return cache.get(obj)
    }
    let result = JSON.stringify(obj)
    cache.set(obj, result)
    return result
}

let testKey = {testKey: 'testKey'}
let testKey2 = {testKey: 'testKey2'}
expensiveOperation(testKey)
expensiveOperation(testKey2)
testKey = null




let weakMap = new WeakMap()

setTimeout(() => {
    let div = document.createElement('div')
    document.body.appendChild(div)
    weakMap.set(div, {test: 'test'})
}, 0)

setTimeout(() => {
    document.body.innerHTML = ''
}, 1000)

