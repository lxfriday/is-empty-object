const isEmptyObj = require('..')

console.log('()', isEmptyObj())
console.log('{}', isEmptyObj({}))
console.log('{ a: 1 }', isEmptyObj({ a: 1 }))

const obj1 = {}
Object.defineProperty(obj1, 'name', {
  value: 'lxfriday',
})
console.log('obj1', isEmptyObj(obj1))

let sym1 = Symbol('name')

const obj2 = { [sym1]: 'lxfriday' }

console.log('obj2', isEmptyObj(obj2))

// () false
// {} true
// { a: 1 } false
// obj1 false
// obj2 false
