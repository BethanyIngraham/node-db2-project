// STRETCH
exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert([
        {vin: '1234ABCD98NW457VA', make: 'Toyota', model: 'Yaris', mileage: 90300},
        {vin: '098BGOA461SAXL331', make: 'Honda', model: 'Odyssey', mileage: 100750},
        {vin: 'OPV467AQ2V9L260NE', make: 'Kia', model: 'Sorento', mileage: 70560},
        {vin: 'ZXT258F1SA7NW357P', make: 'Hyundai', model: 'Tuscon', mileage: 45000}
    ]);
}