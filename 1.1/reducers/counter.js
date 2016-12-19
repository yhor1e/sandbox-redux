const counter = function(state, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1;
  case 'DECREMENT':
    return state - 1;
  default:
    return state || 0;
  }
}

module.exports = counter;
