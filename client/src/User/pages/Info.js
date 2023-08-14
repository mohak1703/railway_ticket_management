import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Alert, Typography, Paper } from '@mui/material';
import DirectionsRailwayIcon from '@mui/icons-material/DirectionsRailway';
import TrainTable from './tables/getTrainInfo.js';
import StationTable from './tables/getStationInfo.js';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Info = () => {
    const isAuth = useSelector(state => state.isAuth);
    const navigate = useNavigate();
    useEffect(() => {
        console.log(isAuth);
        if(!isAuth){
            navigate('/');
        }
    })
    // Pass The PNR_NUMBER recieved from the form to the TrainTable and StationTable as a Prop
    const [error, setError] = useState({
        status: false,
        msg: "",
        type: ""
      });
      const [TrainNumber, setTrainNumber] = useState(0);
      const [isTable, setIsTable] = useState(false);
      
      const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
          train_no: +data.get('train_no'),          
        }        
        if (actualData.train_no) {
          console.log(actualData);
          setTrainNumber(actualData.train_no);    
          setIsTable(true);
          document.getElementById('train-form').reset();
          setError({ status: true, msg: "Success", type: 'success' })          
        } else {
          setError({ status: true, msg: "Enter valid Train Number", type: 'error' })
          setIsTable(false);
        }
     }
  return (
    <div style={{ display: 'flex', justifyContent: 'center'}}>
        <Paper elevation={3} style={{padding: '20px', marginTop: '3vh'}}>
            <Box component='form' noValidate sx={{ mt: 1 }} id='train-form' onSubmit={handleSubmit} style={{marginTop: '3vh' , width: '50vw'}}>
                <div style={{ display: 'flex' }}>
                    <DirectionsRailwayIcon />
                    <Typography variant='h3' component="div" sx={{ flexGrow: 1 }}>Get Info about a Train</Typography>
                </div>
                <TextField margin='normal' required fullWidth id='train_no' name='train_no' label='Train Number' />            
                <Box textAlign='center'>
                    <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Get Info</Button>
                </Box>           
                {error.status ? <Alert severity={error.type} sx={{ mt: 3 }}>{error.msg}</Alert> : ''}
                {isTable &&
                    <div>
                        <Typography variant='h5' component="div" style={{marginTop: '10px', padding: '10px'}} sx={{ flexGrow: 1 }}>Train Info</Typography>
                        <TrainTable key = { TrainNumber } TrainNumber = { TrainNumber }/>
                        <Typography variant='h5' component="div" style={{marginTop: '10px', padding: '10px'}} sx={{ flexGrow: 1 }}>Station Info</Typography>
                        <StationTable key = { TrainNumber } TrainNumber = { TrainNumber } />
                    </div>                    
                }
            </Box>
        </Paper>
    </div>
  )
}

export default Info