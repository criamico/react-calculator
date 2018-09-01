import React from 'react';
import NumButton from './num-button.jsx';
import Calc from '../calculator';

const defaultState = {
  value: '0'
};

class App extends React.Component {
  constructor(props) {
    super(props);
    App.displayName = 'App';

    this.state = defaultState;
    this.testElement = document.getElementById('fcc_test_suite_wrapper');
  }
  setValue = (e) => {
    const initialValue =
      this.state.value === '0' ? '' : this.state.value.toString();
    const symbols = initialValue.match(/[-+*/]/g);

    let currentValue = '';
    if (!symbols) {
      currentValue =
        initialValue.split('.').length >= 2 && e.target.value === '.'
          ? '' : e.target.value;
    } else if (symbols.length >= 1) {
      currentValue = initialValue.split('.').length > symbols.length + 1 &&
      e.target.value === '.'
        ? '' : e.target.value;
    }

    const value = initialValue + currentValue;
    this.setState({value: value});
  }
  resetValue = () => {
    this.setState(defaultState);
  }
  getResult = () => {
    const value = Calc.getExpression(this.state.value);
    this.setState({value});
  }

  render() {
    const { value } = this.state;
    const row1 = [
      {value: '7', id: 'seven', displayValue: '7', onClick: this.setValue},
      {value: '8', id: 'eight', displayValue: '8', onClick: this.setValue},
      {value: '9', id: 'nine', displayValue: '9', onClick: this.setValue}
    ];
    const row2 = [
      {value: '4', id: 'four', displayValue: '4', onClick: this.setValue},
      {value: '5', id: 'five', displayValue: '5', onClick: this.setValue},
      {value: '6', id: 'six', displayValue: '6', onClick: this.setValue}
    ];
    const row3 = [
      {value: '1', id: 'one', displayValue: '1', onClick: this.setValue},
      {value: '2', id: 'two', displayValue: '2', onClick: this.setValue},
      {value: '3', id: 'three', displayValue: '3', onClick: this.setValue}
    ];
    const row4 = [
      {value: '.', id: 'decimal', displayValue: '.', onClick: this.setValue},
      {value: '0', id: 'zero', displayValue: '0', onClick: this.setValue},
      {value: '=', id: 'equals', displayValue: '=', onClick: this.getResult}
    ];
    const column2 = [
      {value: '+', id: 'add', displayValue: '+', onClick: this.setValue},
      {value: '-', id: 'subtract', displayValue: '-', onClick: this.setValue},
      {value: '*', id: 'multiply', displayValue: '*', onClick: this.setValue},
      {value: '/', id: 'divide', displayValue: '/', onClick: this.setValue},
      {value: 'CLR', id: 'clear', displayValue: 'CLR', onClick: this.resetValue}
    ];

    return <React.Fragment>
      <div className="calculator">
        <div className="display-div" >
          <p
            id="display"
            type='number'
          >
            {value}
          </p>
        </div>
        <div className="keypad">
          <div className="keypad-col-1">
            <div>
              {row1.map((b, i) => <NumButton
                key={i}
                {...b}
              />)}
            </div>
            <div>
              {row2.map((b, i) => <NumButton
                key={i}
                {...b}
              />)}
            </div>
            <div>
              {row3.map((b, i) => <NumButton
                key={i}
                {...b}
              />)}
            </div>
            <div>
              {row4.map((b, i) => <NumButton
                key={i}
                {...b}
              />)}
            </div>
          </div>
          <div className="keypad-col-2">
            {column2.map((b, i) => <NumButton
              key={i}
              {...b}
            />)}
          </div>
        </div>
      </div>
      <div className="author">
        <p>Created by
          <a href="https://github.com/criamico"> criamico</a> - 2018
        </p>
      </div>
    </React.Fragment>;
  }
}
export default App;
