import React, { Component } from "react";
import PropTypes from "prop-types";
import DisplayChild from "./DisplayChild";

class Display extends Component {
 constructor(props){
   super(props);
   this.state={
   items:[],
   isLoaded:false,
   }
 }

 componentDidMount(props){
  fetch(`https://ftl-frontend-test.herokuapp.com/interest?amount=${this.props.monthsValue}>&numMonths=${this.props.amountValue}`)
  .then(res=>res.json())
  .then(json=>{
    console.log(json);
    this.setState({
      isLoaded:true,
      item:json,  
    })
  })
}

 componentDidUpdate(prevProps, prevState) {
 if (prevProps.data !== this.props.data) {    
   fetch(`https://ftl-frontend-test.herokuapp.com/interest?amount=${this.props.monthsValue}>&numMonths=${this.props.amountValue}`)
   .then(res=>res.json())
   .then(json=>{
    console.log(json);
     this.setState({
       isLoaded:true,
       item:json,
     })
   });
  }
 }

 render() {
   var { isLoaded, items}=this.state;
   if(!isLoaded){
     return <div>Loading......</div>
   }
   else{
   return(
     <div className="flex" >
      <DisplayChild func={items.interestRate} text="Interest Rate" />
      <DisplayChild func={items.monthlyPayment} text=" Monthly Repayment" /> 
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