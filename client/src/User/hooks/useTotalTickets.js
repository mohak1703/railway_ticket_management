import { useCallback, useEffect, useState } from "react";

import {
  httpGetTotalTicketsWithTrainNumber  
} from './requests';

function useTotalTickets(TrainNumber) {
  const [tickets, saveTickets] = useState([]);
  
  const getTotalTickets = useCallback(async () => {
    const fetchedTickets = await httpGetTotalTicketsWithTrainNumber(TrainNumber);
    saveTickets(fetchedTickets);
    console.log(tickets);
  }, []);

  useEffect(() => {
    getTotalTickets();
  }, [getTotalTickets]);

  return {
    tickets   
  };
}

export default useTotalTickets;