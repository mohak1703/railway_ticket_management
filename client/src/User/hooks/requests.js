const API_URL = 'http://localhost:8000';

// // Load planets and return as JSON.
// async function httpGetPlanets() {
//   const response = await fetch(`${API_URL}/users`);
//   // return a javascript object parsed from JSON response
//   return await response.json();
// }

// Submit given user data to Account table
async function httpAddNewUser(user) {
  try{
    return await fetch(`${API_URL}/users/register`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  }
  catch(err) {
    return {
      ok: false,
    }
  }
}

// Get user data with given User_Email.
async function httpGetUserwithEmail(user) {
    try{
        return await fetch(`${API_URL}/users`, {
            method: "post",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
    }
    catch(err) {
        return {
            ok: false,
        }
    }
}

async function httpGetTrainWithTrainNumber(train_number) {
    const response = await fetch(`${API_URL}/trains/${train_number}`);
    // return a javascript object parsed from JSON response
    console.log(train_number);
    //console.log(response.json());
    return await response.json();
}

async function httpGetStationsWithTrainNumber(train_number) {
  const response = await fetch(`${API_URL}/stations/${train_number}`);
  // return a javascript object parsed from JSON response
  console.log(train_number);
  //console.log(response.json());
  return await response.json();
}


async function httpAddNewTicket(ticket) {
  try{
    return await fetch(`${API_URL}/tickets`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ticket),
    });
  }
  catch(err) {
    return {
      ok: false,
    }
  }
}

async function httpGetTicketsWithEmail(user_email) {
  const response = await fetch(`${API_URL}/tickets/${user_email}`);
  // return a javascript object parsed from JSON response
  console.log(user_email);
  //console.log(response.json());
  return await response.json();
}

async function httpDeleteTicketWithPNR(pnr) {
  try{
    return await fetch(`${API_URL}/tickets/${pnr}`, {
      method: "delete",
    });
  }
  catch(err){
    console.log(err);
    return {
      ok: false
    }
  }
}

async function httpGetTotalSeatsWithTrainNumber(train_number) {
  const response = await fetch(`${API_URL}/seats/${train_number}`);
  // return a javascript object parsed from JSON response
  console.log(train_number);  
  //console.log(response.json());
  let resp = await response.json();
  return resp;
}

async function httpGetTotalTicketsWithTrainNumber(train_number, date) {
  const response = await fetch(`${API_URL}/total_tickets/${train_number}&${date}`);
  // return a javascript object parsed from JSON response
  console.log(train_number);
  //console.log(response.json());
  let resp =  await response.json();
  return resp;
}

export {
  httpAddNewUser,
  httpGetUserwithEmail,
  httpGetTrainWithTrainNumber,
  httpGetStationsWithTrainNumber,
  httpAddNewTicket,
  httpGetTicketsWithEmail,
  httpDeleteTicketWithPNR,
  httpGetTotalSeatsWithTrainNumber,
  httpGetTotalTicketsWithTrainNumber
};