var React = require('react');
var ReactDOM = require('react-dom');
var BankBox = require('./components/BankBox.jsx');

window.onload = function(){
  ReactDOM.render(
      <BankBox/>,
      document.getElementById('app')
    );
}








//// *********************************************************************************************************
 ////   BELOW: THE CODE WE USED IN JAVASCRIPT WITHOUT REACT 
//// *********************************************************************************************************

// var Bank = require('./bank/bank.js');
// var Account = require('./bank/account.js');
// var sampleAccounts = require('./sample.json');

// var createItemForAccount = function(account){
//   var accountListItem = document.createElement('li');
//   accountListItem.innerText = account.owner + ": " + account.amount.toLocaleString('gbr-GBR', { style: 'currency', currency: 'GBP' });
//   // .toLocaleString('gbr-GBR', { style: 'currency', currency: 'GBP' });
//   return accountListItem;
// }

// var populateAccountList = function(listElement, accounts){
//   for( var account of accounts){
//     listElement.appendChild(createItemForAccount(account));
//   }
// }

// window.onload = function(){


//   var bank = new Bank();
//   for( var account of sampleAccounts){
//     bank.addAccount(account);
//   }

//   var totalDisplay = document.getElementById('total');
//   var businessTotalDisplay = document.getElementById('business-total');
//   var personalTotalDisplay = document.getElementById('personal-total');

//   totalDisplay.innerText = "Total: " + bank.totalCash().toLocaleString('gbr-GBR', { style: 'currency', currency: 'GBP' });
//   businessTotalDisplay.innerText = "Total Business: " + bank.totalCash('business').toLocaleString('gbr-GBR', { style: 'currency', currency: 'GBP' });
//   personalTotalDisplay.innerText = "Total Personal: " + bank.totalCash('personal').toLocaleString('gbr-GBR', { style: 'currency', currency: 'GBP' });

//   var businessAccountList = document.getElementById('business-accounts');
//   var personalAccountList = document.getElementById('personal-accounts');

//   populateAccountList(businessAccountList, bank.filteredAccounts('business'))
//   populateAccountList(personalAccountList, bank.filteredAccounts('personal'))
// };
