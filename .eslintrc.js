module.exports = {
  "extends": [
    "airbnb-base",
    "prettier"
  ],
  "plugins": [
    "prettier"
  ],
  "env": {
    "browser": true,
    "jasmine": true
  },
  "rules": {
    "prettier/prettier": ["error", { "singleQuote": true }]
  }
};