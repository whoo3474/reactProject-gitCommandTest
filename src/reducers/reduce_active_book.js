export default function(state = nill, action) {
  switch(action.type) {
    case 'BOOK_SELECTED' :
      return action.payload;
  }
  return state
}