module.exports = {
  numberAsCurrency:function(number){
    return number.toLocaleString('gbr-GBR', {style: 'currency', currency: 'GBP'})
  },

  capitalize: function( string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}