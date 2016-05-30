var React = require('react');
var helpers = require('../helpers/currency');
var BankTotal = React.createClass({
  render: function(){
    return(
      <div>
        <h2> Bank Total: {helpers.numberAsCurrency(this.props.bankTotal)} </h2>
      </div>
    );
  }
});

module.exports = BankTotal;