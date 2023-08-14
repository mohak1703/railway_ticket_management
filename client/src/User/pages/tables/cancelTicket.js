import * as React from 'react';
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useTickets from '../../hooks/useTickets';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function CancelTicketTable({ userEmail }) {
  // TO DO -> Get the Details of the Ticket using the Email_Id of user which is either kept in redux datastore or passed using a prop
  const { tickets, cancelTicket } = useTickets(userEmail);    
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Cancel</StyledTableCell>
            <StyledTableCell align="center">Train Number</StyledTableCell>
            <StyledTableCell align="center">Train Name</StyledTableCell>
            <StyledTableCell align="center">PNR Number</StyledTableCell>
            <StyledTableCell align="center">Date of Journey</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>   
            {tickets.map((ticket) => ( 
                <StyledTableRow key={ticket.pnr}>
                    <StyledTableCell align="center"><Button variant='outlined' onClick={() => cancelTicket(ticket.pnr)}> Cancel </Button></StyledTableCell>
                    <StyledTableCell align="center">{ticket.train_number}</StyledTableCell>
                    <StyledTableCell align="center">{ticket.name}</StyledTableCell>
                    <StyledTableCell align="center">{ticket.pnr}</StyledTableCell>
                    <StyledTableCell align="center">{ticket.date_of_journey}</StyledTableCell>                     
                </StyledTableRow>      
                )
            )}        
        </TableBody>
      </Table>
    </TableContainer>
  );
}
