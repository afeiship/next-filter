/*!
 * name: next-filter
 * url: https://github.com/afeiship/next-filter
 * version: 1.0.0
 * date: 2019-11-16T14:08:27.171Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var RETURN_VALUE = function(value) { return value; };

  nx.filter = function(inValue, inItems) {
    var items = inItems || [RETURN_VALUE];
    return items.reduce(function(item1, item2) {
      return item2(item1);
    }, inValue);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.filter;
  }
})();

//# sourceMappingURL=next-filter.js.map