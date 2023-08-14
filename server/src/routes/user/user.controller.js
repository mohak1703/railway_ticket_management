const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Railway_Management_System',
    password: 'Bhuwanjsh02@',
    port: 5432,
});


function httpAddNewUser(req,res) {
    const { User_Email, Username, Password } = req.body;
    pool.query('INSERT INTO Account VALUES ($1, $2, $3)', [User_Email, Username, Password], (error, results) => {
        if(error){
            throw error;
        }
        res.status(201).send('A new user has been added to the database');
    })
}

function httpGetUserWithEmail(req, res){
    const { User_Email, Password } = req.body;
    pool.query('Select * FROM Account where User_Email = $1 and Password = $2', [User_Email, Password], (error, results) => {
        if(error){
            throw error;
        }
        else{
            if(results.rows.length){
                res.status(201).json(results.rows);
            }
            else{
                res.status(400).json('Invalid Username or Password');
            }
        }
        
    })
}

module.exports = {
    httpAddNewUser,
    httpGetUserWithEmail,
}