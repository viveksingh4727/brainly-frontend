import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { SharedBrain } from "./pages/SharedBrain";
import { ContentProvider } from "./hooks/Context";


function App() {

  return (
    
    <BrowserRouter>
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
      <Routes>
        <Route path="/" element={<Signup />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/dashboard" element={<ContentProvider>
            <Dashboard />
          </ContentProvider>}/>
        <Route path="/brainly/:shareLink" element={<SharedBrain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



