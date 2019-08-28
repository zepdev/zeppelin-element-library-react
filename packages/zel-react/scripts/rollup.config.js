import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import nodeGlobals from 'rollup-plugin-node-globals';
import { terser } from 'rollup-plugin-terser';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';

const input = './src/index.js';
const globals = {
  react: 'React',
  'react-dom': 'ReactDOM'
};
const babelOptions = {
  exclude: /node_modules/,
  // We are using @babel/plugin-transform-runtime
  runtimeHelpers: true,
  configFile: './babel.config.js'
};
const commonjsOptions = {
  ignoreGlobal: true,
  include: 'node_modules/**',
  namedExports: {
    '../node_modules/prop-types/index.js': [
      'elementType',
      'bool',
      'func',
      'object',
      'oneOfType',
      'element'
    ],
    'node_modules/react-is/index.js': ['isForwardRef', 'isValidElementType']
  }
};

function onwarn(warning) {
  throw Error(warning.message);
}

export default [
  {
    input,
    onwarn,
    output: {
      file: 'build/umd/zel-react.development.js',
      format: 'umd',
      name: 'zel-react',
      globals
    },
    external: Object.keys(globals),
    plugins: [
      postcss({
        extensions: ['.css']
      }),
      copy({
        targets: [
          'src/zeppelin-element-library.css',
          'src/theme.json',
          'package.json',
          'README.md',
          'LICENSE'
        ],
        outputFolder: 'build'
      }),
      nodeResolve(),
      babel(babelOptions),
      commonjs(commonjsOptions),
      nodeGlobals(), // Wait for https://github.com/cssinjs/jss/pull/893
      replace({ 'process.env.NODE_ENV': JSON.stringify('development') })
    ]
  },
  {
    input,
    onwarn,
    output: {
      file: 'build/umd/zel-react.production.min.js',
      format: 'umd',
      name: 'zel-react',
      globals
    },
    external: Object.keys(globals),
    plugins: [
      postcss({
        extensions: ['.css']
      }),
      copy({
        targets: [
          'src/zeppelin-element-library.css',
          'src/theme.json',
          'package.json',
          'README.md',
          'LICENSE'
        ],
        outputFolder: 'build'
      }),
      nodeResolve(),
      babel(babelOptions),
      commonjs(commonjsOptions),
      nodeGlobals(), // Wait for https://github.com/cssinjs/jss/pull/893
      replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
      sizeSnapshot({ snapshotPath: 'size-snapshot.json' }),
      terser()
    ]
  }
];
