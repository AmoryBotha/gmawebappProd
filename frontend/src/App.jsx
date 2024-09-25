import react from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import ProtectedRoute from "./components/ProtectedRoute"
import ownerLanding from "./pages/OwnerLanding"
import trusteeLanding from "./pages/TrusteeLanding"
import contractorLanding from "./pages/ContractorLanding"

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
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/ownerLanding" element={<ownerLanding />} />
        <Route path="/trusteeLanding" element={<trusteeLanding />} />
        <Route path="/contractorLanding" element={<contractorLanding />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App