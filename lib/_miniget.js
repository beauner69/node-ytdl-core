var miniget;
module.exports = (...args) => {
  return miniget(...args);
};

module.exports.set = mg => {
  miniget = mg;
};
