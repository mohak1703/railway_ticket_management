import * as React from 'react';
import { useMemo } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useTrains from '../../hooks/useTrains';

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

export default function TrainTable({ TrainNumber }) {
  const { trains } = useTrains(+TrainNumber);
  console.log(trains);
  // const tableBody = useMemo(() => {
  //   return trains.map((train) => {
  //       return (
  //         <StyledTableRow key={train.Train_Number}>
  //           <StyledTableCell align="center" component="th" scope="row">
  //             {train.Train_Number}
  //           </StyledTableCell>
  //           <StyledTableCell align="center">{train.Name}</StyledTableCell>
  //           <StyledTableCell align="center">{train.Total_seats}</StyledTableCell>
  //           <StyledTableCell align="center">{train.Wifi}</StyledTableCell>
  //           <StyledTableCell align="center">{train.Food}</StyledTableCell>                
  //         </StyledTableRow>  
  //       )
  //     });
  // }, [trains]);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Train Number</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Total Seats</StyledTableCell>
            <StyledTableCell align="center">Wifi</StyledTableCell>
            <StyledTableCell align="center">Food</StyledTableCell>            
          </TableRow>
        </TableHead>
        <TableBody>    
          {trains.map((train) => {
            return (
              <StyledTableRow key={train.train_number}>
                <StyledTableCell align="center" component="th" scope="row">
                  {train.train_number}
                </StyledTableCell>
                <StyledTableCell align="center">{train.name}</StyledTableCell>
                <StyledTableCell align="center">{train.total_seats}</StyledTableCell>
                <StyledTableCell align="center">{train.wifi ? 'Yes' : 'No'}</StyledTableCell>
                <StyledTableCell align="center">{train.food ? 'Yes' : 'No'}</StyledTableCell>                
              </StyledTableRow>  
        )
      })}        
        </TableBody>
      </Table>
    </TableContainer>
  );
}
