const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const plugins = [
  new webpack.DefinePlugin({ // Переменные окружения
    TEST_ENV_VAR: JSON.stringify(process.env.DEV_MOD),
  }),
];

const devMode = process.env.DEV_MOD === 'dev';
if (devMode) {
  // eslint-disable-next-line no-console
  console.log('Run in develop mode');
  plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false })); // Анализ бандлов
} else {
  // eslint-disable-next-line no-console
  console.log('Run in prod mode');
}

module.exports = {
  plugins,
};
