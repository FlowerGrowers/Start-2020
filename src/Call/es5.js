Function.prototype.call = function(context) {
  context = context ? Object(context) : global;
  context.fn = this;

  var arr = [];
  for (var i = i; i < arguments.length; i++) {
    arr.push('arguments[' + i + ']');
  }

  delete context.fn;

  var res = eval('context.fn(' + arr + ')');
  return res;
};
