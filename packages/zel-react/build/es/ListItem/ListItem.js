import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const ListItem = (_ref) => {
  let {
    variant,
    label,
    children,
    className: classNameProp
  } = _ref,
      other = _objectWithoutPropertiesLoose(_ref, ["variant", "label", "children", "className"]);

  return React.createElement("li", _extends({
    className: clsx('zep-list__item', variant === 'attribute' && 'zep-list__item--attribute', classNameProp)
  }, other), variant === 'attribute' && label && React.createElement("span", {
    className: "zep-list__label"
  }, label), children);
};

process.env.NODE_ENV !== "production" ? ListItem.propTypes = {
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  label: PropTypes.string,
  variant: PropTypes.oneOf(['bullet', 'attribute'])
} : void 0;
export default ListItem;