
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments()
      tbl.string('VIN', 17).notNullable().unique()
      tbl.string('make', 32).notNullable()
      tbl.string('model', 64).notNullable()
      tbl.integer('mileage', 32).notNullable()
      tbl.string('transmission', 4)
      tbl.string('title', 12)
  })
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists('cars')
};
