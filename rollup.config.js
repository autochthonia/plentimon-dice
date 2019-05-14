import commonjs from 'rollup-plugin-commonjs';
import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import pkg from './package.json';

const extensions = [
  '.js', '.jsx', '.ts', '.tsx',
];

export default {
  external: [],
  input: "src/plentimon.ts",
  output: {
    file: "lib/index.js",
    format: "cjs"
  },
  plugins: [
    resolve({
      // use "module" field for ES6 module if possible
      module: true, // Default: true

      // use "jsnext:main" if possible
      // – see https://github.com/rollup/rollup/wiki/jsnext:main
      jsnext: true, // Default: false

      // use "main" field or index.js, even if it's not an ES6 module
      // (needs to be converted from CommonJS to ES6
      // – see https://github.com/rollup/rollup-plugin-commonjs
      main: true, // Default: true

      // not all files you want to resolve are .js files
      extensions, // Default: [ '.mjs', '.js', '.json', '.node' ]

      // If true, inspect resolved files to check that they are
      // ES2015 modules
      modulesOnly: true // Default: false
    }),
    babel({
      exclude: "node_modules/**", // only transpile our source code
      extensions,
      include: ['src/**/*'],
      plugins: ["@babel/plugin-external-helpers"],
      presets: [["@babel/preset-env", { modules: false }]]
    })
  ]
};
