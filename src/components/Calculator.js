import React, { Component } from "react";
import InputRange from "react-input-range";
import Display from "./Display";
import "../styles/Calculator.css";
import "react-input-range/lib/css/index.css";

class Calculator extends Component {
  constructor(props){
    super(props);
    this.state = {
        value: 0,
      amountValue: 0,
      monthsValue: 6    
    };  
  }

  handleAmountChange = value => {    
    this.setState({ amountValue: value });
    console.log(value)
  };
  handleYearChange = value => {
    this.setState({ monthsValue: value });
  };

  render() {
    const { monthsValue, amountValue } = this.state;


    return (
      <div className="App bg-light-blue">
        <h4>EMI Calculator</h4>
          <div> 
            <h3>
              Enter Amount between $500 and $5000
            </h3>
            <div>
            <input
            className='input br2 e'
            type="number"           
            placeholder="Enter Amount"
            value={this.state.amountValue}
            onChange={(event)=>{
                this.setState({value:event.target.value,amountValue:event.target.value})}}
            />
          </div>
            <InputRange
              step={100}
              maxValue={5000}
              minValue={500}
              value={this.state.value}
                onChange={value => this.setState({ value:value,amountValue:value })}              

            />
          </div>
          <div>
            <h3>
              Duration {monthsValue} month{monthsValue > 1 && "s"}
            </h3>
            <InputRange
              step={1}
              maxValue={24}
              minValue={6}
              value={monthsValue}
              onChange={this.handleYearChange}

            />            
            <Display years={monthsValue} amount={amountValue} />
          </div>
      </div>
    );
  }
}

export default Calculator;