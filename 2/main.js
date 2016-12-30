const createStore = require('redux').createStore,
      React = require('react'),
      ReactDOM = require('react-dom'),
      Counter = require('./components/counter'),
      counter = require('./reducers/counter'),
      store = createStore(counter);

const render = () => ReactDOM.render(
  <Counter
     value={store.getState()}
     onIncrement={() => store.dispatch({ type: 'INCREMENT'})}
    onDecrement={() => store.dispatch({ type: 'DECREMENT'})}
    />,
  document.getElementById('root')
);

render();
store.subscribe(render);
