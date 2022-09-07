
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id');
    table.string('first_name', 255).notNullable();
    table.string('last_name', 255).notNullable();
    table.string('email').notNullable().unique();
    table.string('user_name', 255).notNullable().unique();
    table.string('password').notNullable();
    table.timestamps(true, true);
    })

};


exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
