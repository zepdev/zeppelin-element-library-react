import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Tab = ({
  className: classNameProp,
  label,
  size,
  onClick,
  icon,
  value,
  selected,
  ...other
}) => {
  const iconStyled = icon
    ? React.cloneElement(icon, {
        className: 'zep-tab__icon'
      })
    : null;

  return (
    <div className="zep-tabs__item" {...other}>
      <button
        className={clsx('zep-tab', classNameProp, {
          'zep-tab--selected': selected,
          'zep-tab--small': size === 'small'
        })}
        onClick={() => onClick(value)}
        role="tab"
        aria-selected={selected}
        id={`tab-${value}`}
        tabIndex={0}
      >
        {iconStyled}
        {label}
      </button>
    </div>
  );
};

Tab.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  icon: PropTypes.object,
  value: PropTypes.number,
  selected: PropTypes.bool,
  size: PropTypes.oneOf(['small'])
};

export default Tab;
