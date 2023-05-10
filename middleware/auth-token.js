const JWT = require("../utils/jwt")

// 请求白名单
let whiteList = ['/user/login', '/user/register']
module.exports = function () {
    return function (req, res, next) {
        let { path } = req // 请求路径
        if (whiteList.includes(path)) {
            return next()
        }

        let { authorization } = req.headers
        if (!authorization) {
            return res.status(401).send({
                message: '没有token'
            })
        }
        // token 格式 Bearer *********************
        let token = authorization.split(' ').pop()
        let success = JWT.verify(token)
        if (!success) {
            return res.status(401).send({
                message: 'token已过期'
            })
        }

        next()
    }
}