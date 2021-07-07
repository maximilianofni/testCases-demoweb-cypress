
const { commitInfo } = require('@cypress/commit-info');
module.exports = on => {
  on('file:preprocessor', file => {
    commitInfo().then(console.log);
  });
};
