// how to iterate an object 
// forin loop 
const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`)    
}



// can i use forin for arrays 
const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    console.log(key)
}
// it prints indexes of the array
// forof directly picks up the value of the key
// and we're direclty dumping the values
// there was no issue with map


// forin returns keys
// keys of the array are indexes
// and hence the objects are designed as the array keys are starting from 0
// and it is only number but object can take any type as keys

for (const key in programming) {
    console.log(programming[key])
}



// can i use forin for map 
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India")
for (const key in map) {   
    console.log(key)
}

// no result 
// map is not iterable 