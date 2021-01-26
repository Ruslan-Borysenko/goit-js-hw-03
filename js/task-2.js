// function countProps(obj) {
//   const values = Object.values(obj)
//   let total = values.length
//   return total //
// }

const countProps = obj => {
  const keys = Object.keys(obj);
  let total = keys.length;
  return total;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
