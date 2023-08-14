import { useCallback, useEffect, useState } from "react";

import {
  httpGetStationsWithTrainNumber  
} from './requests';

function useStations(TrainNumber) {
  const [stations, saveStations] = useState([]);
  
  const getStations = useCallback(async () => {
    const fetchedStations = await httpGetStationsWithTrainNumber(TrainNumber);
    saveStations(fetchedStations);
    console.log(stations);
  }, []);

  useEffect(() => {
    getStations();
  }, [getStations]);

  return {
    stations    
  };
}

export default useStations;