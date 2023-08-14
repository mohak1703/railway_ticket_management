import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useStations from '../../hooks/useStations'

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


export default function StationTable({ TrainNumber }) {
  
  const { stations } = useStations(+TrainNumber);
  console.log(stations);
  // Recieve the PNR_NUMBER from the Info Component and then find the stations this train visits using the database and display only them
 
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Station ID</StyledTableCell>
            <StyledTableCell align="center">Station Name</StyledTableCell>
            <StyledTableCell align="center">Arrival Time</StyledTableCell>
            <StyledTableCell align="center">Departure Time</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>           
        {stations.map((station) => {
            return (
              <StyledTableRow key={station.station_code}>
                <StyledTableCell align="center" component="th" scope="row">
                  {station.station_code}
                </StyledTableCell>
                <StyledTableCell align="center">{station.station_name}</StyledTableCell>
                <StyledTableCell align="center">{station.arrival_time}</StyledTableCell>
                <StyledTableCell align="center">{station.departure_time}</StyledTableCell>                              
              </StyledTableRow>  
            )
        })}             
        </TableBody>
      </Table>
    </TableContainer>
  );
}
