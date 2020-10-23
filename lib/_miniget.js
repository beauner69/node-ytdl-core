var miniget;
var minigetpromise;
module.exports = (...args) => {
  const promise = minigetpromise(...args);
  // return miniget(...args);

  return {
    text: async () => {
      const what = await promise;
      return await what.text();
    },
  };
};

module.exports.set = (mg, mgp) => {
  miniget = mg;
  minigetpromise = mgp;
};

module.exports.promise = (...args) => {
  return minigetpromise(...args);
};
