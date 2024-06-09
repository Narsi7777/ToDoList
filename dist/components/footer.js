"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Footer() {
  var year = new Date().getFullYear();
  return /*#__PURE__*/_react["default"].createElement("footer", null, /*#__PURE__*/_react["default"].createElement("p", null, " Copyright ", year));
}
var _default = exports["default"] = Footer;