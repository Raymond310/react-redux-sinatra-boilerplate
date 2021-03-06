var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  bootstrapCustomizations: "./app/styles/_bootstrap-customizations.scss",
  mainSass: "./app/styles/_main.scss",
  verbose: true,
  // Default for the style loading is to put in your js files
  // styleLoader: "style-loader!css-loader!sass-loader",

  // If you want to use the ExtractTextPlugin
  //   and you want compressed
  styleLoader: process.env.NODE_ENV === 'production' ? ExtractTextPlugin.extract("style-loader", "css!sass") : "style!css!sass?outputStyle=expanded",
  //   or if you want expanded CSS
  //     styleLoader: ExtractTextPlugin.extract("style-loader", "css-loader!sass?outputStyle=expanded"),

  // ### Scripts
  // Any scripts here set to false will never
  // make it to the client, it's not packaged
  // by webpack.
  scripts: {
    //'transition': true,
    //'alert': true,
    //'button': true,
    //'carousel': true,
    //'collapse': true,
    //'dropdown': true,
    //'modal': true,
    //'tooltip': true,
    //'popover': true,
    //'scrollspy': true,
    //'tab': true,
    //'affix': true
  },
  // ### Styles
  // Enable or disable certain less components and thus remove
  // the css for them from the build.
  styles: {
    "mixins": true,

    "normalize": true,
    "print": true,

    "scaffolding": true,
    "type": true,
    //"code": true,
    "grid": true,
    //"tables": true,
    "forms": true,
    "buttons": true,

    //"component-animations": true,
    "glyphicons": true,
    //"dropdowns": true,
    //"button-groups": true,
    "input-groups": true,
    "navs": true,
    //"navbar": true,
    //"breadcrumbs": true,
    //"pagination": true,
    //"pager": true,
    //"labels": true,
    //"badges": true,
    //"jumbotron": true,
    //"jumbotron": true,
    //"thumbnails": true,
    "alerts": true,
    //"progress-bars": true,
    //"media": true,
    //"list-group": true,
    //"panels": true,
    //"wells": true,
    "close": true,
    //
    "modals": true,
    "tooltip": true,
    "popovers": true,
    //"carousel": true,
    //
    "utilities": true,
    //"responsive-utilities": true
  }
};
