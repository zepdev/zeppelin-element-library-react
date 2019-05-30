import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import ZepiconsSearch from '@zlab-de/zel-react-icons/ZepiconsSearch';

var _ref2 = React.createElement(ZepiconsSearch, {
  className: "zep-search__icon"
});

const Search = (_ref) => {
  let {
    variant,
    items: itemsProp,
    placeholder,
    onChange
  } = _ref,
      other = _objectWithoutPropertiesLoose(_ref, ["variant", "items", "placeholder", "onChange"]);

  const items = itemsProp || [];
  return React.createElement("div", _extends({
    role: variant === 'landmark' ? 'search' : null
  }, other), React.createElement(Downshift, {
    itemToString: item => item ? item.value : '',
    onChange: selection => onChange(selection)
  }, ({
    getInputProps,
    getItemProps,
    getLabelProps,
    getMenuProps,
    isOpen,
    inputValue,
    highlightedIndex,
    selectedItem
  }) => React.createElement("div", {
    className: "zep-search"
  }, React.createElement("label", _extends({}, getLabelProps(), {
    className: "zep-visually-hidden"
  }), placeholder), React.createElement("input", _extends({}, getInputProps({
    placeholder: placeholder
  }), {
    className: "zep-search__input"
  })), _ref2, isOpen ? React.createElement("ul", getMenuProps({
    className: 'zep-select__list'
  }), items.filter(item => !inputValue || item.value.includes(inputValue)).map((item, index) => React.createElement("li", getItemProps({
    key: `searchItem${index}`,
    className: 'zep-select__listitem',
    index,
    item,
    style: {
      backgroundColor: highlightedIndex === index ? '#eceeef' : 'white',
      fontWeight: selectedItem === item ? 'bold' : 'normal'
    }
  }), item.value))) : null)));
};

process.env.NODE_ENV !== "production" ? Search.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  variant: PropTypes.oneOf(['landmark']),
  items: PropTypes.array,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func
} : void 0;
export default Search;