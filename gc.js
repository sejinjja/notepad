
var x = {
    a: [1,2,3,4],
    b: 1
}
var y = x.a



x.a = 'test'


y = x.a



var z = {
    a: [1,2]
}

z.b = z.a
z.a = z.b

z = null

