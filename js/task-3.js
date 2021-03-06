const findBestEmployee = employees => {
  const keys = Object.keys(employees);
  // let bestEmployee = keys[0];
  // let biggestAmount = employees[keys[0]];

  // for (let i = 1; i < keys.length; i += 1) {
  //   if (biggestAmount < employees[keys[i]]) {
  //     biggestAmount = employees[keys[i]];
  //     bestEmployee = keys[i];
  //   }
  //   console.log('i=', i);
  // }

  let bestEmployee = '';
  let biggestAmount = 0;
  for (const key of keys) {
    if (biggestAmount < employees[key]) {
      biggestAmount = employees[key];
      bestEmployee = key;
    }
  }
  return bestEmployee;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
