# zeppelin-element-library-react

A library of React components created using `create-react-app` for Zeppelin Projects.

## Installation

Run the following command:
`yarn add zeppelin-element-library-react`

## Creation of SVG icons from @Material-UI

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

6. run yarn src:iconsZEP
7. run yarn build
8. copy the created SVG icon components from the build folder to zeppelin-elements-library-react/src/icons
