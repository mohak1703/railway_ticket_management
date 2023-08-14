import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import DirectionsRailwayIcon from '@mui/icons-material/DirectionsRailway';
import { useDispatch } from 'react-redux';


const Navbar = ({ isAuth, setAuth }) => {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch({
      type: 'AD_LOG_OUT',
      payload: {}
    });  
  }
  
  return <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <DirectionsRailwayIcon />
          <Typography variant='h5' component="div" sx={{ flexGrow: 1 }}>Indian Railways</Typography>

          <Button component={NavLink} to='/adminhome'  sx={{ color: 'white', textTransform: 'none' }}>Home</Button>

          <Button component={NavLink} to='/adminhome/addTrain' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Add Train</Button>

          <Button component={NavLink} to='/adminhome/addStation' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Add Station</Button>
          
          <Button component={NavLink} to='/adminhome/addStoppage' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Add Stoppage</Button>

          <Button component={NavLink} to='/admin'onClick={handleClick} variant='contained' sx={{ color: 'white', textTransform: 'none' }}>Logout</Button>

        </Toolbar>
      </AppBar>
    </Box>
  </>;
};

export default Navbar;
