class ApiError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${this.statusCode}`.startsWith(4) ? "fail" : "error";
    this.message = message;
    this.isOperational = true;
  }
}

module.exports = ApiError;
