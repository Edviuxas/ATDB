const User = require('../Models/UsersBuyers');

module.exports.loginUser = async (query) => {
    username = query.username;
    password = query.password;
    const result = await User.find({ username: username, password:password });

    if (result.length > 0)
        return JSON.stringify(result[0]);
    else
        return 'User not found';
}