import { BrowserRouter, HashRouter } from "react-router-dom"
import Home from "./pages/home/Home"
import AppRoutes from "./routes/AppRoutes"


function App() {


  return (
    <div>
      <HashRouter>
        <AppRoutes />
      </HashRouter>

    </div>
  )
}

export default App
