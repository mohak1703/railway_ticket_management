import { TextField, Button, Box, Alert } from '@mui/material';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { httpGetAdminwithName } from '../../hooks/requests';


const AdminLogin = () => {
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
      adminName: data.get('adminName'),
      password: data.get('password'),
    }
    if (actualData.adminName && actualData.password) {      
      const response = await httpGetAdminwithName({
          Adminname: actualData.adminName,          
          Password: actualData.password
      });
      const success = response.ok;
      if(success){
        console.log(data); 
        dispatch({
          type: 'AD_LOG_IN',
          payload: {
            adminName: actualData.adminName
          }
        });           
        navigate('/adminhome')        
        document.getElementById('admin-login-form').reset()
        setError({ status: true, msg: "Login Success", type: 'success' })        
      }
      else{
        setError({ status: true, msg: "No such Admin Exists in Database", type: 'error' })
      }
    } else {
      setError({ status: true, msg: "All Fields are Required", type: 'error' })
    }
  }
  return <>
    <Box component='form' noValidate sx={{ mt: 1 }} id='admin-login-form' onSubmit={handleSubmit}>
      <TextField margin='normal' required fullWidth id='adminName' name='adminName' label='Admin Name' />
      <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password' />
      <Box textAlign='center'>
        <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Login</Button>
      </Box>      
      <NavLink to='/'>Are You A User?</NavLink>
      {error.status ? <Alert severity={error.type} sx={{ mt: 3 }}>{error.msg}</Alert> : ''}
    </Box>
  </>;
};

export default AdminLogin;
