import { Grid, Card, Tabs, Typography, Tab, Box } from '@mui/material';
import { useState, useEffect } from 'react';
import Pic1 from '../../images/images3.png'
import AdminLogin from './AdminLogin';
import DirectionsRailwayIcon from '@mui/icons-material/DirectionsRailway';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const TabPanel = (props) => {
  const { children, value, index } = props;
  return (
    <div role='tabpanel' hidden={value !== index}>
      {
        value === index && (
          <Box>{children}</Box>
        )
      }
    </div>
  )
}
const LoginReg = () => {
  // Handle cases of registration differently
  const isAdAuth = useSelector(state => state.isAdAuth);  
  const navigate = useNavigate();
  useEffect(() => {
      console.log(isAdAuth);
      if(isAdAuth){
          navigate('/adminhome');
      }
  })
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  return <>
    <Grid container sx={{ height: '90vh' }}>
      <Grid item lg={7} sm={5}
       style={{display: 'flex', justifyContent: 'center', alignItems: 'center'  }} 
       sx={{
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: { m: 'none', sm: 'block' }
        
      }}>
        <img style={{height:'60vh', width:'40vw'}} src={Pic1} alt='Welcome to Indian Railway' />    
      </Grid>
      <Grid item lg={5} sm={7} xs={12}>
        <Card sx={{ width: '100%', height: '100%' }}>
          <Box sx={{ mx: 3, height: 530 }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} textColor='secondary' indicatorColor='secondary' onChange={handleChange}>
                <Tab label='Login' sx={{ textTransform: 'none', fontWeight: 'bold' }}></Tab>
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <AdminLogin />
            </TabPanel>            
          </Box>
          <Box textAlign='center' sx={{ mt: 2 }}>
            <DirectionsRailwayIcon sx={{ color: 'purple', fontSize: 100 }} />
            <Typography variant='h5' sx={{ fontWeight: 'bold' }}>Indian Railways</Typography>
          </Box>
        </Card>
      </Grid>
    </Grid>
  </>;
};

export default LoginReg;
