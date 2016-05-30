var React = require('react');
var SampleData = require('../sample.json');
var BankTotal = require('./BankTotal.jsx');
var AccountsBox = require('./AccountsBox.jsx');
var InterestSelector = require('./InterestSelector.jsx');
var Bank = require('../bank/bank.js');


var BankBox = React.createClass({

  getInitialState: function(){
    return { accounts: SampleData }
  },

//// SHOULD NOT BE HERE - USE BANK MODEL WHICH HAS THIS METHOD - KEEP MODEL AND VIEW SEPERATE
  // getBankTotal: function(){
  //   var total = 0;
  //   for( var i=0; i<this.state.accounts.length; i++){
  //     total += this.state.accounts[i].amount;
  //   }
  //   return total.toLocaleString('gbr-GBR', { style: 'currency', currency: 'GBP' });
  // },



  // handleClick: function(e){
  //   e.preventDefault();
  //   var bank = new Bank();
  //   for( var account of this.state.accounts){
  //     bank.addAccount( account );
  //   }
    // bank.payInterest(7);
  //   this.setState({ accounts: bank.accounts})
  // },

  handleInterestSelector: function(interestRate, accountType){
    var bank = new Bank();
    for( var account of this.state.accounts){
      bank.addAccount( account );
    }
    bank.payInterest( interestRate, accountType);
    this.setState({ accounts: bank.accounts})
  },


  render: function(){
    var bank = new Bank();
    for( var account of this.state.accounts){
      bank.addAccount( account );
    }
    return(
      <div id='main'>
        <h1> Adam's React Bank </h1>
        <div id='shadow'>
          <BankTotal id='total' bankTotal= {bank.totalCash()}/>
          <AccountsBox class='accounts_box' type='Business' total={bank.totalCash('business')} accounts={ bank.filteredAccounts('business')} />
          <AccountsBox type='Personal' total={bank.totalCash('personal')} accounts={ bank.filteredAccounts('personal')} />
          <InterestSelector onCalculate={this.handleInterestSelector}/>
        </div>
      </div>
    )
  }
});

module.exports = BankBox;

// <button onClick={this.handleClick}> Pay Interest ( 7% )</button>
