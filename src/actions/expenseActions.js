import database from '../firebase/firebase'

// ADD_EXPENSE
export const addExpense = expense => ({
  type: 'ADD_EXPENSE',
  expense
})

export const addExpenseToFirebase = (expenseData = {}) => (dispatch, getState) => {
  const { description, note, amount, createdAt } = expenseData
  const expense = { description, note, amount, createdAt }
  const uid = getState().auth.uid
  
  database
    .ref(`users/${uid}/expenses`)
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

export const removeExpenseFromFirebase = ({ id } = {}) => (dispatch, getState) => {
  const uid = getState().auth.uid  

  database
    .ref(`/users/${uid}/expenses/${id}`)
    .remove()
    .then(() => dispatch(removeExpense({ id })))
}

// EDIT_EXPENSE
export const editExpense = (id, updatedExpense) => ({
  type: 'EDIT_EXPENSE',
  id,
  updatedExpense
})

export const editExpenseFromFirebase = (id, updatedExpense) => (dispatch, getState) => {
  const uid = getState().auth.uid

  database
    .ref(`users/${uid}/expenses/${id}`)    
    .update(updatedExpense)
    .then(() => dispatch(editExpense(id, updatedExpense)))
}

export const showExpenseType = expenses => ({
  type: 'SHOW_EXPENSES',
  expenses
})

// SHOW_EXPENSE
export const showExpensesFromFirebase = () => (dispatch, getState) => {
  const uid = getState().auth.uid
  
  database
    .ref(`users/${uid}/expenses`)
    
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