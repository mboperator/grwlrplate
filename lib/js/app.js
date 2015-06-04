var React = require('react');
var Page = require('./components/Page');

var App = React.createClass({
  render() {
    return (
      <div>

        <div class="header">
          <h1>App</h1>
        </div>

        <Page/>

        <footer>
          M. Bernales
        </footer>

      </div>
    );
  }
})

React.render(<App/>, document.getElementById('app'));
