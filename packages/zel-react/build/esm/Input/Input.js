import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

var Input = function Input(_ref) {
  var classNameProp = _ref.className,
      value = _ref.value,
      onChange = _ref.onChange,
      error = _ref.error,
      errorMessage = _ref.errorMessage,
      id = _ref.id,
      label = _ref.label,
      placeholder = _ref.placeholder;
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