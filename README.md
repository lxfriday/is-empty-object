# @lxfriday/is-empty-object

Judging whether a variable is an empty object

## install

```bash
npm i @lxfriday/is-empty-object -S
# or
yarn add @lxfriday/is-empty-object
```

## params
`smoothScrollTo(obj)`

- `obj` {`any`} `required` the input variable

## usage

```javascript
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
```


