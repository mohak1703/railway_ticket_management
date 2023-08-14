import { useCallback, useEffect, useState } from "react";

import {
  httpGetTotalSeatsWithTrainNumber  
} from './requests';

function useSeats(TrainNumber) {
  const [seats, saveSeats] = useState([]);
  
  const getSeats = useCallback(async () => {
    const fetchedSeats = await httpGetTotalSeatsWithTrainNumber(TrainNumber);
    saveSeats(fetchedSeats);
    console.log(seats);
  }, []);

  useEffect(() => {
    getSeats();
  }, [getSeats]);

  return {
    seats   
  };
}

export default useSeats;