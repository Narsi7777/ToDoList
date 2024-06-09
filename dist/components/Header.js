"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _form = _interopRequireDefault(require("./form"));
var _notes = _interopRequireDefault(require("../notes"));
var _Highlight = _interopRequireDefault(require("@mui/icons-material/Highlight"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
function Header(props) {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    trueOrFals = _useState2[0],
    setTrueOrFals = _useState2[1];
  var _useState3 = (0, _react.useState)({
      input1: "",
      input2: ""
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    formData = _useState4[0],
    setFormData = _useState4[1];
  function buttonClicked() {
    setTrueOrFals(true);
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Input 1:", formData.input1);
    console.log("Input 2:", formData.input2);
    var newElement = {
      key: _notes["default"][_notes["default"].length - 1].key + 1,
      title: formData.input1,
      content: formData.input2
    };
    setNotes(function (prevNotes) {
      return [].concat(_toConsumableArray(prevNotes), [newElement]);
    });
    // You can add further logic here to handle the form data, like sending it to a server or updating state.
  }
  function handleInputChange(event) {
    var _event$target = event.target,
      name = _event$target.name,
      value = _event$target.value;
    setFormData(function (prevData) {
      return _objectSpread(_objectSpread({}, prevData), {}, _defineProperty({}, name, value));
    });
  }
  function renderConditionally() {
    if (trueOrFals) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "container"
      }, /*#__PURE__*/_react["default"].createElement("h2", null, "Input Form"), /*#__PURE__*/_react["default"].createElement("form", {
        id: "myForm",
        onSubmit: handleSubmit
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "input1"
      }, "Input 1:"), /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        id: "input1",
        name: "input1",
        value: formData.input1,
        onChange: handleInputChange,
        required: true
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "input2"
      }, "Input 2:"), /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        id: "input2",
        name: "input2",
        value: formData.input2,
        onChange: handleInputChange,
        required: true
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        type: "submit"
      }, "Submit"))));
    }
  }
  return /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Narsi's Keeper App"), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: props.callFunction,
    className: "beautiful-button",
    style: {}
  }, props.FormVisible ? "Hide Form" : "Add New Note"));
}
var _default = exports["default"] = Header;