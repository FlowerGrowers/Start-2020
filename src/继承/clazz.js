var __extends = (function() {
  var extendStatics = function(d, b) {
    return Object.setPrototypeOf(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype =
      b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
  };
})();

__extends(Children, Person);

function Person() {}

function Children() {
  return Person.apply(this, arguments);
}
