(function() {
  'use strict';

  function counter(state, action) {
    if (typeof state === 'undefined') {
      return 0
    }

    switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
    }
  }

  let store = window.store = Redux.createStore(counter);
  let valueEl = document.getElementById('value');

  function render() {
    console.count();
    valueEl.innerHTML = store.getState().toString();
  }

  store.subscribe(render);

  document.getElementById('increment')
    .addEventListener('click', function () {
      store.dispatch({type: 'INCREMENT'});
    });

  document.getElementById('decrement')
    .addEventListener('click', function () {
      store.dispatch({type: 'DECREMENT'});
    });
})();
