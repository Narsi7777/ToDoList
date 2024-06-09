"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Delete = _interopRequireDefault(require("@mui/icons-material/Delete"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Note(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "note"
  }, /*#__PURE__*/_react["default"].createElement("h1", null, props.title), /*#__PURE__*/_react["default"].createElement("p", null, props.content), /*#__PURE__*/_react["default"].createElement("button", {
    className: "beautiful-button",
    style: {
      backgroundColor: "red"
    },
    onClick: function onClick() {
      props.deleteNote(props.index);
    }
  }, /*#__PURE__*/_react["default"].createElement(_Delete["default"], null)));
}
var _default = exports["default"] = Note;