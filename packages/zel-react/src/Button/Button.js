import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

function Button(
  {
    children: childrenProp,
    className: classNameProp,
    onClick,
    color,
    disabled,
    fullWidth,
    size,
    ...props
  },
  ref
) {
  const className = clsx(
    "zep-button",
    {
      "zep-button-primary": color === "primary",
      "zep-button-secondary": color === "secondary",
      "zep-button-tertiary": color === "tertiary",
      "zep-button--full": fullWidth,
      "zep-button--small": size === "small"
    },
    classNameProp
  );

  // const childrenIcon = childrenProp.filter(elem => typeof elem !== "string")[0];
  // const childrenIconTertiary = childrenIcon
  //   ? React.cloneElement(childrenIcon, {
  //       className: clsx(
  //         "zep-button__icon zep-button__icon-tertiary",
  //         childrenIcon.props.className
  //       )
  //     })
  //   : null;
  // const childrenText = childrenProp.filter(elem => typeof elem === "string");

  return (
    <button
      className={className}
      disabled={disabled}
      onClick={disabled ? null : onClick}
      ref={ref}
      {...props}
    >
      {color === "tertiary" && childrenIconTertiary}
      <span
        className={clsx("zep-button__text", {
          "zep-button__text--tertiary": color === "tertiary"
        })}
      >
        {/* {childrenText} */}
        {childrenProp}
      </span>
    </button>
  );
}

Button.propTypes = {
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  color: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  size: PropTypes.oneOf(["small", "large"])
};

Button.defaultProps = {
  fullWidth: false,
  disabled: false,
  size: "large"
};

export default React.forwardRef(Button);
