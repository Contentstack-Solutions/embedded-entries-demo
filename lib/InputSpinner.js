import { Component } from "react";
import {Button, InputGroup, FormControl} from 'react-bootstrap';

class InputSpinner extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  decrease() {
    if (this.state.count === 0) {
      return;
    }
    this.setState({
      count: this.state.count - 1,
    });
  }

  render() {
    return (
      <>

        <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm" onClick={this.decrease}><a className="spinner-button">-</a></InputGroup.Text>
            <FormControl className="spinner-input" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeHolder={this.state.count} value={this.state.count}/>
            <InputGroup.Text id="inputGroup-sizing-sm" onClick={this.increase}><a className="spinner-button">+</a></InputGroup.Text>
        </InputGroup>
      </>
    );
  }
}

export default InputSpinner