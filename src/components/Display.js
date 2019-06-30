import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DisplayChild from './DisplayChild';

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch(
      `https://ftl-frontend-test.herokuapp.com/interest?amount=${
        this.props.amount
      }&numMonths=${this.props.years}`
    )
      .then(res => res.json())
      .then(json => {
        console.log(json);
        this.setState({
          isLoaded: true,
          item: json
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      `https://ftl-frontend-test.herokuapp.com/interest?amount=${
        this.props.amount
      }&numMonths=${this.props.years}`
    );

    if (
      prevProps.years !== this.props.years ||
      prevProps.amount !== this.props.amount
    ) {
      fetch(
        `https://ftl-frontend-test.herokuapp.com/interest?amount=${
          this.props.amount
        }&numMonths=${this.props.years}`
      )
        .then(res => res.json())
        .then(json => {
          console.log(json);
          this.setState({
            isLoaded: true,
            item: json
          });
        });
    }
  }

  render() {
    var { isLoaded, item } = this.state;

    if (!isLoaded) {
      return <div>Loading......</div>;
    } else {
      return (
        <div className="flex b">
          <DisplayChild func={item.interestRate} text="Interest Rate" />
          
          <DisplayChild 
            func={item.monthlyPayment.amount}
            text="USD Monthly Repayment"
          />
        </div>
      );
    }
  }
}

Display.propTypes = {
  years: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired
};

export default Display;
