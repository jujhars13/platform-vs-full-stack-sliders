module.exports = {
  diff: true,
  parallel: true,
  recursive: true,
  require: ["chai"],
  extension: ["js"],
  package: "./package.json",
  reporter: "list",
  timeout: 2000,
  ui: "bdd",
  "watch-files": ["src/**/*.test.js"],
  "watch-ignore": ["node_modules"],
  "trace-warnings": false //node flags not ok
};
