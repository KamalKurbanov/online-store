class ErrorHandler {
    constructor(status, message) {
         this.status = status
         this.message = message
    }

    static badRequest(message) {
        return new ErrorHandler(404, message)
    }

    static forbidden(message) {
        return new ErrorHandler(403, message)
    }


    static internal(message) {
        return new ErrorHandler(500, message)
    }
}

module.exports = ErrorHandler