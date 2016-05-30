var React = require('react');
var helpers = require('../helpers/currency.js');

var AccountsList = React.createClass({
  render: function(){
    var listItems = this.props.accounts.map(function(account, index){
      return <li key={index}> Owner: {helpers.capitalize(account.owner)} - Balance: {helpers.numberAsCurrency(account.amount)} </li>
    })
    return(
      <div>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
})

module.exports = AccountsList;