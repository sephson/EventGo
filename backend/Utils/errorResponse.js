const errorResponse = (message, statusCode) => {
  this.statusCode = statusCode;
  this.message = message;
};

module.exports = errorResponse;
