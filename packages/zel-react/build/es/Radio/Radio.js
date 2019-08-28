import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

var _ref2 = React.createElement("span", {
  className: "zep-radio__indicator"
});

const Radio = (_ref) => {
  let {
    checked,
    onChange,
    value,
    name,
    label,
    className: classNameProp
  } = _ref,
      other = _objectWithoutPropertiesLoose(_ref, ["checked", "onChange", "value", "name", "label", "className"]);

  return React.createElement("label", _extends({
    className: clsx('zep-radio', classNameProp)
  }, other), React.createElement("input", {
    type: "radio",
    name: name,
    className: "zep-radio__input",
    value: value,
    checked: checked,
    onChange: onChange
  }), _ref2, React.createElement("span", {
    className: "zep-radio__label"
  }, label || name));
};

process.env.NODE_ENV !== "production" ? Radio.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
} : void 0;
export default Radio;