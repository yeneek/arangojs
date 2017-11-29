import babel from "rollup-plugin-babel";
import builtins from "rollup-plugin-node-builtins";
import commonjs from "rollup-plugin-commonjs";
import json from "rollup-plugin-json";
import pkg from "./package.json";
import resolve from "rollup-plugin-node-resolve";

const nodeExternals = [
  "es6-error",
  "http",
  "http-errors",
  "https",
  "linkedlist",
  "multi-part",
  "path",
  "querystring",
  "retry",
  "stream",
  "url",
  "utf8-length",
  "xhr"
];

const babelNodeCfg = {
  exclude: ["node_modules/**"],
  plugins: ["transform-object-rest-spread", "external-helpers"],
  presets: [
    [
      "env",
      {
        targets: {
          node: "6"
        },
        modules: false
      }
    ]
  ]
};

export default [
  {
    input: "src/index.cjs.js",
    external: nodeExternals,
    output: { file: pkg.main, format: "cjs" },
    plugins: [babel(babelNodeCfg)]
  },
  {
    input: "src/index.js",
    external: nodeExternals,
    output: { file: pkg.module, format: "es" },
    plugins: [babel(babelNodeCfg)]
  },
  {
    input: "src/index.cjs.js",
    output: { file: pkg.browser, format: "umd" },
    name: "arangojs",
    plugins: [
      babel({
        exclude: ["node_modules/**"],
        plugins: ["transform-object-rest-spread", "external-helpers"],
        presets: [
          [
            "env",
            {
              targets: {
                browsers: [
                  "> 1%",
                  "last 4 versions",
                  "Firefox ESR",
                  "Explorer >= 9"
                ]
              },
              modules: false
            }
          ]
        ]
      }),
      json({ preferConst: true }),
      resolve({
        extensions: [".web.js", ".js", ".json"],
        preferBuiltins: true
      }),
      builtins(),
      commonjs()
    ]
  }
];
