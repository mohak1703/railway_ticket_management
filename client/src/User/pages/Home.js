import React, { useEffect } from 'react';
import Pic from '../images/download.jpg'
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const isAuth = useSelector(state => state.isAuth);
    const userEmail = useSelector(state => state.userEmail);
    const navigate = useNavigate();
    useEffect(() => {
        console.log(isAuth);
        if(!isAuth){
            navigate('/');
        }
    })    
  return (<div>
    <h1 style={{paddingLeft: '2vw'}}>
        Welcome to Indian Railways {userEmail}
    </h1>
    <Grid container spacing={2}>
        <Grid item xs={4}>
            <img src='https://wallpaperaccess.com/full/6069362.jpg' alt='Welcome' style={{paddingLeft: '2vw', height: '60vh', width:'30vw'}}/>
        </Grid>
        <Grid item xs={8}>
            <h2>Did you Know?</h2>
            <div style={{fontSize: '20px', fontWeight:'bold'}}>The first railway proposals for India were made in Madras in 1832. The country's first transport train, Red Hill Railway (built by Arthur Cotton to transport granite for road-building), ran from Red Hills to the Chintadripet bridge in Madras in 1836-1837. In 1845, the Godavari Dam Construction Railway was built by Cotton at Dowleswaram in Rajahmundry, to supply stone for the construction of a dam over the Godavari River. In 1851, the Solani Aqueduct Railway was built by Proby Cautley in Roorkee to transport construction materials for an aqueduct over the Solani River. These railway tracks were dismantled after these projects were completed and no longer exist.</div>
            <div style={{fontSize: '20px', fontWeight:'bold'}}>As of March 2020, Indian Railways' rolling stock consisted of 2,93,077 freight wagons, 76,608 passenger coaches and 12,729 locomotives. IR owns locomotive and coach-production facilities at several locations in India. It had 1.254 million employees as of March 2020, making it the world's eighth-largest employer. The government has committed to electrifying India's entire rail network by 2023–24, and become a "net zero (carbon emissions) railway" by 2030.</div>
            {/* <div style={{display:'flex', justifyContent:'center', alignItems:'center', paddingTop: '10px'}}>
                <img src='https://wallpaperaccess.com/full/6069362.jpg' alt='Welcome' style={{display:'flex', justifyContent:'center', alignItems:'center', height: '50vh', width:'25vw'}}/>
            </div> */}
        </Grid>
        {/* <Grid item xs={6}>
            <div>xs=6 md=4</div>
        </Grid>
        <Grid item xs={6}>
            <div>xs=6 md=8</div>
        </Grid> */}
    </Grid>
  </div>
  )
}

export default Home