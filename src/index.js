/**
 * 判断一个变量是不是空对象
 * @param obj {any}
 */
function isEmptyObj(obj) {
  return (
    Object.prototype.toString.call(obj) === '[object Object]' &&
    Object.getOwnPropertyNames(obj).length === 0 &&
    Object.getOwnPropertySymbols(obj).length === 0
  )
}


module.exports = isEmptyObj
