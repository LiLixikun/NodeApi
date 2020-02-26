
class HttpException extends Error {
    constructor(errorCode = 10000, msg = '服务区异常', code = 400) {
        super()
        this.errorCode = errorCode;
        this.msg = msg;
        this.code = code
    }
}


class ParameterException extends HttpException {
    constructor(msg, errorCode) {
        super()
        this.code = 400;
        this.msg = msg || "参数错误";
        this.errorCode = errorCode || 1000;
    }
}

//操作成功
class Success extends HttpException {
    constructor(msg, errorCode) {
        super()
        this.code = 201
        this.msg = msg || 'ok'
        this.errorCode = errorCode || 0
    }
}


class NotFound extends HttpException {
    constructor(msg, errorCode) {
        super()
        this.code = 404
        this.msg = msg || '未找到'
        this.errorCode = errorCode || 404
    }
}


class AuthFailed extends HttpException {
    constructor(msg, errorCode) {
        super()
        this.code = 401
        this.msg = msg || '未找到'
        this.errorCode = errorCode || 1004
    }
}

module.exports = {
    HttpException,
    ParameterException,
    Success,
    NotFound,
    AuthFailed
}