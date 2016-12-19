const createStore = require('redux').createStore,
      counter = require('./reducers/counter'),
      store = createStore(counter);

const targetEl = document.getElementById('target'),
      controllEl = document.getElementById('controller')

const init = function () {
  controllEl.addEventListener('click', function(e) {
    switch(e.target.id){
    case 'inc':
      store.dispatch({type: 'INCREMENT'});
      break;
    case 'dec':
      store.dispatch({type: 'DECREMENT'});
      break;
    default:
      break;
    }
  });
}

const render = function () {
  targetEl.innerHTML = store.getState().toString();
}

init()
store.subscribe(render);
