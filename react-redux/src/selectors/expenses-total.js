export default (expenses) => {
  let amount = expenses.map((expense) => expense.amount)
  return amount.reduce((a, b) => a + b, 0)
} 