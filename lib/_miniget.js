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

module.exports.defaultOptions =
  module.exports.Defaults =
  module.exports.Options =
    {
      maxRedirects: 10,
      maxRetries: 2,
      maxReconnects: 0,
      backoff: { inc: 100, max: 10000 },
    };

module.exports.MinigetError = class MinigetError extends Error {
  constructor(message) {
    super(message);
  }
};
