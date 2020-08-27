"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _home = _interopRequireDefault(require("../../components/home.vue"));

var _index = _interopRequireDefault(require("../../components/index.vue"));

var _type = _interopRequireDefault(require("../../components/type.vue"));

var _buy = _interopRequireDefault(require("../../components/buy.vue"));

var _buycat = _interopRequireDefault(require("../../components/buycat.vue"));

var _people = _interopRequireDefault(require("../../components/people.vue"));

var _login = _interopRequireDefault(require("../../components/login.vue"));

var _login_ph = _interopRequireDefault(require("../../components/login_ph.vue"));

var _login_em = _interopRequireDefault(require("../../components/login_em.vue"));

var _login_ph_m = _interopRequireDefault(require("../../components/login_ph_m.vue"));

var _login_em_zc = _interopRequireDefault(require("../../components/login_em_zc.vue"));

var _detail = _interopRequireDefault(require("../../components/detail.vue"));

var _ad_app = _interopRequireDefault(require("../../components/ad_app.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = new _vueRouter["default"]({
  routes: [{
    path: '/',
    component: _home["default"],
    children: [{
      path: '/index',
      component: _index["default"]
    }, {
      path: '/type',
      component: _type["default"]
    }, {
      path: '/buy',
      component: _buy["default"]
    }, {
      path: '/buycat',
      component: _buycat["default"]
    }, {
      path: '/people',
      component: _people["default"]
    }],
    redirect: '/index'
  }, {
    path: '/detail/:id',
    component: _detail["default"]
  }, {
    path: '/ad_app',
    component: _ad_app["default"]
  }, {
    path: '/login',
    component: _login["default"]
  }, {
    path: '/login_ph',
    component: _login_ph["default"]
  }, {
    path: '/login_ph_m',
    component: _login_ph_m["default"]
  }, {
    path: '/login_em',
    component: _login_em["default"]
  }, {
    path: '/login_em_zc',
    component: _login_em_zc["default"]
  }, {
    path: '/*',
    redirect: '/index'
  }]
});

exports["default"] = _default;