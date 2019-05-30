# A React Component and Icon Library using Zeppelin Element Library

Please see (Zeppelin Design System)[https://live-zds.zepdev.net/] for more detailed information.

install

```
yarn add @zlab-de/zel-react
```

## Getting Started: Components

This library requires the import of **\*zeppelin-element-library.css** for apply all styles from the Zeppelin Element Library.

```
// MyComponent.jsx
import React from 'react'
import Button from '@zlab-de/zel-react/Button'

function MyComponent(){
    return(
        <div>
            <Button color="primary">Click Me!</Button>
        </div>
    )
}

export default MyComponent

// App.js
import React, { Component } from 'react';
import "@zlab-de/zel-react/zeppelin-element-library.css"
import MyComponent from "./MyComponent"

class App extends Component {
  render() {
    return (
      <MyComponent />
    );
  }
}

export default App;
```

## theme.json from Zeppelin Element Library

This repository also have a **theme.json** file available for you to help with styling. This file contains the following infomation (see the guidelines section for more information); colors, spacing, and typography specifications. Its intended use if for users using a CSS-in-JS solution to be able to call colors and spacing easier.

Example with React-JSS Theming

```
import React from 'react'
import withStyles, {ThemeProvider} from 'react-jss'
import theme from '@zlab-de/zel-react/theme.json'

const styles = theme => ({
  div: {
    marginBottom: `${ theme.spacing.component.xxl.rem }rem`,
    color: theme.colors.primary.indigoBlue.hex,
  },
})

function MyComponent(){
    return(
        <div className={classes.div}>
            i'm a component
        </div>
    )
}

export default withStyles(styles)(MyComponent)

const App = () => (
  <ThemeProvider theme={theme}>
    <StyledButton>I am a button with green background</StyledButton>
  </ThemeProvider>
)
```

## Props

Any alternative props that you wish to pass to a component (ie inline styles) will always be passed to the outer element of that component. For example, see the code for Tag below.

```
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import ZepiconsClose from '@zlab-de/zel-react-icons/ZepiconsClose';

const Tag = ({ className: classNameProp, children, onClose, ...other }) => {
  return (
    <span className={clsx(classNameProp, 'zep-tag')} {...other}>
      {children}
      <button onClose={onClose} aria-label="close" className="zep-tag__button">
        <ZepiconsClose className="zep-tag__icons" />
      </button>
    </span>
  );
};

Tag.propTypes = {
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  children: PropTypes.string
};

export default Tag;
```
