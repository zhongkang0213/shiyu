/* config-overrides.js */
const { paths } = require('react-app-rewired');
const path = require("path");
const {
    override,
    addDecoratorsLegacy,
    disableEsLint,
    addWebpackAlias
} = require("customize-cra");


module.exports = override(
    // enable legacy decorators babel plugin
  addDecoratorsLegacy(),

  // disable eslint in webpack
  disableEsLint(),

  addWebpackAlias({
    "components": path.resolve(__dirname, `${paths.appSrc}/components/`),
    'pages': path.resolve(__dirname, `${paths.appSrc}/pages/`),
    'store': path.resolve(__dirname, `${paths.appSrc}/store/`),
    'routes': path.resolve(__dirname, `${paths.appSrc}/routes/`),
    'common': path.resolve(__dirname, `${paths.appSrc}/common/`),
    'service': path.resolve(__dirname, `${paths.appSrc}/service/`)
  })
)