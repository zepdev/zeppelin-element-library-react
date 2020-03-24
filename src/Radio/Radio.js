import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Radio = ({ checked, onChange, value, name, label, className: classNameProp, ...other }) => {
  return (
    <>
      <input
        type="radio"
        name={name}
        className={clsx('zep-radio', classNameProp)}
        value={value}
        checked={checked}
        onChange={onChange}
        {...other}
      />
      <label className="zep-radio__label">{label || name}</label>
    </>
  );
};

Radio.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Radio;
