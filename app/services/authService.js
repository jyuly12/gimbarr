/* import * as bcrypt from "bcryptjs" */

const authServiceFactory = () => {

    const validate = async (password, dbPassword) => {
        const res = (password === dbPassword)
        console.log('validate '+res);
        return res
        
    };
    return {validate};
};

module.exports = {
    authServiceFactory
};