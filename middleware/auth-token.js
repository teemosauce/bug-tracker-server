const JWT = require("../utils/jwt")

let whiteList = ['/user/login']
module.exports = () => {
    return (req, res, next) => {
        console.log(req.method, req.url)
        let { url } = req
        if (whiteList.includes(url)) {
            return next()
        }

        let { authorization } = req.headers
        if (!authorization) {
            return res.status(401).send({
                message: '没有token'
            })
        }

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