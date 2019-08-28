"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _downshift = _interopRequireDefault(require("downshift"));

var _ZepiconsNavigationDropdown = _interopRequireDefault(require("@zlab-de/zel-react-icons/ZepiconsNavigationDropdown"));

var _ref3 = _react.default.createElement(_ZepiconsNavigationDropdown.default, {
  className: "zep-select__icon"
});

var Select = function Select(_ref) {
  var itemsProp = _ref.items,
      _onChange = _ref.onChange,
      label = _ref.label,
      placeholderProps = _ref.placeholder,
      other = (0, _objectWithoutProperties2.default)(_ref, ["items", "onChange", "label", "placeholder"]);
  var items = itemsProp || [];
  var placeholder = placeholderProps || 'Select one';
  return _react.default.createElement(_downshift.default, (0, _extends2.default)({
    onChange: function onChange(selection) {
      return _onChange(selection);
    },
    itemToString: function itemToString(item) {
      return item ? item.value : '';
    }
  }, other), function (_ref2) {
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
    }), label), _react.default.createElement("button", {
      id: "zep-select",
      type: "button",
      className: "zep-select__button",
      onClick: toggleMenu,
      "data-toggle": "dropdown",
      "aria-haspopup": "true",
      "aria-expanded": isOpen
    }, selectedItem ? selectedItem.value : placeholder, _ref3), isOpen ? _react.default.createElement("ul", getMenuProps({
      className: 'zep-select__list'
    }), items.map(function (item, index) {
      return _react.default.createElement("li", getItemProps({
        key: "listItem".concat(index),
        index: index,
        item: item,
        className: 'zep-select__listitem',
        style: {
          backgroundColor: highlightedIndex === index ? '#eceeef' : 'white',
          fontWeight: selectedItem === item ? 'bold' : 'normal'
        }
      }), item.value);
    })) : null);
  });
};

process.env.NODE_ENV !== "production" ? Select.propTypes = {
  onChange: _propTypes.default.func,
  items: _propTypes.default.array.isRequired,
  label: _propTypes.default.string.isRequired,
  placeholder: _propTypes.default.string
} : void 0;
var _default = Select;
exports.default = _default;