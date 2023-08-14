const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Railway_Management_System',
    password: 'Bhuwanjsh02@',
    port: 5432,
});


function httpAddNewStation(req,res) {
    const { station_number, station_name } = req.body;
    pool.query('INSERT INTO Station VALUES ($1, $2)', [station_number, station_name], (error, results) => {
        if(error){
            throw error;
        }
        res.status(201).send('A new Station has been added to the database');
    })
}


function httpGetStationsWithTrainNumber(req, res){
    const train_number = parseInt(req.params.train_number);
    pool.query('Select S.*, St.Station_Name from Stoppage S, Stations St where S.Station_Code = St.Station_Code and S.Train_Number = $1', [train_number], (error, results) => {
        if(error){
            throw error;
        }
        res.status(200).json(results.rows);
    })
}

module.exports = {
    httpAddNewStation,
    httpGetStationsWithTrainNumber
}