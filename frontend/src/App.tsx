import { RouterProvider } from "react-router-dom"
import { routes } from "./routes/route"
import { Toaster } from "./components/ui/toaster"
import { ThemeProvider } from "./theme/ThemeProvider"

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterProvider router={routes}/>
    <Toaster />
    </ThemeProvider>
  )
}

export default App
