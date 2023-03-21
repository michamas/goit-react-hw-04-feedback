import { Component } from 'react';

class Counter extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  static propTypes = {};

  constructor(props) {
    super(props);

    //decrement rozpisany w jeden sposob; increment w drugi - lepszy
    this.handleDecrement = this.handleDecrement.bind(this);
    // this.handleIncrement = this.handleIncrement.bind(this);

    // stan deklaruje sie w konstrktorze lub jako publiczna wlasciwosc klasy (Ln 9)
    // this.state = {
    //   value: this.props.initialValue,
    // };
  }

  handleIncrement = event => {
    console.log('Increment btn was clicked', event);
    console.log('this.props: ', this.props);
  };
  handleDecrement(event) {
    console.log('Decrement btn was clicked', event);
    console.log('this.props: ', this.props);
  }

  render() {
    const { step } = this.props;

    return (
      <div>
        <div>COUNTER</div>
        <span>{this.state.value}</span>
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
