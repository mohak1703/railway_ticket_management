import React, { useEffect } from 'react';
import {  Typography, Paper } from '@mui/material';
import DirectionsRailwayIcon from '@mui/icons-material/DirectionsRailway';
import TicketTable from './tables/getTicketInfo.js';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Tickets = () => {  
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
            <Typography variant='h3' component="div" sx={{ flexGrow: 1 }}>Tickets You Booked</Typography>
          </div>
          <TicketTable userEmail={userEmail}/>          
        </Paper>
    </div>
  )
}

export default Tickets;