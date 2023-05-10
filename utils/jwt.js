let jsonwebtoken = require('jsonwebtoken')

const SECRET = '8J9VJ#nW^rD&ksSx'

let JWT = {
    /**
     * 生成token
     * @param {string | Buffer | object} payload 数据
     * @param {string | number} expires 过期时间
     * @returns 
     */
    generate(payload, expires) {
        return jsonwebtoken.sign(payload, SECRET, {
            expiresIn: expires
        })
    },

    /**
     * 验证token
     * @param {string} token 验证的token
     * @returns 
     */
    verify(token) {
        try {
            return jsonwebtoken.verify(token, SECRET)
        } catch (error) {
            return false
        }
    }
}
module.exports = JWT