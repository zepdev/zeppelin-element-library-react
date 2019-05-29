import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Downshift from 'downshift';
import ZepiconsSearch from '@zlab-de/zel-react-icons/ZepiconsSearch';

var _ref3 = React.createElement(ZepiconsSearch, {
  className: "zep-search__icon"
});

var Search = function Search(_ref) {
  var variant = _ref.variant,
      itemsProp = _ref.items,
      placeholder = _ref.placeholder,
      _onChange = _ref.onChange,
      classes = _ref.classes;
  var items = itemsProp || [];
  return React.createElement("div", {
    role: variant === 'landmark' ? 'search' : null
  }, React.createElement(Downshift, {
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
    return React.createElement("div", {
      className: clsx(classes.container, 'zep-search')
    }, React.createElement("label", _extends({}, getLabelProps(), {
      className: "zep-visually-hidden"
    }), placeholder), React.createElement("input", _extends({}, getInputProps({
      placeholder: placeholder
    }), {
      className: "zep-search__input"
    })), _ref3, isOpen ? React.createElement("ul", getMenuProps({
      className: clsx('zep-select__list', classes.ul)
    }), items.filter(function (item) {
      return !inputValue || item.value.includes(inputValue);
    }).map(function (item, index) {
      return React.createElement("li", getItemProps({
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
  classes: PropTypes.object.isRequired,
  variant: PropTypes.oneOf(['landmark']),
  items: PropTypes.array,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func
} : void 0;
export default Search;