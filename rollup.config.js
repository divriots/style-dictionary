import nodeResolve from "@rollup/plugin-node-resolve";
import { string } from "rollup-plugin-string";
import { terser } from "rollup-plugin-terser";
import visualizer from 'rollup-plugin-visualizer';

const package_json = require('./package.json')
const plugins = [
  nodeResolve({ preferBuiltins: true }), // resolve deps from node_modules
  string({ include: "**/*.template" }),
  visualizer({open:true}),
  terser()
];
export default {
  external: Object.keys(package_json.dependencies),
  input: "index.js",
  output: {
    format: "esm",
    file: "dist/index.js"
  },
  plugins
};
