import { BrowserRouter } from "react-router-dom"
import Home from "./pages/home/Home"
import AppRoutes from "./routes/AppRoutes"


function App() {


  return (
    <div>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>

    </div>
  )
}

export default App
