"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _downshift = _interopRequireDefault(require("downshift"));

var _ZepiconsSearch = _interopRequireDefault(require("@zlab-de/zel-react-icons/ZepiconsSearch"));

var _ref3 = _react.default.createElement(_ZepiconsSearch.default, {
  className: "zep-search__icon"
});

var Search = function Search(_ref) {
  var variant = _ref.variant,
      itemsProp = _ref.items,
      placeholder = _ref.placeholder,
      _onChange = _ref.onChange,
      classes = _ref.classes;
  var items = itemsProp || [];
  return _react.default.createElement("div", {
    role: variant === 'landmark' ? 'search' : null
  }, _react.default.createElement(_downshift.default, {
    itemToString: function itemToString(item) {
      return item ? item.value : '';
    },
    onChange: function onChange(selection) {
      return _onChange(selection);
    }
  }, function (_ref2) {
    var getInputProps = _ref2.getInputProps,
        getItemProps = _ref2.getItemProps,
        getLabelProps = _ref2.getLabelProps,
        getMenuProps = _ref2.getMenuProps,
        isOpen = _ref2.isOpen,
        inputValue = _ref2.inputValue,
        highlightedIndex = _ref2.highlightedIndex,
        selectedItem = _ref2.selectedItem;
    return _react.default.createElement("div", {
      className: (0, _clsx.default)(classes.container, 'zep-search')
    }, _react.default.createElement("label", (0, _extends2.default)({}, getLabelProps(), {
      className: "zep-visually-hidden"
    }), placeholder), _react.default.createElement("input", (0, _extends2.default)({}, getInputProps({
      placeholder: placeholder
    }), {
      className: "zep-search__input"
    })), _ref3, isOpen ? _react.default.createElement("ul", getMenuProps({
      className: (0, _clsx.default)('zep-select__list', classes.ul)
    }), items.filter(function (item) {
      return !inputValue || item.value.includes(inputValue);
    }).map(function (item, index) {
      return _react.default.createElement("li", getItemProps({
        key: "searchItem".concat(index),
        index: index,
        item: item,
        className: classes.li,
        style: {
          backgroundColor: highlightedIndex === index ? '#eceeef' : 'white',
          fontWeight: selectedItem === item ? 'bold' : 'normal'
        }
      }), item.value);
    })) : null);
  }));
};

process.env.NODE_ENV !== "production" ? Search.propTypes = {
  classes: _propTypes.default.object.isRequired,
  variant: _propTypes.default.oneOf(['landmark']),
  items: _propTypes.default.array,
  placeholder: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func
} : void 0;
var _default = Search;
exports.default = _default;