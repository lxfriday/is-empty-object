/**
 * 判断一个变量是不是空对象
 * @link
 * @param obj {any}
 */
function isEmptyObj(obj) {
  return String(obj) === '[object Object]' && Reflect.ownKeys(obj).length === 0
}

function isEmptyObj1(obj) {
  return (
    Object.prototype.toString.call(obj) === '[object Object]' &&
    Object.getOwnPropertyNames(obj).length === 0 &&
    Object.getOwnPropertySymbols(obj).length === 0
  )
}

function isEmptyObj2(obj) {
  return (
    obj !== null &&
    typeof obj === 'object' &&
    !Array.isArray(obj) &&
    Object.getOwnPropertyNames(obj).length === 0 &&
    Object.getOwnPropertySymbols(obj).length === 0
  )
}

module.exports = isEmptyObj
exports = module.exports
exports.isEmptyObj1 = isEmptyObj1
exports.isEmptyObj2 = isEmptyObj2
