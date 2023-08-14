const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Railway_Management_System',
    password: 'Bhuwanjsh02@',
    port: 5432,
});


function httpAddNewStoppage(req,res) {
    const { train_number, station_number, arrival_time, departure_time } = req.body;
    pool.query('INSERT INTO Stoppage VALUES ($1, $2, $3, $4)', [train_number, station_number, arrival_time, departure_time], (error, results) => {
        if(error){
            throw error;
        }
        res.status(201).send('A new Stoppage has been added to the database');
    })
}

module.exports = {
    httpAddNewStoppage
}