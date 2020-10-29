module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    //'module:react-native-dotenv',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@Components': './src/components',
          '@Styled': './src/styled',
          '@Definitions': './src/definitions',
          '@Types': './src/types',
          '@I18n': './src/i18n',
          '@Router': './src/router',
          '@Services': './src/services',
          '@Scenes': './src/scenes',
          '@Assets': './assets',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: false,
      },
    ],
  ],
};
