import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const ListItem = ({
  variant,
  label,
  children,
  className: classNameProp
}) => {
  return React.createElement("li", {
    className: clsx('zep-list__item', variant === 'attribute' && 'zep-list__item--attribute', classNameProp)
  }, variant === 'attribute' && label && React.createElement("span", {
    className: "zep-list__label"
  }, label), children);
};

process.env.NODE_ENV !== "production" ? ListItem.propTypes = {
  classNames: PropTypes.object,
  label: PropTypes.string,
  variant: PropTypes.oneOf(['bullet', 'attribute'])
} : void 0;
export default ListItem;