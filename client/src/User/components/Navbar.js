import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import DirectionsRailwayIcon from '@mui/icons-material/DirectionsRailway';
import { useDispatch } from 'react-redux';


const Navbar = ({ isAuth, setAuth }) => {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch({
      type: 'LOG_OUT',
      payload: {}
    });  
  }
  
  return <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <DirectionsRailwayIcon />
          <Typography variant='h5' component="div" sx={{ flexGrow: 1 }}>Indian Railways</Typography>

          <Button component={NavLink} to='/home'  sx={{ color: 'white', textTransform: 'none' }}>Home</Button>

          <Button component={NavLink} to='/home/info' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Get Info</Button>

          <Button component={NavLink} to='/home/book' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Book</Button>
          
          <Button component={NavLink} to='/home/tickets' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Your Tickets</Button>

          <Button component={NavLink} to='/home/cancel' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Cancel</Button>

          <Button component={NavLink} to='/'onClick={handleClick} variant='contained' sx={{ color: 'white', textTransform: 'none' }}>Logout</Button>

        </Toolbar>
      </AppBar>
    </Box>
  </>;
};

export default Navbar;
