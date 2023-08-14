import React, { useState, useEffect } from 'react';
import { TextField, MenuItem, Button, Box, Alert, Typography, Paper } from '@mui/material';
import DirectionsRailwayIcon from '@mui/icons-material/DirectionsRailway';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { httpAddNewTrain } from '../hooks/requests';

const AdTrain = () => {  
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
      train_no: data.get('train_no'),       
      name: data.get('name'),
      wifi: data.get('wifi'),
      food: data.get('food'),
      total_seats: data.get('total_seats')

    }  
    if(Number.isInteger(actualData.total_seats) && actualData.total_seats > 0){      
      if (actualData.train_no && actualData.name && actualData.wifi && actualData.food && actualData.total_seats) {
        console.log(actualData); 
        const response = await httpAddNewTrain({
            train_number: actualData.train_no,
            name: actualData.name,
            wifi: actualData.wifi,          
            food: actualData.food,
            total_seats: actualData.total_seats
          });
          const success = response.ok;
          if(success){
            document.getElementById('train-form').reset();      
            setError({ status: true, msg: "Success", type: 'success' })          
          }   
          else{
            console.log(actualData); 
            setError({ status: true, msg: "Train could not be added. Enter Valid Field Values", type: 'error' })
          }   
      } else {
        console.log(actualData); 
        setError({ status: true, msg: "Enter Valid Field Values", type: 'error' })      
      }
    } 
    else{
      console.log(actualData); 
      setError({ status: true, msg: "Train could not be added. Enter Valid Field Values", type: 'error' })
    }
} 
  return (
    <div style={{ display: 'flex', justifyContent: 'center'}}>
        <Paper elevation={3} style={{padding: '20px', marginTop: '3vh'}}>
            <Box component='form' noValidate sx={{ mt: 1 }} id='train-form' onSubmit={handleSubmit} style={{marginTop: '3vh' , width: '50vw'}}>
                <div style={{ display: 'flex' }}>
                    <DirectionsRailwayIcon />
                    <Typography variant='h3' component="div" sx={{ flexGrow: 1 }}>Add A New Train</Typography>
                </div>
                <TextField margin='normal' required fullWidth id='train_no' name='train_no' label='Train Number' placeholder='Train Number' />            
                <TextField margin='normal' required fullWidth id='name' name='name' label='Train Name' placeholder='Train Number' />            
                <TextField id="wifi" name="wifi" label="Wifi" value="Yes" select>
                    <MenuItem value="Yes">Yes</MenuItem>
                    <MenuItem value="No">No</MenuItem>
                </TextField>  
                <TextField id="food" name="food" label="Food" value="Yes" select>
                    <MenuItem value="Yes">Yes</MenuItem>
                    <MenuItem value="No">No</MenuItem>
                </TextField> 
                <TextField margin='normal' required fullWidth id='total_seats' name='total_seats' label='Total Seats' placeholder='Total Seats' inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}/>
                <Box textAlign='center'>
                    <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Add Train</Button>
                </Box>           
                {error.status ? <Alert severity={error.type} sx={{ mt: 3 }}>{error.msg}</Alert> : ''}                
            </Box>
        </Paper>
    </div>
  )
}

export default AdTrain;