import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import ZepiconsNavigationDropdown from '@zlab-de/zel-react-icons/ZepiconsNavigationDropdown';

var _ref3 = React.createElement(ZepiconsNavigationDropdown, {
  className: "zep-select__icon"
});

var Select = function Select(_ref) {
  var itemsProp = _ref.items,
      _onChange = _ref.onChange;
  var items = itemsProp || [];
  return React.createElement(Downshift, {
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
    return React.createElement("div", null, React.createElement("label", getLabelProps({
      className: 'zep-select__label',
      htmlFor: 'zep-select'
    }), "Form Label"), React.createElement("button", {
      id: "zep-select",
      type: "button",
      className: "zep-select__button",
      onClick: toggleMenu,
      "data-toggle": "dropdown",
      "aria-haspopup": "true",
      "aria-expanded": isOpen
    }, selectedItem ? selectedItem.value : 'Select an item', _ref3), isOpen ? React.createElement("ul", getMenuProps({
      className: 'zep-select__list'
    }), items.filter(function (item) {
      return !inputValue || item.value.includes(inputValue);
    }).length === 0 ? React.createElement("li", getItemProps({
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
      return React.createElement("li", getItemProps({
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
  onChange: PropTypes.func,
  items: PropTypes.array.isRequired
} : void 0;
export default Select;