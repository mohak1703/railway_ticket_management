const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Railway_Management_System',
    password: 'Bhuwanjsh02@',
    port: 5432,
});


function httpAddNewTrain(req,res) {
    const { train_number, name, wifi, food, total_seats } = req.body;
    pool.query('INSERT INTO Trains VALUES ($1, $2, $3, $4, $5)', [train_number, name, wifi, food, total_seats], (error, results) => {
        if(error){
            throw error;
        }
        res.status(201).send('A new Train has been added to the database');
    })
}


function httpGetTrainWithTrainNumber(req, res){
    const train_number = parseInt(req.params.train_number);
    pool.query('SELECT * FROM Trains WHERE Train_Number = $1', [train_number], (error, results) => {
        if(error){
            throw error;
        }
        res.status(200).json(results.rows);
    })
}

module.exports = {
    httpAddNewTrain,
    httpGetTrainWithTrainNumber   
}