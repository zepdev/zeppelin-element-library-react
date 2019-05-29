import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Downshift from 'downshift';
import ZepiconsSearch from '@zlab-de/zel-react-icons/ZepiconsSearch';

var _ref = React.createElement(ZepiconsSearch, {
  className: "zep-search__icon"
});

const Search = ({
  variant,
  items: itemsProp,
  placeholder,
  onChange,
  classes
}) => {
  const items = itemsProp || [];
  return React.createElement("div", {
    role: variant === 'landmark' ? 'search' : null
  }, React.createElement(Downshift, {
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
    className: clsx(classes.container, 'zep-search')
  }, React.createElement("label", _extends({}, getLabelProps(), {
    className: "zep-visually-hidden"
  }), placeholder), React.createElement("input", _extends({}, getInputProps({
    placeholder: placeholder
  }), {
    className: "zep-search__input"
  })), _ref, isOpen ? React.createElement("ul", getMenuProps({
    className: clsx('zep-select__list', classes.ul)
  }), items.filter(item => !inputValue || item.value.includes(inputValue)).map((item, index) => React.createElement("li", getItemProps({
    key: `searchItem${index}`,
    index,
    item,
    className: classes.li,
    style: {
      backgroundColor: highlightedIndex === index ? '#eceeef' : 'white',
      fontWeight: selectedItem === item ? 'bold' : 'normal'
    }
  }), item.value))) : null)));
};

process.env.NODE_ENV !== "production" ? Search.propTypes = {
  classes: PropTypes.object.isRequired,
  variant: PropTypes.oneOf(['landmark']),
  items: PropTypes.array,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func
} : void 0;
export default Search;