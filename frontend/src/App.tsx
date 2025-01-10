import { RouterProvider } from "react-router-dom"
import { routes } from "./routes/route"
import { Toaster } from "./components/ui/toaster"

function App() {

  return (
    <>
    <RouterProvider router={routes}/>
    <Toaster />
    </>
  )
}

export default App
