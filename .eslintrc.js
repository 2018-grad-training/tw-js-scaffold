module.exports = {
  "extends": [
    "airbnb-base",
    "prettier"
  ],
  "plugins": [
    "prettier"
  ],
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "jasmine": true
  },
  "rules": {
    "prettier/prettier": ["error", { "singleQuote": true }],
    "strict": 0
  }
};