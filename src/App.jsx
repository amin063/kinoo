import { RouterProvider } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes"


function App() {


  return (
    <div>
      <RouterProvider router={AppRoutes} />
    </div>
  )
}

export default App
