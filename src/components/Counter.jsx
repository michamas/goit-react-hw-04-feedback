const { Component } = require('react');

class Counter extends Component {
  static defaultProps = {
    step: 1,
  };

  static propTypes = {};

  handleIncrement(event) {
    console.log('Increment btn was clicked', event);
    console.log('this.props: ', this.props);
  }
  handleDecrement(event) {
    console.log('Decrement btn was clicked', event);
    console.log('this.props: ', this.props);
  }

  render() {
    const { step } = this.props;

    return (
      <div>
        <div>COUNTER</div>
        <span>0</span>
        <button type="button" onClick={this.handleIncrement}>
          Increment by {step}
        </button>
        <button type="button" onClick={this.handleDecrement}>
          Decrement by {step}
        </button>
      </div>
    );
  }
}

export default Counter;
