const knex = require('knex')({
    client: 'postgresql',
    connection: {
        host :      process.env.DB_HOST,
        port :      5432,
        user :      process.env.DB_USER,
        password :  process.env.DB_PASS,
        database :  process.env.DB,
    }
});

console.log(knex.connection);

const databaseServiceFactory = () => {
    const TABLE = 'users';

    const getUser = async (username) => {
        const user = await knex(TABLE).select().where('email', username);
        console.log(username);
        console.log(user)
        if (user.length === 0) {
            throw new Error("User not found");
        } 
        return user[0];
    };

    return {getUser};
};

module.exports = {
    databaseServiceFactory
}; 