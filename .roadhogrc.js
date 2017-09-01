

const path=require('path')
const version=require('./package.json')

export default
{
  "entry": "./src/index.js",
  "theme":"./themeConfig.js",
  publicPath:`./`,

  outputPath:`${__dirname}/dist/`,
  "env": {
    "development": {
      "extraBabelPlugins": [
        "dva-hmr",
        "transform-runtime",
        [
          "import", {
          "libraryName": "antd",
          "style": true
        }
        ]
      ]
    },
    "production": {
      "extraBabelPlugins": [
        "transform-runtime",
        [
          "import", {
          "libraryName": "antd",
          "style": true
        }
        ]
      ]
    },
    dllPlugin : {
      exclude: ["babel-runtime"],
      include: ["dva/router", "dva/saga", "dva/fetch"]
    }
  }
}
