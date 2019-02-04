const bcrypt = require("bcryptjs");
const { promisify } = require("util");

const genSalt = promisify(bcrypt.genSalt);
const hash = promisify(bcrypt.hash);
const compare = promisify(bcrypt.compare);

module.exports.hashPassword = pass => {
    return genSalt().then(salt => {
        return hash(pass, salt);
    });
};

module.exports.checkPassword = (pass, hash) => {
    return compare(pass, hash);
};

module.exports.capital = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};
