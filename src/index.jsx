import React from 'react';
import NumButton from './components/num-button.jsx';
import Calc from './calculator';

const defaultState = {
  value: '0'
};

class App extends React.Component {
  constructor(props) {
    super(props);
    App.displayName = 'App';
    this.state = defaultState;
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
              <NumButton
                value='7'
                displayValue='7'
                id='seven'
                onClick={this.setValue}
              />
              <NumButton
                value='8'
                displayValue='8'
                id='eight'
                onClick={this.setValue}
              />
              <NumButton
                value='9'
                displayValue='9'
                id='nine'
                onClick={this.setValue}
              />
            </div>
            <div>
              <NumButton
                value='4'
                displayValue='4'
                id='four'
                onClick={this.setValue}
              />
              <NumButton
                value='5'
                displayValue='5'
                id='five'
                onClick={this.setValue}
              />
              <NumButton
                value='6'
                displayValue='6'
                id='six'
                onClick={this.setValue}
              />
            </div>
            <div>
              <NumButton
                value='1'
                displayValue='1'
                id='one'
                onClick={this.setValue}
              />
              <NumButton
                value='2'
                displayValue='2'
                id='two'
                onClick={this.setValue}
              />
              <NumButton
                value='3'
                displayValue='3'
                id='three'
                onClick={this.setValue}
              />
            </div>
            <div>
              <NumButton
                value='.'
                displayValue='.'
                id="decimal"
                onClick={this.setValue}
              />
              <NumButton
                value='0'
                displayValue='0'
                id='zero'
                onClick={this.setValue}
              />
              <NumButton
                value='='
                displayValue='='
                id="equals"
                onClick={this.getResult}
              />
            </div>
          </div>
          <div className="keypad-col-2">
            <NumButton
              value='+'
              displayValue='+'
              id="add"
              onClick={this.setValue}
            />
            <NumButton
              value='-'
              displayValue='-'
              id="subtract"
              onClick={this.setValue}
            />
            <NumButton
              value='*'
              displayValue='*'
              id="multiply"
              onClick={this.setValue}
            />
            <NumButton
              value='/'
              displayValue='/'
              id="divide"
              onClick={this.setValue}
            />
            <NumButton
              value='CLR'
              displayValue='CLR'
              id="clear"
              onClick={this.resetValue}
            />
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
