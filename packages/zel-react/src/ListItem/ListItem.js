import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const ListItem = ({ variant, label, children, className: classNameProp }) => {
  return (
    <li
      className={clsx(
        'zep-list__item',
        {
          'zep-list__item--attribute': variant === 'attribute'
        },
        classNameProp
      )}
    >
      {variant === 'attribute' && label && (
        <span className="zep-list__label">{label}</span>
      )}
      {children}
    </li>
  );
};

ListItem.propTypes = {
  classNames: PropTypes.object,
  label: PropTypes.string,
  variant: PropTypes.oneOf(['bullet', 'attribute'])
};

export default ListItem;