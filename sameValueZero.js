/*
Numeric Types
SameValue ( x, y )
IsLooselyEqual ( x, y )
Runtime Semantics: Evaluation (2)
CaseClauseIsSelected ( C, input )
Array.prototype.includes ( searchElement [ , fromIndex ] )
Array.prototype.indexOf ( searchElement [ , fromIndex ] ) (2)
Array.prototype.lastIndexOf ( searchElement [ , fromIndex ] ) (2)
%TypedArray%.prototype.indexOf ( searchElement [ , fromIndex ] )
%TypedArray%.prototype.lastIndexOf ( searchElement [ , fromIndex ] )
*/

/*
Numeric Types
ArraySetLength ( A, Desc )
Array ( ...values )
Array.prototype.includes ( searchElement [ , fromIndex ] ) (2) (3)
%TypedArray%.prototype.includes ( searchElement [ , fromIndex ] )
!!!!not WeakMap Objects
Map.prototype.delete ( key )
Map.prototype.get ( key )
Map.prototype.has ( key )
Map.prototype.set ( key, value )
!!!!not WeakSet Objects
Set.prototype.add ( value )
Set.prototype.delete ( value )
Set.prototype.has ( value )
*/

const keyWord = 'hello'
const helloWorld = 'hello world'
if ( helloWorld.indexOf(keyWord) ) {
    console.log('indexOf!') // 실행 되지 않음.
}

if ( helloWorld.includes(keyWord) ) {
    console.log('includes!') // 실행 됨
}


const arr = [1, 2, 3, 4, NaN]
if( arr.includes(NaN) ) {
    console.log(`NaN이 ${arr.indexOf(NaN)}에 있습니다.`)
    // NaN이 -1에 있습니다.
}

console.log( [0].includes(false) ) // false
console.log( [NaN].includes(NaN) ) // true
console.log( [0].includes(-0) ) // true

console.log( 0 === false ) // false
console.log( NaN === NaN ) // false
console.log( 0 === -0 ) // true

console.log( 0 == false ) // true
console.log( NaN == NaN ) // false
console.log( 0 == -0 ) // true

console.log( Object.is(0, false) ) // false
console.log( Object.is(NaN, NaN) ) // true
console.log( Object.is(0, -0) ) // false

// 0 vs false / NaN vs NaN / 0 vs -0
// false      / true       / true - includes
// false      / false      / true - ===
// true       / false      / true - ==
// false      / true       / false - Object.is


console.log( [0].indexOf(false) ) // -1
console.log( [NaN].indexOf(NaN) ) // -1
console.log( [0].indexOf(-0) ) // 0


// false / false / true - indexOf
// false / false / true - ===
// true  / false / true - ==
// false / true  / false - Object.is


const map = new Map()
map.set( NaN, NaN )
map.set( -0, -0 )

console.log( map.has( NaN ) ) // true
console.log( map.has( -0 ) ) // true
console.log( map.has( 0 ) ) // true
console.log( map.get( NaN ) ) // NaN
console.log( map.get( -0 ) ) // -0
console.log( map.get( 0 ) ) // -0
console.log( map.delete( NaN ) ) // -0
console.log( map.delete( 0 ) ) // -0
console.log( map.delete( -0 ) ) // false


const set = new Set()
set.add( NaN )
set.add( -0 )
set.add( 0 )

console.log( set ) // { NaN, 0 }

console.log( set.has( NaN ) ) // true
console.log( set.has( -0 ) ) // true
console.log( set.has( 0 ) ) // true
console.log( set.delete( NaN ) ) // true
console.log( set.delete( 0 ) ) // true
console.log( set.delete( -0 ) ) // false
