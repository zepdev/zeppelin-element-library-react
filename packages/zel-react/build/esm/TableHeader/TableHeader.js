import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

function TableHeader(_ref) {
  var childrenProp = _ref.children,
      classNameProp = _ref.className;
  var children = React.Children.map(childrenProp, function (child) {
    if (!React.isValidElement(child)) {
      return null;
    }

    return React.cloneElement(child, {
      className: clsx('zep-table__cell--header', child.props.className),
      scope: 'col',
      component: 'th'
    });
  });
  return React.createElement("thead", null, React.createElement("tr", {
    className: clsx('zep-table__row zep-table__row--header', classNameProp)
  }, children));
}

process.env.NODE_ENV !== "production" ? TableHeader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  className: PropTypes.string
} : void 0;
export default TableHeader;