export default (state = {}, action) =>  {
  switch(action.type) {
    case 'CHECK_LOGIN':
      return {
        uid: action.uid
      }
    
    case 'CHECK_LOGOUT':
      return {}

    default:
      return state
  }
}