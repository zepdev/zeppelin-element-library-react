import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

function Button(_ref, ref) {
  let {
    children: childrenProp,
    className: classNameProp,
    onClick,
    color,
    disabled,
    fullWidth,
    size
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "className", "onClick", "color", "disabled", "fullWidth", "size"]);

  const className = clsx("zep-button", color === "primary" && "zep-button-primary", color === "secondary" && "zep-button-secondary", color === "tertiary" && "zep-button-tertiary", fullWidth && "zep-button--full", size === "small" && "zep-button--small", classNameProp); // const childrenIcon = childrenProp.filter(elem => typeof elem !== "string")[0];
  // const childrenIconTertiary = childrenIcon
  //   ? React.cloneElement(childrenIcon, {
  //       className: clsx(
  //         "zep-button__icon zep-button__icon-tertiary",
  //         childrenIcon.props.className
  //       )
  //     })
  //   : null;
  // const childrenText = childrenProp.filter(elem => typeof elem === "string");

  return React.createElement("button", _extends({
    className: className,
    disabled: disabled,
    onClick: disabled ? null : onClick,
    ref: ref
  }, props), color === "tertiary" && childrenIconTertiary, React.createElement("span", {
    className: clsx("zep-button__text", color === "tertiary" && "zep-button__text--tertiary")
  }, childrenProp));
}

process.env.NODE_ENV !== "production" ? Button.propTypes = {
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  color: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  size: PropTypes.oneOf(["small", "large"])
} : void 0;
Button.defaultProps = {
  fullWidth: false,
  disabled: false,
  size: "large"
};
export default React.forwardRef(Button);