// Задание 7 - дополнительное, выполнять не обязательно
// Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const Transaction = { amount, type };
    return Transaction;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance = amount;
    const transaction = this.createTransaction(amount, 'deposit');
    transaction.id = this.transactions.length;
    this.transactions.push(transaction);
    return this.transactions;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      return `Зняття ${amount} не можливо, недостатньо коштів.`;
    } else {
      this.balance -= amount;
      const transaction = this.createTransaction(amount, 'withdraw');
      transaction.id = this.transactions.length;
      this.transactions.push(transaction);
      return this.transactions;
    }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
    return `Немає такої транзакції.`;
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let TransactionTotal = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        TransactionTotal += transaction.amount;
      }
    }
    return TransactionTotal;
  },
};

console.log(account.createTransaction(1000, 'deposit'));
console.log(account.deposit(200));
console.log(account.withdraw(50));
console.log(account.withdraw(50));
console.log(account.getBalance());
console.log(account.deposit(100));
console.log(account.getTransactionDetails(1));
console.log(account.getTransactionTotal('deposit'));
console.log(account.getTransactionTotal('withdraw'));
