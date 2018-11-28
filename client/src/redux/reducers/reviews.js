export default function reviews(state = [], action) {
  switch (action.type) {
    case 'ADD_REVIEW':
      return state.concat([action.payload])
    default:
      return state
  }
}