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
  placeholder
}) => {
  return React.createElement("div", {
    className: clsx('zep-input-container', error && 'zep-input-container--error')
  }, React.createElement("input", {
    type: "text",
    className: clsx(classNameProp, 'zep-input'),
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    id: id
  }), React.createElement("label", {
    className: "zep-input-container__label",
    htmlFor: id
  }, label), error && React.createElement("label", {
    className: "zep-input-container__feedback",
    htmlFor: id
  }, errorMessage));
};

process.env.NODE_ENV !== "production" ? Input.propTypes = {
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string
} : void 0;
export default Input;