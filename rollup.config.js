import babel from "rollup-plugin-babel";
import builtins from "rollup-plugin-node-builtins";
import commonjs from "rollup-plugin-commonjs";
import json from "rollup-plugin-json";
import pkg from "./package.json";
import resolve from "rollup-plugin-node-resolve";

export default [
  {
    input: "src/index.js",
    external: [
      "es6-error",
      "http-errors",
      "linkedlist",
      "multi-part",
      "retry",
      "utf8-length",
      "xhr"
    ],
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" }
    ],
    plugins: [
      babel({
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
      })
    ]
  },
  {
    input: "src/index.js",
    output: {
      file: pkg.browser,
      format: "umd"
    },
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
      resolve({ extensions: [".web.js", ".js", ".json"] }),
      builtins(),
      commonjs()
    ]
  }
];
