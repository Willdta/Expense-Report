import database from '../firebase/firebase'

// ADD_EXPENSE
export const addExpense = expense => ({
  type: 'ADD_EXPENSE',
  expense
})

export const addExpenseToFirebase = (expenseData = {}) => dispatch => {
  const { description, note, amount, createdAt } = expenseData
  const expense = { description, note, amount, createdAt }

  database
    .ref('expenses')
    .push(expense)
    .then(ref => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }))
    })
}

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

export const removeExpenseFromFirebase = ({ id } = {}) => dispatch => {
  database
    .ref(`expenses/${id}`)
    .remove()
}

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

export const editExpenseFromFirebase = (id, updatedExpense) => dispatch => {
  database
    .ref(`expenses/${id}`)
    .set(updatedExpense)
}

export const showExpenseType = expenses => ({
  type: 'SHOW_EXPENSES',
  expenses
})

// SHOW_EXPENSE
export const showExpensesFromFirebase = () => dispatch => {
  database
    .ref('expenses')
    .once('value', snapshot => {
      const expenses = []

      snapshot.forEach(child => {
        expenses.push({
          id: child.key,
          ...child.val()
        })
      })

    dispatch(showExpenseType(expenses))
  })
}