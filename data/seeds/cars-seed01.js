
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { VIN: 'BOGUSVINNUMBER001', make: 'FORD', model: 'Mustang', mileage: 0 },
        { VIN: 'BOGUSVINNUMBER002', make: 'FORD', model: 'Mustang', mileage: 0 },
        { VIN: 'BOGUSVINNUMBER003', make: 'FORD', model: 'Mustang', mileage: 0 },
        { VIN: 'BOGUSVINNUMBER004', make: 'FORD', model: 'Mustang', mileage: 0 },
      ]);
    });
};
