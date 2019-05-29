"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _downshift = _interopRequireDefault(require("downshift"));

var _ZepiconsNavigationDropdown = _interopRequireDefault(require("@zlab-de/zel-react-icons/ZepiconsNavigationDropdown"));

var _ref3 = _react.default.createElement(_ZepiconsNavigationDropdown.default, {
  className: "zep-select__icon"
});

var Select = function Select(_ref) {
  var itemsProp = _ref.items,
      _onChange = _ref.onChange;
  var items = itemsProp || [];
  return _react.default.createElement(_downshift.default, {
    onChange: function onChange(selection) {
      return _onChange(selection.value);
    },
    itemToString: function itemToString(item) {
      return item ? item.value : '';
    }
  }, function (_ref2) {
    var getItemProps = _ref2.getItemProps,
        getLabelProps = _ref2.getLabelProps,
        getMenuProps = _ref2.getMenuProps,
        toggleMenu = _ref2.toggleMenu,
        isOpen = _ref2.isOpen,
        inputValue = _ref2.inputValue,
        highlightedIndex = _ref2.highlightedIndex,
        selectedItem = _ref2.selectedItem;
    return _react.default.createElement("div", null, _react.default.createElement("label", getLabelProps({
      className: 'zep-select__label',
      htmlFor: 'zep-select'
    }), "Form Label"), _react.default.createElement("button", {
      id: "zep-select",
      type: "button",
      className: "zep-select__button",
      onClick: toggleMenu,
      "data-toggle": "dropdown",
      "aria-haspopup": "true",
      "aria-expanded": isOpen
    }, selectedItem ? selectedItem.value : 'Select an item', _ref3), isOpen ? _react.default.createElement("ul", getMenuProps({
      className: 'zep-select__list'
    }), items.filter(function (item) {
      return !inputValue || item.value.includes(inputValue);
    }).length === 0 ? _react.default.createElement("li", getItemProps({
      item: {
        value: 'no results'
      },
      index: 0,
      className: 'zep-select__listitem',
      style: {
        backgroundColor: highlightedIndex === 0 ? 'lightgray' : 'white',
        fontWeight: selectedItem === undefined ? 'bold' : 'normal'
      }
    }), "no results") : items.filter(function (item) {
      return !inputValue || item.value.includes(inputValue);
    }).map(function (item, index) {
      return _react.default.createElement("li", getItemProps({
        key: "listItem".concat(index),
        index: index,
        item: item,
        className: 'zep-select__listitem',
        style: {
          backgroundColor: highlightedIndex === index ? 'lightgray' : 'white',
          fontWeight: selectedItem === item ? 'bold' : 'normal'
        }
      }), item.value);
    })) : null);
  });
};

process.env.NODE_ENV !== "production" ? Select.propTypes = {
  onChange: _propTypes.default.func,
  items: _propTypes.default.array.isRequired
} : void 0;
var _default = Select;
exports.default = _default;