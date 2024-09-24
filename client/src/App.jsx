import { BrowserRouter, Routes,Route } from "react-router-dom"
import ServicesPage from "./components/services"
import CreateServicesPage from "./components/createServices"
import UpdateServicesPage from "./components/updateServices"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ServicesPage/>}></Route>
        <Route path="/create" element={<CreateServicesPage/>}></Route>
        <Route path="/update/:id" element={<UpdateServicesPage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
