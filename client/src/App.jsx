import { BrowserRouter, Routes,Route } from "react-router-dom"
import ServicesPage from "./components/services"
import CreateServicesPage from "./components/createServices"
import UpdateServicesPage from "./components/updateServices"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ServicesPage/>}></Route>
        <Route path="/create" element={<CreateServicesPage/>}></Route>
        <Route path="/update/:id" element={<UpdateServicesPage/>}></Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
