var Reflux = require('reflux');
var PageActions = require('../actions/PageActions');

var PageStore = Reflux.createStore({
  _collection: {},
  listenables: PageActions,
  init() {

  }
});

module.exports = PageStore;
