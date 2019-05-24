# Zeppelin Element Library React Component Icons: @zel-react/icons

```
yarn add @zel-react/icons
```

# How to use these icons

```
import React from 'react'
import ZepiconsCart from '@zel-react/icons/ZepiconsCart'

function MyComponent(){
    return(
        <div>
            <ZepiconsCart>
        </div>
    )
}

export default MyComponent
```

## Modify Color and Size

The best way to modify the color and size is to pass css to the icon.
To change color use the css property: fill: yourcolor;
To change the size use the width property: width: 50px;

## Props

These components accept all of the following props (please see [MUI](https://material-ui.com/api/svg-icon/) for more info however note that color, htmlColor, and fontSize will not work as we have removed the styles from the SvgIcon component)

children
classes
component (default: 'svg')
titleAccess
viewBox (default: '0 0 32 32')

## Creation of SVG icons from @Material-UI

This repo was build using Material-UI, please see Material-UI icons for more help if you need to modify this package.

1. clone (material-ui repo)[https://github.com/mui-org/material-ui]
2. cd to packages/material-ui-icons
3. copy all of the zepicons svgs (just the svg files) to a new folder and place that in the fixtures folder (ie ./fixtures/zep/svg)
4. in the package.json file create a new script:

```
  "src:iconsZEP": "cd ../../ && UV_THREADPOOL_SIZE=64 babel-node --config-file ./babel.config.js packages/material-ui-icons/builder.js --output-dir packages/material-ui-icons/src --svg-dir packages/material-ui-icons/fixtures/svg --renameFilter ./renameFilters/default.js",
```

5. change line 25 of renameFilters/default.js from an \_ to - (to take our zepicons-name from a '-' to CamelCase)

```
fileName = fileName.replace(/(^.)|(-)(.)/g, (match, p1, p2, p3) => (p1 || p3).toUpperCase());
```

6. replace the @material-ui/core dependency: in src/utils you must make sure you have 4 files (createSvgIcon.js, SvgIcon.js, helper.js, and zepicons.css)
   -- createSvgIcon.js (replace @material-ui/core/SvgIcon with; var \_SvgIcon = \_interopRequireDefault(require('./SvgIcon'));)
   -- copy and modify SvgIcon.js from @material-ui/core (see below, current version but may need to be modified in future)
   -- copy and modify utils/helpers.js (its necessary for SvgIcons.js): simply remove the warning (see below)
   -- create a zepicons.css file and put it in this folder (it should only have a default for svg width, see below)
7. run yarn src:iconsZEP
8. run yarn build
9. copy all file but the package.json and readme.md to zeppelin-element-library-react/packages/zel-react-icons
   ** DO NOT DELETE THE PACKAGE.JSON or README.MD FILE!! **

zepicons.css

```
.zepicons {
  width: 32px;
}
```

SvgIcons.js

```
// SvgIcon.js
// this is copied from Material-UI but we have removed the styles and replaced it with a simple css for a default size.
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './zepicons.css';

const SvgIcon = React.forwardRef(function SvgIcon(props, ref) {
  const {
    children,
    className,
    color = 'inherit',
    component: Component = 'svg',
    fontSize = 'default',
    htmlColor,
    titleAccess,
    viewBox = '0 0 32 32',
    ...other
  } = props;

  return (
    <Component
      className={clsx(className, 'zepicons')}
      focusable="false"
      viewBox={viewBox}
      color={htmlColor}
      aria-hidden={titleAccess ? 'false' : 'true'}
      role={titleAccess ? 'img' : 'presentation'}
      ref={ref}
      {...other}
    >
      {children}
      {titleAccess ? <title>{titleAccess}</title> : null}
    </Component>
  );
});

SvgIcon.propTypes = {
  /**
   * Node passed into the SVG element.
   */
  children: PropTypes.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  className: PropTypes.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * You can use the `htmlColor` property to apply a color attribute to the SVG element.
   */
  color: PropTypes.oneOf(['inherit', 'primary', 'secondary', 'action', 'error', 'disabled']),
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   */
  fontSize: PropTypes.oneOf(['inherit', 'default', 'small', 'large']),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: PropTypes.string,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this property.
   */
  shapeRendering: PropTypes.string,
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: PropTypes.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   */
  viewBox: PropTypes.string,
};

SvgIcon.muiName = 'SvgIcon';

export default SvgIcon;
```

helper.js

```
// helper.js
//import warning from 'warning';

// It should to be noted that this function isn't equivalent to `text-transform: capitalize`.
//
// A strict capitalization should uppercase the first letter of each word a the sentence.
// We only handle the first word.
export function capitalize(string) {
  if (process.env.NODE_ENV !== 'production' && typeof string !== 'string') {
    throw new Error(
      'Material-UI: capitalize(string) expects a string argument.'
    );
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
export function createChainedFunction(...funcs) {
  return funcs.reduce(
    (acc, func) => {
      if (func == null) {
        return acc;
      }

      //   warning(
      //     typeof func === 'function',
      //     'Material-UI: invalid Argument Type, must only provide functions, undefined, or null.'
      //   );

      return function chainedFunction(...args) {
        acc.apply(this, args);
        func.apply(this, args);
      };
    },
    () => {}
  );
}
```
