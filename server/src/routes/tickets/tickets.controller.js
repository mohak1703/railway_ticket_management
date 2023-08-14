const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Railway_Management_System',
    password: 'Bhuwanjsh02@',
    port: 5432,
});


function httpAddNewTicket(req,res) {
    const { train_number, pnr, date_of_journey, user_email } = req.body;
    pool.query('INSERT INTO Ticket VALUES ($1, $2, $3, $4)', [ train_number, pnr, user_email, date_of_journey], (error, results) => {
        if(error){
            throw error;
        }
        res.status(201).send('A new ticket has been added to the database');
    })
}

function httpGetTicketsWithEmail(req, res){
    const user_email = req.params.user_email;
    pool.query('SELECT T.*, Tr.Name FROM Ticket T, Trains Tr WHERE T.Train_Number=Tr.Train_Number and T.user_email = $1', [user_email], (error, results) => {
        if(error){
            throw error;
        }
        res.status(200).json(results.rows);
    })
}

const httpDeleteTicketWithPNR = (req,res) => {
    const pnr = req.params.pnr;
    pool.query('DELETE FROM Ticket WHERE pnr = $1', [pnr], (error, results) => {
        if(error){
            throw error;
        }
        res.status(201).send(`Ticket deleted with PNR: ${pnr}`);
    })
}

module.exports = {
    httpAddNewTicket,
    httpGetTicketsWithEmail,
    httpDeleteTicketWithPNR,
}