module.exports = UserService = {
    login: async ({ username, password }) => {
        return username && password
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