export default function salaries(state = [], action) {
  switch (action.type) {
    case 'ADD_SALARY':
      return state.concat([action.payload])
    default:
      return state
  }
}