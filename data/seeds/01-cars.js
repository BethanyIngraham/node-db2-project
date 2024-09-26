// STRETCH
exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert([
        {vin: '3WKDD40X0CF701574', make: 'Toyota', model: 'Yaris', mileage: 90300},
        {vin: 'SCFAC23302B500083', make: 'Honda', model: 'Odyssey', mileage: 100750},
        {vin: 'KNDPB3A23B7135414', make: 'Kia', model: 'Sorento', mileage: 70560},
        {vin: 'KMHDU4ADXAU832403', make: 'Hyundai', model: 'Tuscon', mileage: 45000}
    ]);
}