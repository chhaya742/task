const knex=require("../database/db")
knex.schema.hasTable('user').then((exists) =>{
    if (!exists) {
      return knex.schema.createTable('user', (table) =>{
        table.increments('user_id').primary();
        table.string('profile_pic').defaultTo("profile")
        table.string('fullname').notNullable()
        table.bigint('phone_no').notNullable().unique();
        table.string('email').notNullable().unique();
        table.string('password').notNullable()
        table.string('confirm_password').notNullable()
        table.string('address').notNullable()
        table.string('country').notNullable();
        table.string('state').notNullable();
        table.string('city').notNullable();
        table.integer('pincode').notNullable();
        table.integer('otp')
        table.boolean("Remember_Me").defaultTo(true)
        table.timestamp('createdAt').defaultTo(knex.fn.now());
        table.timestamp('updatedAt').defaultTo(knex.fn.now());
      });
    }
})
module.exports=knex