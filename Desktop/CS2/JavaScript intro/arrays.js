// testing arrays in js

var artists = ["Travis Scott", "Kanye West", "Iann Dior", "Lil Uzi"]


function funct(artist) {
    artist = "1" + artist
    return artist
}

var num = [1,2,3,4,5,6,7]
var newNums = new Array()
num.forEach(add)

function add(num) {
    newNums.push(num+30)
}

num.forEach(iter)
function iter(num, i, arr) { //num is arr[i]
    arr[i] = num + 5
}

console.log(num)

console.log(newNums)
console.log(artists.pop())
console.log(artists.push("Lil Uzi"))
console.log(artists.shift())
console.log(artists.unshift("Travis Scott"))

artists.splice(artists.length-1, 0, "Tory Lanez") //splice is like replaing part of a string -> param1: starting index, param2: how many elements to delete, extras are what to add
console.log(artists)