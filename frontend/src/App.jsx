import react from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import ProtectedRoute from "./components/ProtectedRoute"
import OwnerLanding from "./pages/OwnerLanding"
import TrusteeLanding from "./pages/TrusteeLanding"
import ContractorLanding from "./pages/ContractorLanding"

function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <ProtectedRoute>
              <Home />             
            </ProtectedRoute>
          }
        />
        <Route path="/ownerLanding" element={<OwnerLanding />} />
        <Route path="/trusteeLanding" element={<TrusteeLanding />} />
        <Route path="/contractorLanding" element={<ContractorLanding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="/notfound" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
