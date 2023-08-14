const API_URL = 'http://localhost:8000';

async function httpGetAdminwithName(admin) {
    try{
        return await fetch(`${API_URL}/admin`, {
            method: "post",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(admin),
        });
    }
    catch(err) {
        return {
            ok: false,
        }
    }
}

async function httpAddNewTrain(train) {
    try{
      return await fetch(`${API_URL}/trains`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(train),
      });
    }
    catch(err) {
      return {
        ok: false,
      }
    }
  }


  async function httpAddNewStation(station) {
    try{
      return await fetch(`${API_URL}/trains`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(station),
      });
    }
    catch(err) {
      return {
        ok: false,
      }
    }
  }

  async function httpAddNewStoppage(stoppage) {
    try{
      return await fetch(`${API_URL}/stoppage`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(stoppage),
      });
    }
    catch(err) {
      return {
        ok: false,
      }
    }
  }



export {   
    httpGetAdminwithName, 
    httpAddNewTrain,   
    httpAddNewStation,
    httpAddNewStoppage
};