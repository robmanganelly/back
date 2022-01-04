module.exports = class AppError extends Error {
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
        switch (statusCode){
            case 404:
                this.status = 'not found';
                break;
            case 500:
                this.status = 'internal server error';
                break;
            case 400:
                this.status = 'bad request';
                break;
            case 401:
                this.status = 'unauthorized';
                break;
            case 403:
                this.status = 'forbidden';
                break;
            default:
                this.status = 'unknown error'
        }
        this.sourceErr = 'appError'
        this.isOperational = true;
        this.message = message;
        Error.captureStackTrace(this, this.constructor)
    }
}
