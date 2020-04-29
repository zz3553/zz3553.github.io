// testing strings and their properties

var a = "Hey I'm\
 Mitchel"
var lena = a.length

console.log(lena)
console.log(a)

var b = 'Some people call me \n\"Zaarib" '
console.log(b)

var index = b.indexOf('some')
console.log("index of \'some' " + index)

console.log("index of call " + b.search("call"))
console.log(b.slice(5,11)) //uses index as second parameter 
console.log(b.substr(5,6)) //uses length as second parameter 