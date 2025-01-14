import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <h1 className="lg:text-4xl  font-bold mb-4">404 - Page Not Found</h1>
      <p className="lg:text-xl mb-8 text-muted-foreground">Oops! The page you're looking for doesn't exist.</p>
      <Button asChild>
        <Link to="/">
          Go back home
        </Link>
      </Button>
    </div>
  )
}

