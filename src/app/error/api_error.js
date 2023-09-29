const { StatusCodes } = require("http-status-codes");

class ApiError extends Error{
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
    }
}

class NotFountError extends ApiError{
    constructor(message) {
        super(StatusCodes.NOT_FOUND, message);
    }
}

class InternalServerError extends ApiError {
    constructor(message) {
        super(StatusCodes.INTERNAL_SERVER_ERROR, message);
    }
}

module.exports = {
    ApiError,
    NotFountError,
    InternalServerError
}