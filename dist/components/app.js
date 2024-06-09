"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Header = _interopRequireDefault(require("./Header"));
var _footer = _interopRequireDefault(require("./footer"));
var _note = _interopRequireDefault(require("./note"));
var _notes = _interopRequireDefault(require("../notes"));
var _Add = _interopRequireDefault(require("@mui/icons-material/Add"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function App() {
  var _useState = (0, _react.useState)("Add Heading"),
    _useState2 = _slicedToArray(_useState, 2),
    input1 = _useState2[0],
    updateInput1 = _useState2[1];
  var _useState3 = (0, _react.useState)("Add Notes"),
    _useState4 = _slicedToArray(_useState3, 2),
    input2 = _useState4[0],
    updateInput2 = _useState4[1];
  var _useState5 = (0, _react.useState)(_notes["default"]),
    _useState6 = _slicedToArray(_useState5, 2),
    newArray = _useState6[0],
    updateNewArray = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isFormVisible = _useState8[0],
    setIsFormVisible = _useState8[1];
  function input1Changed(event) {
    var i1 = event.target.value;
    updateInput1(i1);
  }
  function input2Changed(event) {
    var i2 = event.target.value;
    updateInput2(i2);
  }
  function addButtonClicked() {
    updateNewArray([].concat(_toConsumableArray(newArray), [{
      title: input1,
      content: input2
    }]));
    updateInput1("");
    updateInput2("");
  }
  function deleteNoteFunction(id) {
    updateNewArray(function (prevArray) {
      return prevArray.filter(function (item, index) {
        return index !== id;
      });
    });
  }
  function toggleFormVisibility() {
    setIsFormVisible(function (prevVisibility) {
      return !prevVisibility;
    });
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "app-container"
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    callFunction: toggleFormVisibility,
    FormVisible: isFormVisible
  }), isFormVisible && /*#__PURE__*/_react["default"].createElement("div", {
    className: "top-section"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "form_div",
    style: {
      backgroundColor: "transparent"
    }
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    placeholder: "Add Note Heading",
    onClick: function onClick() {
      updateInput1("");
    },
    value: input1,
    onChange: input1Changed
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    placeholder: "Add notes",
    onClick: function onClick() {
      updateInput2("");
    },
    value: input2,
    onChange: input2Changed
  }), /*#__PURE__*/_react["default"].createElement("button", {
    className: "beautiful-button",
    onClick: addButtonClicked,
    style: {
      backgroundColor: "green"
    }
  }, "Add"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "bottom-section"
  }, newArray.map(function (note, index) {
    return /*#__PURE__*/_react["default"].createElement(_note["default"], {
      className: "note",
      key: note.key,
      index: index,
      title: note.title,
      content: note.content,
      deleteNote: deleteNoteFunction
    });
  })), /*#__PURE__*/_react["default"].createElement(_footer["default"], null));
}
var _default = exports["default"] = App;