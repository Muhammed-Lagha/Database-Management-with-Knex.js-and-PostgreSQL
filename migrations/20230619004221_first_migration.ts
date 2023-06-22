import { table } from "console";
import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema
    .createTable('author', table => {
        table.increments('author_Id').notNullable().primary()
        table.string('author_Name').notNullable()
        table.text('author_Bio').notNullable()
        table.timestamps(true ,true).index()

    })
    .createTable('genres', table => {
        table.increments('genre_Id').primary()
        table.string('genre_Name').unique().index()

    })
    .createTable('book', table => {
        table.increments('Book_ID').primary()
        table.text('book_Title').notNullable().index().unique()
        table.text('book_Description').nullable()
        table.integer('book_Prise').notNullable()
        table.integer('author_Id').references('author_Id').inTable('author').notNullable()
        table.integer('genre_Id').references('genre_Id').inTable('genres').notNullable()
        table.timestamps(true ,true).index()

    })
    
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema
    .dropTable('book')
    .dropTable('genre')
    .dropTable('author')
}

