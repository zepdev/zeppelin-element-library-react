import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import ZepiconsNavigationDropdown from '@zlab-de/zel-react-icons/ZepiconsNavigationDropdown';

const Select = ({
  items: itemsProp,
  onChange,
  label,
  placeholder: placeholderProps,
  ...other
}) => {
  const items = itemsProp || [];
  const placeholder = placeholderProps || 'Select one';
  return (
    <Downshift
      onChange={selection => onChange(selection)}
      itemToString={item => (item ? item.value : '')}
      {...other}
    >
      {({
        getItemProps,
        getLabelProps,
        getMenuProps,
        toggleMenu,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem
      }) => (
        <div>
          <label
            {...getLabelProps({
              className: 'zep-select__label',
              htmlFor: 'zep-select'
            })}
          >
            {label}
          </label>
          <button
            id="zep-select"
            type="button"
            className="zep-select__button"
            onClick={toggleMenu}
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded={isOpen}
          >
            {selectedItem ? selectedItem.value : placeholder}
            <ZepiconsNavigationDropdown className="zep-select__icon" />
          </button>
          {isOpen ? (
            <ul {...getMenuProps({ className: 'zep-select__list' })}>
              {items.map((item, index) => (
                <li
                  {...getItemProps({
                    key: `listItem${index}`,
                    index,
                    item,
                    className: 'zep-select__listitem',
                    style: {
                      backgroundColor:
                        highlightedIndex === index ? '#eceeef' : 'white',
                      fontWeight: selectedItem === item ? 'bold' : 'normal'
                    }
                  })}
                >
                  {item.value}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      )}
    </Downshift>
  );
};

Select.propTypes = {
  onChange: PropTypes.func,
  items: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string
};

export default Select;
