const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Railway_Management_System',
    password: 'Bhuwanjsh02@',
    port: 5432,
});

function httpGetTotalSeatsWithTrainNumber(req, res){
    const train_number = parseInt(req.params.train_number);
    pool.query('SELECT total_seats FROM Trains WHERE Train_Number = $1', [train_number], (error, results) => {
        if(error){
            throw error;
        }
        res.status(200).json(results.rows);
    })
}

module.exports = {   
    httpGetTotalSeatsWithTrainNumber,
}