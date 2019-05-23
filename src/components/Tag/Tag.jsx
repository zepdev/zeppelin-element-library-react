import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function Tag({ className: classNameProp }) {
  <span className={classnames(classNameProp, 'zep-tag')}>
    Tag
    <i className="zepicons zepicons-close" />
  </span>;
}

Tag.propTypes = {
  className: PropTypes.object
};

export default Tag;
