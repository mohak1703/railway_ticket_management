import { useCallback, useEffect, useState } from "react";

import {
  httpGetTrainWithTrainNumber  
} from './requests';

function useTrains(TrainNumber) {
  const [trains, saveTrains] = useState([]);
  
  const getTrains = useCallback(async () => {
    const fetchedTrains = await httpGetTrainWithTrainNumber(TrainNumber);
    saveTrains(fetchedTrains);
    console.log(trains);
  }, []);

  useEffect(() => {
    getTrains();
  }, [getTrains]);

  return {
    trains    
  };
}

export default useTrains;