import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Input = (_ref) => {
  let {
    className: classNameProp,
    value,
    onChange,
    error,
    errorMessage,
    id,
    label,
    placeholder
  } = _ref,
      other = _objectWithoutPropertiesLoose(_ref, ["className", "value", "onChange", "error", "errorMessage", "id", "label", "placeholder"]);

  return React.createElement("div", _extends({
    className: clsx('zep-input-container', error && 'zep-input-container--error')
  }, other), React.createElement("input", {
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
  placeholder: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string
} : void 0;
export default Input;