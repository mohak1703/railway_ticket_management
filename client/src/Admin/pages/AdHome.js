import React, { useEffect } from 'react';
import Pic from '../images/download.jpg'
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AdHome = () => {
    const isAdAuth = useSelector(state => state.isAdAuth);
    const adminName = useSelector(state => state.adminName);
    const navigate = useNavigate();
    useEffect(() => {
        console.log(isAdAuth);
        if(!isAdAuth){
            navigate('/admin');
        }
    })    
  return (<div>
    <h1 style={{paddingLeft: '2vw'}}>
        Welcome to Indian Railways {adminName}
    </h1>
    <Grid container spacing={2}>
        <Grid item xs={4}>
            <img src={Pic} alt='Welcome' style={{paddingLeft: '2vw', height: '60vh', width:'30vw'}}/>
        </Grid>
        <Grid item xs={8}>
            <h2>Did you Know?</h2>
            <div style={{fontSize: '20px', fontWeight:'bold'}}>The first railway proposals for India were made in Madras in 1832. The country's first transport train, Red Hill Railway (built by Arthur Cotton to transport granite for road-building), ran from Red Hills to the Chintadripet bridge in Madras in 1836-1837. In 1845, the Godavari Dam Construction Railway was built by Cotton at Dowleswaram in Rajahmundry, to supply stone for the construction of a dam over the Godavari River. In 1851, the Solani Aqueduct Railway was built by Proby Cautley in Roorkee to transport construction materials for an aqueduct over the Solani River. These railway tracks were dismantled after these projects were completed and no longer exist.</div>
            <div style={{fontSize: '20px', fontWeight:'bold'}}>As of March 2020, Indian Railways' rolling stock consisted of 2,93,077 freight wagons, 76,608 passenger coaches and 12,729 locomotives. IR owns locomotive and coach-production facilities at several locations in India. It had 1.254 million employees as of March 2020, making it the world's eighth-largest employer. The government has committed to electrifying India's entire rail network by 2023–24, and become a "net zero (carbon emissions) railway" by 2030.</div>
        </Grid>        
    </Grid>
  </div>
  )
}

export default AdHome;