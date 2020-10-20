module.exports = {
  root: true,
  "env": {
    "jest": true
  },
  extends: [
    '@react-native-community',
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
  ],
  rules: {
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "react/prop-types": "off"
  }
};
