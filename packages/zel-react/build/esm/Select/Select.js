import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import ZepiconsNavigationDropdown from '@zlab-de/zel-react-icons/ZepiconsNavigationDropdown';

var _ref3 = React.createElement(ZepiconsNavigationDropdown, {
  className: "zep-select__icon"
});

var Select = function Select(_ref) {
  var itemsProp = _ref.items,
      _onChange = _ref.onChange,
      label = _ref.label,
      placeholderProps = _ref.placeholder,
      other = _objectWithoutProperties(_ref, ["items", "onChange", "label", "placeholder"]);

  var items = itemsProp || [];
  var placeholder = placeholderProps || 'Select one';
  return React.createElement(Downshift, _extends({
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
    return React.createElement("div", null, React.createElement("label", getLabelProps({
      className: 'zep-select__label',
      htmlFor: 'zep-select'
    }), label), React.createElement("button", {
      id: "zep-select",
      type: "button",
      className: "zep-select__button",
      onClick: toggleMenu,
      "data-toggle": "dropdown",
      "aria-haspopup": "true",
      "aria-expanded": isOpen
    }, selectedItem ? selectedItem.value : placeholder, _ref3), isOpen ? React.createElement("ul", getMenuProps({
      className: 'zep-select__list'
    }), items.map(function (item, index) {
      return React.createElement("li", getItemProps({
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
  onChange: PropTypes.func,
  items: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string
} : void 0;
export default Select;