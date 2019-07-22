const isEmptyObj = require('..')
const { isEmptyObj1, isEmptyObj2 } = require('..')


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

console.log('------------------------------------')

console.log('()', isEmptyObj1())
console.log('{}', isEmptyObj1({}))
console.log('{ a: 1 }', isEmptyObj1({ a: 1 }))
console.log('obj1', isEmptyObj1(obj1))
console.log('obj2', isEmptyObj1(obj2))

console.log('------------------------------------')

console.log('()', isEmptyObj2())
console.log('{}', isEmptyObj2({}))
console.log('{ a: 1 }', isEmptyObj2({ a: 1 }))
console.log('obj1', isEmptyObj2(obj1))
console.log('obj2', isEmptyObj2(obj2))
