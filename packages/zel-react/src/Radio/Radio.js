import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Radio = ({
  checked,
  onChange,
  value,
  name,
  label,
  className: classNameProp,
  ...other
}) => {
  return (
    <label className={clsx('zep-radio', classNameProp)} {...other}>
      <input
        type="radio"
        name={name}
        className="zep-radio__input"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span className="zep-radio__indicator" />
      <span className="zep-radio__label">{label || name}</span>
    </label>
  );
};

Radio.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default Radio;
