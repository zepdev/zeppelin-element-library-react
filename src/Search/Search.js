import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import clsx from 'clsx';

const Search = ({ variant, items: itemsProp, placeholder, onChange, ...other }) => {
  const items = itemsProp || [];
  return (
    <div role={variant === 'header' ? 'search' : null} {...other}>
      <Downshift
        itemToString={(item) => (item ? item.value : '')}
        onChange={(selection) => onChange(selection)}
      >
        {({
          getInputProps,
          getItemProps,
          getLabelProps,
          getMenuProps,
          isOpen,
          inputValue,
          highlightedIndex,
          selectedItem,
        }) => (
          <div className="zep-search">
            <label {...getLabelProps()} className="zep-visually-hidden">
              {placeholder}
            </label>
            <input
              {...getInputProps({ placeholder: placeholder })}
              className={clsx('zep-search__input', {
                'zep-search__input--searchfield': variant === 'header',
                'zep-search__input--rounded-left': variant !== 'header',
              })}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              className="zep-search__icon"
            >
              <title>zepicons-search</title>
              <path d="M12.667 4c4.786 0 8.667 3.88 8.667 8.667 0 2.147-0.787 4.12-2.080 5.64l0.36 0.36h1.053l6.667 6.667-2 2-6.667-6.667v-1.053l-0.36-0.36c-1.52 1.293-3.493 2.080-5.64 2.080-4.786 0-8.667-3.88-8.667-8.667s3.88-8.667 8.667-8.667v0zM12.667 6.667c-3.333 0-6 2.667-6 6s2.667 6 6 6c3.333 0 6-2.667 6-6s-2.667-6-6-6z" />
            </svg>

            {isOpen ? (
              <ul {...getMenuProps({ className: 'zep-select__list' })}>
                {items
                  .filter((item) => !inputValue || item.value.includes(inputValue))
                  .map((item, index) => (
                    <li
                      {...getItemProps({
                        key: `searchItem${index}`,
                        className: 'zep-select__listitem',
                        index,
                        item,
                        style: {
                          backgroundColor: highlightedIndex === index ? '#eceeef' : 'white',
                          fontWeight: selectedItem === item ? 'bold' : 'normal',
                        },
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
  onChange: PropTypes.func,
};

export default Search;
