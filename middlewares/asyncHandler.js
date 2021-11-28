const asyncHandler = callbackFunction => (req, res, next) => {
  return Promise.resolve(callbackFunction(req, res, next)).catch(next);
};

module.exports = asyncHandler;
