const UserModel = require('../../models/user')

module.exports = UserService = {
    login: async ({ username, password }) => {
        let result = UserModel.find({
            username,
            password
        })
        console.log(result)
        return (username == 'admin') && (password == '123456')
    },

    getInfo: ({ id }) => {
        return {
            id,
            name: '小明',
            sex: 1,
            age: 32,
        }
    }
}