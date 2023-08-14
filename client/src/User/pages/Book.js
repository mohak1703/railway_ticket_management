
import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Alert, Typography, Paper } from '@mui/material';
import DirectionsRailwayIcon from '@mui/icons-material/DirectionsRailway';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { httpAddNewTicket } from '../hooks/requests';
import { httpGetTotalSeatsWithTrainNumber } from '../hooks/requests';
import { httpGetTotalTicketsWithTrainNumber } from '../hooks/requests';

const Book = () => {  
  const isAuth = useSelector(state => state.isAuth);
  const userEmail = useSelector(state => state.userEmail); 
  const navigate = useNavigate();
  useEffect(() => {
      console.log(isAuth);
      if(!isAuth){
          navigate('/');
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
      date: data.get('date')               
    }        
    console.log((Math.floor(Math.random()%1000)).toString() +  userEmail.substr(0,2) + actualData.train_no.substr(0,3));
    if (actualData.train_no && actualData.date) {
      console.log(actualData); 
      const resp1 = await httpGetTotalSeatsWithTrainNumber(actualData.train_no);
      const resp2 = await httpGetTotalTicketsWithTrainNumber(actualData.train_no, actualData.date);
          
      console.log(resp1);
      console.log(resp2);
      // console.log(seats);
      // console.log(totalTickets);

      if(resp1[0].total_seats > resp2[0].count){
        const response = await httpAddNewTicket({
          train_number: actualData.train_no,
          pnr: (Math.floor(Math.random()*100)).toString() + userEmail.substr(0,2) + actualData.train_no.substr(0,3),
          user_email: userEmail,          
          date_of_journey: actualData.date.toString(),
        });
        const success = response.ok;
        if(success){
          document.getElementById('booking-form').reset();      
          setError({ status: true, msg: "Success", type: 'success' })          
        }   
        else{
          console.log(actualData); 
          setError({ status: true, msg: "Your Ticket could not be booked. Please Try again", type: 'error' })
        }
      }
      else{
        console.log(actualData); 
        setError({ status: true, msg: "Your Ticket could not be booked. Train is Full", type: 'error' })
      }
      
    } else {
      console.log(actualData); 
      setError({ status: true, msg: "Enter Valid Field Values", type: 'error' })      
    }
 }  
  return (
    <div style={{ display: 'flex', justifyContent: 'center'}}>
        <Paper elevation={3} style={{padding: '20px', marginTop: '3vh'}}>
            <Box component='form' noValidate sx={{ mt: 1 }} id='booking-form' onSubmit={handleSubmit} style={{marginTop: '3vh' , width: '50vw'}}>
                <div style={{ display: 'flex' }}>
                    <DirectionsRailwayIcon />
                    <Typography variant='h3' component="div" sx={{ flexGrow: 1 }}>Book your Train Ticket</Typography>
                </div>
                <TextField margin='normal' required fullWidth id='train_no' name='train_no' label='Train Number' placeholder='Train Number' />            
                <label style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  Date of Journey:
                  <TextField margin='normal' required fullWidth id='date' name='date' type='date' />                 
                </label>                            
                <Box textAlign='center'>
                    <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Book Ticket</Button>
                </Box>           
                {error.status ? <Alert severity={error.type} sx={{ mt: 3 }}>{error.msg}</Alert> : ''}                
            </Box>
        </Paper>
    </div>
  )
}

export default Book;