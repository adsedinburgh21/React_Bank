var React = require('react');

var InterestSelector = React.createClass({

  // getInitialState: function(){
  //   return { accountType: '', interestRate: '' };
  // },


  handleForm: function(e){
    e.preventDefault();
    // this.setState({
    //   interestRate: e.target.interestRate.value,
    //   accountType: e.target.accountType.value
    // })
    this.props.onCalculate( e.target.interestRate.value, e.target.accountType.value );
  },

  render: function(){
    return(
      <div>
        <h4 id='interest'> Pay Interest </h4>
        <form onSubmit={this.handleForm}>
          <p>Pay</p>
          <input id='input' name='interestRate' type='number'/>
          <p>% Interest on </p>
          <select name='accountType'>
            <option value=""> All Accounts</option>
            <option value="business"> Business Accounts</option>
            <option value="personal"> Personal Accounts</option>
          </select>
          <button type='submit'> ~ENTER~ </button>
        </form>
      </div>
    )
  }
});

module.exports = InterestSelector;

//// why does <select> on line 25 not need a value like in country example? (countrySelect.jsx line 31)