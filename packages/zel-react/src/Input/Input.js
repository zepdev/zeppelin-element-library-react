import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Input = ({
  className: classNameProp,
  value,
  onChange,
  error,
  errorMessage,
  id,
  label,
  placeholder,
  ...other
}) => {
  return (
    <div
      className={clsx('zep-input-container', {
        'zep-input-container--error': error
      })}
      {...other}
    >
      <input
        type="text"
        className={clsx(classNameProp, 'zep-input')}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        id={id}
      />
      <label className="zep-input-container__label" htmlFor={id}>
        {label}
      </label>
      {error && (
        <label className="zep-input-container__feedback" htmlFor={id}>
          {errorMessage}
        </label>
      )}
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ]),
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string
};

export default Input;
