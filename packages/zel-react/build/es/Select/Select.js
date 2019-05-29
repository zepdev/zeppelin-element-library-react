import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import ZepiconsNavigationDropdown from '@zlab-de/zel-react-icons/ZepiconsNavigationDropdown';

var _ref = React.createElement(ZepiconsNavigationDropdown, {
  className: "zep-select__icon"
});

const Select = ({
  items: itemsProp,
  onChange
}) => {
  const items = itemsProp || [];
  return React.createElement(Downshift, {
    onChange: selection => onChange(selection.value),
    itemToString: item => item ? item.value : ''
  }, ({
    getItemProps,
    getLabelProps,
    getMenuProps,
    toggleMenu,
    isOpen,
    inputValue,
    highlightedIndex,
    selectedItem
  }) => React.createElement("div", null, React.createElement("label", getLabelProps({
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
  }, selectedItem ? selectedItem.value : 'Select an item', _ref), isOpen ? React.createElement("ul", getMenuProps({
    className: 'zep-select__list'
  }), items.filter(item => !inputValue || item.value.includes(inputValue)).length === 0 ? React.createElement("li", getItemProps({
    item: {
      value: 'no results'
    },
    index: 0,
    className: 'zep-select__listitem',
    style: {
      backgroundColor: highlightedIndex === 0 ? 'lightgray' : 'white',
      fontWeight: selectedItem === undefined ? 'bold' : 'normal'
    }
  }), "no results") : items.filter(item => !inputValue || item.value.includes(inputValue)).map((item, index) => React.createElement("li", getItemProps({
    key: `listItem${index}`,
    index,
    item,
    className: 'zep-select__listitem',
    style: {
      backgroundColor: highlightedIndex === index ? 'lightgray' : 'white',
      fontWeight: selectedItem === item ? 'bold' : 'normal'
    }
  }), item.value))) : null));
};

process.env.NODE_ENV !== "production" ? Select.propTypes = {
  onChange: PropTypes.func,
  items: PropTypes.array.isRequired
} : void 0;
export default Select;