import { useCallback, useEffect, useState } from "react";

import {
  httpGetTicketsWithEmail,
  httpDeleteTicketWithPNR  
} from './requests';


function useTickets(userEmail) {          
  const [tickets, saveTickets] = useState([]);  
  const getTickets = useCallback(async () => {
    const fetchedTickets = await httpGetTicketsWithEmail(userEmail);
    saveTickets(fetchedTickets);
    console.log(userEmail);
    console.log(tickets);
  }, []);

  useEffect(() => {
    getTickets(userEmail);
  }, [getTickets, userEmail]);

  const cancelTicket = useCallback(async (pnr) => {
    const response = await httpDeleteTicketWithPNR(pnr);
    const success = response.ok;
    if (success) {
      getTickets();      
    } 
    else {
      console.log('Error Occured');
    }
  }, [getTickets]);

  

  return {
    tickets,
    cancelTicket    
  };
}

export default useTickets;