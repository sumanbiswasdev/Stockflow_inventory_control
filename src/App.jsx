import { Route, Routes } from "react-router-dom"
import Loging from '../src/pages/Loging'
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./component/Protectedroute/ProtectedRoute";

function App(){

    return(

        <Routes>

            <Route path="/" element={<Loging />} />
            
            <Route path="/dashboard" 
            element={<ProtectedRoute>
                <Dashboard />
            </ProtectedRoute>} />

        </Routes>
    )
}

export default App