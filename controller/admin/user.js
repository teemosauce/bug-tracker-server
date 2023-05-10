let UserService = require('../../services/admin/user')
let JWT = require('../../utils/jwt')

module.exports = UserController = {
    login: async (req, res) => {
        let success = await UserService.login(req.body)
        if (success) {
            let token = JWT.generate({
                username: req.body.username
            }, (30 * 60) + 's')
            res.header('Authorization', token)
            res.send({
                success: true,
                message: '用户登录成功'
            })
        } else {
            res.send({
                success: false,
                message: '用户登录失败'
            })
        }

    },

    getInfo: async (req, res) => {
        console.log(req.query)
        let info = await UserService.getInfo(req.query)
        res.send({
            success: true,
            data: info
        })
    }
}