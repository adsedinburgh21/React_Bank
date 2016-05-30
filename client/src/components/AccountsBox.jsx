var React = require('react');
var AccountsList = require('./AccountsList.jsx')

var AccountsBox = React.createClass({
  render: function(){
    return(
      <div>
        <h3> {this.props.type} Accounts Total : {this.props.total.toLocaleString('gbr-GBR', {style: 'currency', currency: 'GBP'})}</h3>
        <AccountsList accounts={this.props.accounts}/>
      </div>
    );
  }
});

module.exports = AccountsBox;