require("core-js/shim");
require("babel-core/register")({
  plugins: ["transform-object-rest-spread"],
  presets: [
    [
      "env",
      {
        targets: {
          node: "current"
        }
      }
    ]
  ]
});
