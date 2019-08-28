import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import ZepiconsSearch from '@zlab-de/zel-react-icons/ZepiconsSearch';

const Search = ({
  variant,
  items: itemsProp,
  placeholder,
  onChange,
  ...other
}) => {
  const items = itemsProp || [];
  return (
    <div role={variant === 'landmark' ? 'search' : null} {...other}>
      <Downshift
        itemToString={item => (item ? item.value : '')}
        onChange={selection => onChange(selection)}
      >
        {({
          getInputProps,
          getItemProps,
          getLabelProps,
          getMenuProps,
          isOpen,
          inputValue,
          highlightedIndex,
          selectedItem
        }) => (
          <div className="zep-search">
            <label {...getLabelProps()} className="zep-visually-hidden">
              {placeholder}
            </label>
            <input
              {...getInputProps({ placeholder: placeholder })}
              className="zep-search__input"
            />
            <ZepiconsSearch className="zep-search__icon" />
            {isOpen ? (
              <ul {...getMenuProps({ className: 'zep-select__list' })}>
                {items
                  .filter(
                    item => !inputValue || item.value.includes(inputValue)
                  )
                  .map((item, index) => (
                    <li
                      {...getItemProps({
                        key: `searchItem${index}`,
                        className: 'zep-select__listitem',
                        index,
                        item,
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
    </div>
  );
};

Search.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  variant: PropTypes.oneOf(['landmark']),
  items: PropTypes.array,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func
};

export default Search;
