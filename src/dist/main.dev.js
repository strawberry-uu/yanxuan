"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _mintUi = _interopRequireDefault(require("mint-ui"));

require("../node_modules/mint-ui/lib/style.css");

var _vuex = _interopRequireDefault(require("vuex"));

var _data = _interopRequireDefault(require("../src/assets/js/data.js"));

var _router = _interopRequireDefault(require("../src/assets/js/router.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

_vue["default"].use(_mintUi["default"]);

_vue["default"].use(_vuex["default"]);

new _vue["default"]({
  el: '#app',
  render: function render(h) {
    return h(_App["default"]);
  },
  router: _router["default"],
  store: _data["default"]
});