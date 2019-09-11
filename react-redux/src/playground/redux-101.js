import { createStore} from 'redux'

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    case 'RESET':
      return {
        count: 0
      };
      default:
        return state;
  }
});

// Action is {} that gets esnt to store
// for example, walk, stop walking, sit work, stop working (these actions change the state of the store)

// so in this counter example, we may have actions such as increment, decrement, reset (these change the store)

// increment count

store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
  type: 'RESET'
});

store.dispatch({
  type: 'DECREMENT'
});

// decrement count

console.log(store.getState());