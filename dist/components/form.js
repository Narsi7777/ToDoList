"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function MyForm() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("h2", null, "Input Form"), /*#__PURE__*/_react["default"].createElement("form", {
    id: "myForm"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "input1"
  }, "Input 1:"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    id: "input1",
    name: "input1",
    required: true
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "input2"
  }, "Input 2:"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    id: "input2",
    name: "input2",
    required: true
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "submit"
  }, "Submit"))));
}
var _default = exports["default"] = MyForm;