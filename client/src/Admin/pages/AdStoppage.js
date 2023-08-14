import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Alert, Typography, Paper } from '@mui/material';
import DirectionsRailwayIcon from '@mui/icons-material/DirectionsRailway';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { httpAddNewStoppage } from '../hooks/requests';

const AdStoppage = () => {  
  const isAdAuth = useSelector(state => state.isAdAuth);
  const navigate = useNavigate();
  useEffect(() => {
      console.log(isAdAuth);
      if(!isAdAuth){
          navigate('/admin');
      }
  })
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: ""
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      train_number: data.get('train_no'),       
      station_number: data.get('station_no'),       
      arrival_time: data.get('arrival_time'),      
      departure_time: data.get('departure_time')
    }        
    if (actualData.train_number && actualData.station_number && actualData.arrival_time && actualData.departure_time) {
      console.log(actualData); 
      const response = await httpAddNewStoppage({
          train_number: actualData.train_no,
          station_name: actualData.name,          
        });
        const success = response.ok;
        if(success){
          document.getElementById('station-form').reset();      
          setError({ status: true, msg: "Success", type: 'success' })          
        }   
        else{
          console.log(actualData); 
          setError({ status: true, msg: "Station could not be added. Enter Valid Field Values", type: 'error' })
        }   
    } else {
      console.log(actualData); 
      setError({ status: true, msg: "Enter Valid Field Values", type: 'error' })      
    }
 }  
  return (
    <div style={{ display: 'flex', justifyContent: 'center'}}>
        <Paper elevation={3} style={{padding: '20px', marginTop: '3vh'}}>
            <Box component='form' noValidate sx={{ mt: 1 }} id='station-form' onSubmit={handleSubmit} style={{marginTop: '3vh' , width: '50vw'}}>
                <div style={{ display: 'flex' }}>
                    <DirectionsRailwayIcon />
                    <Typography variant='h3' component="div" sx={{ flexGrow: 1 }}>Add A New Stoppage</Typography>
                </div>
                <TextField margin='normal' required fullWidth id='train_no' name='train_no' label='Train Number' placeholder='Train Number' />            
                <TextField margin='normal' required fullWidth id='station_no' name='station_no' label='Station Number' placeholder='Station Number' />
                <TextField margin='normal' required fullWidth id='arrival_time' name='arrival_time' label='Arrival Time' placeholder='10:30' />            
                <TextField margin='normal' required fullWidth id='departure_time' name='departure_time' label='Departure Time' placeholder='22:45' />            
                <Box textAlign='center'>
                    <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Add Stoppage</Button>
                </Box>           
                {error.status ? <Alert severity={error.type} sx={{ mt: 3 }}>{error.msg}</Alert> : ''}                
            </Box>
        </Paper>
    </div>
  )
}

export default AdStoppage;