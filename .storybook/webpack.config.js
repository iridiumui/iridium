const path = require('path');

module.exports = function (baseConfig, env, defaultConfig) {
  defaultConfig.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  });

  defaultConfig.resolve.alias['@'] = path.resolve(__dirname, '../src');
  defaultConfig.resolve.alias['~'] = path.resolve(__dirname, '../');

  return defaultConfig;
};
