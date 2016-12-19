const React = require('react');

const Counter = React.createClass ({

  render: function() {
    const {value, onIncrement, onDecrement} = this.props;
    return (
        <p>
        Clicked: {value} times
      {' '}
        <button onClick={onIncrement}>
        +
        </button>
        <button onClick={onDecrement}>
        -
        </button>
        </p>
    );
  }
})

Counter.propType = {
  value: React.PropTypes.number.isRequired,
  onIncrement: React.PropTypes.func.isRequired,
  onDecrement: React.PropTypes.func.isRequired
}

module.exports = Counter;
