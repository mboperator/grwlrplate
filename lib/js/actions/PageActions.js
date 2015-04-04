var Reflux = require('reflux');

var PageActions = Reflux.createActions([
  "setCollection",
  "add",
  "update",
  "remove"
]);

module.exports = PageActions;
