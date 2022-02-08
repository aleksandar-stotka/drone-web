import { DECREASE, INCREASE } from "../actions";

function reducer(state, action) {
  if (action.type === DECREASE) {
    return { ...state, count: action.count + 1 };
  }
  return state;
}
export default reducer;
