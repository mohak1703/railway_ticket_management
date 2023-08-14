import React, { useEffect } from 'react';
import {  Typography, Paper } from '@mui/material';
import DirectionsRailwayIcon from '@mui/icons-material/DirectionsRailway';
import CancelTicketTable from './tables/cancelTicket.js';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Cancel = () => {    
    const isAuth = useSelector(state => state.isAuth);
    const userEmail = useSelector(state => state.userEmail);
    const navigate = useNavigate();
    useEffect(() => {
        console.log(isAuth);
        if(!isAuth){
            navigate('/');
        }
    })
  return (
    <div style={{ display: 'flex', justifyContent: 'center'}}>
        <Paper elevation={3} style={{padding: '20px', marginTop: '3vh'}}>
          <div style={{ display: 'flex', marginBottom: '3vh'}}>
            <DirectionsRailwayIcon />
            <Typography variant='h3' component="div" sx={{ flexGrow: 1 }}>Cancel Tickets You Booked</Typography>
          </div>
          <CancelTicketTable userEmail={userEmail}/>
        </Paper>
    </div>
  )
}

export default Cancel;