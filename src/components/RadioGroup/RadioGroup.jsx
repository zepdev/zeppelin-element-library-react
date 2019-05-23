import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function RadioGroup({
  title,
  children,
  className: classNameProp,
  classNameLegend
}) {
  return (
    <fieldset
      role="group"
      aria-labelledby={`radio_${title}`}
      className={classnames('zep-typo--normal-3', classNameProp)}
    >
      <legend id={`radio_${title}`} className={classNameLegend}>
        {title}
      </legend>
      {children}
    </fieldset>
  );
}

RadioGroup.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.array,
  classNameLegend: PropTypes.string
};

export default RadioGroup;
