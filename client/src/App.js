import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginReg from "./User/pages/auth/LoginReg";
import Home from "./User/pages/Home";
import Book from "./User/pages/Book";
import Info from "./User/pages/Info";
import Tickets from "./User/pages/Tickets";
import Cancel from "./User/pages/Cancel";
import Layout from "./User/components/Layout";
import AdLoginReg from "./Admin/pages/auth/AdLoginReg";
import AdHome from "./Admin/pages/AdHome";
import AdTrain from "./Admin/pages/AdTrain";
import AdStation from "./Admin/pages/AdStation";
import AdStoppage from "./Admin/pages/AdStoppage";
import LayoutAdmin from "./Admin/components/LayoutAdmin";

function App() {  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<LoginReg />} />          
          </Route>
          <Route path="/home" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="book" element={<Book />} />            
            <Route path="info" element={<Info />} />            
            <Route path="tickets" element={<Tickets />} />            
            <Route path="cancel" element={<Cancel />} />           
          </Route>
          <Route path="/admin">
            <Route index element={<AdLoginReg />} />            
          </Route>
          <Route path="/adminhome" element={<LayoutAdmin />}>
            <Route index element={<AdHome />} />
            <Route path="addTrain" element={<AdTrain />} />            
            <Route path="addStation" element={<AdStation />} />            
            <Route path="addStoppage" element={<AdStoppage />} />                  
          </Route>
          <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
