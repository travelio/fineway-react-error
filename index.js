exports.__esModule = true;

var React = require('react');


var ErrorReporter = React.createClass({
  propTypes: {
    error: React.PropTypes.instanceOf(Error).isRequired
  },

  render: function() {
    if (process.env.ENV === 'production') {
      return null;
    } else {
      return React.createElement(
        'div',
        {style: {color: 'white', backgroundColor: '#f12e46', padding: '15px', border: '1px solid white'}},
        this.props.error.name + ': ' + this.props.error.message
      );
    }
  }
});

exports['default'] = ErrorReporter;
module.exports = exports['default'];
