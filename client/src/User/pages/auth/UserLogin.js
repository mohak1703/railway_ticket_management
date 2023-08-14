import { TextField, Button, Box, Alert } from '@mui/material';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { httpGetUserwithEmail } from '../../hooks/requests';


const UserLogin = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: ""
  });
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get('email'),
      password: data.get('password'),
    }
    if (actualData.email && actualData.password) {
      // console.log(actualData);
      // console.log(actualData);
      const response = await httpGetUserwithEmail({
          User_Email: actualData.email,          
          Password: actualData.password
      });
      const success = response.ok;
      if(success){
        console.log(data); 
        dispatch({
          type: 'LOG_IN',
          payload: {
            email: actualData.email
          }
        });           
        navigate('/home')        
        document.getElementById('login-form').reset()
        setError({ status: true, msg: "Login Success", type: 'success' })        
      }
      else{
        setError({ status: true, msg: "No such User Exists in Database", type: 'error' })
      }
    } else {
      setError({ status: true, msg: "All Fields are Required", type: 'error' })
    }
  }
  return <>
    <Box component='form' noValidate sx={{ mt: 1 }} id='login-form' onSubmit={handleSubmit}>
      <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' type='email' />
      <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password' />
      <Box textAlign='center'>
        <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Login</Button>
      </Box>
      <NavLink to='/admin' variant='outlined' >Are You An Admin?</NavLink>      
           
      {error.status ? <Alert severity={error.type} sx={{ mt: 3 }}>{error.msg}</Alert> : ''}
    </Box>
  </>;
};

export default UserLogin;
