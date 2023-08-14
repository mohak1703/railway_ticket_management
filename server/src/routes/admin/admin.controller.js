const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Railway_Management_System',
    password: 'Bhuwanjsh02@',
    port: 5432,
});

function httpGetAdminWithName(req, res){
    const { Adminname, Password } = req.body;
    pool.query('Select * FROM Admin where Adminname = $1 and Password = $2', [Adminname, Password], (error, results) => {
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
    httpGetAdminWithName,
}