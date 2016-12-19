const createStore = require('redux').createStore,
      counter = require('./reducers/counter'),
      Counter = require('./components/counter'),
      React = require('react'),
      ReactDOM = require('react-dom'),
      store = createStore(counter);

const targetEl = document.getElementById('root')

const render = function () {
  ReactDOM.render(
      <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({type: 'INCREMENT'})}
    onDecrement={() => store.dispatch({type: 'DECREMENT'})}
      ></Counter>,
    targetEl);
}

render();
store.subscribe(render);
