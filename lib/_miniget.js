var miniget;
var minigetpromise;
module.exports = (...args) => {
  return miniget(...args);
};

module.exports.set = (mg, mgp) => {
  miniget = mg;
  minigetpromise = mgp;
};

module.exports.promise = (...args) => {
  return minigetpromise(...args);
};
