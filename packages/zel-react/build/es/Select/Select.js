import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import ZepiconsNavigationDropdown from '@zlab-de/zel-react-icons/ZepiconsNavigationDropdown';

var _ref2 = React.createElement(ZepiconsNavigationDropdown, {
  className: "zep-select__icon"
});

const Select = (_ref) => {
  let {
    items: itemsProp,
    onChange,
    label,
    placeholder: placeholderProps
  } = _ref,
      other = _objectWithoutPropertiesLoose(_ref, ["items", "onChange", "label", "placeholder"]);

  const items = itemsProp || [];
  const placeholder = placeholderProps || 'Select one';
  return React.createElement(Downshift, _extends({
    onChange: selection => onChange(selection),
    itemToString: item => item ? item.value : ''
  }, other), ({
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
  }), label), React.createElement("button", {
    id: "zep-select",
    type: "button",
    className: "zep-select__button",
    onClick: toggleMenu,
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": isOpen
  }, selectedItem ? selectedItem.value : placeholder, _ref2), isOpen ? React.createElement("ul", getMenuProps({
    className: 'zep-select__list'
  }), items.map((item, index) => React.createElement("li", getItemProps({
    key: `listItem${index}`,
    index,
    item,
    className: 'zep-select__listitem',
    style: {
      backgroundColor: highlightedIndex === index ? '#eceeef' : 'white',
      fontWeight: selectedItem === item ? 'bold' : 'normal'
    }
  }), item.value))) : null));
};

process.env.NODE_ENV !== "production" ? Select.propTypes = {
  onChange: PropTypes.func,
  items: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string
} : void 0;
export default Select;