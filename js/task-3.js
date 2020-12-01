const findBestEmployee = function (employees) {
  const entiries = Object.entries(employees)
  let biggestNumber = entiries[0][1]
  let bestEmployee = entiries[0][0]

  for (const entry of entiries) {
    if (biggestNumber < entry[1]) {
      biggestNumber = entry[1]
      bestEmployee = entry[0]
    }
  }
  return bestEmployee
}

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
) // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
) // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
) // lux
