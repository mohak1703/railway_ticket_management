const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Railway_Management_System',
    password: 'Bhuwanjsh02@',
    port: 5432,
});

function httpGetTotalTicketsWithTrainNumber(req, res){
    const train_number = parseInt(req.params.train_number);
    const date = (req.params.date)
    pool.query('Select count(pnr) from ticket where train_number = $1 and date_of_journey = $2', [train_number, date], (error, results) => {
        if(error){
            throw error;
        }
        res.status(200).json(results.rows);
    })
}

module.exports = {   
    httpGetTotalTicketsWithTrainNumber,
}