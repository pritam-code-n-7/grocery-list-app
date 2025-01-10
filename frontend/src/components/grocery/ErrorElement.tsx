
import { Button } from "@/components/ui/button"
import { AlertCircle } from 'lucide-react'

interface ErrorType{
    error:string
    onClick?: ()=>void
}

export default function ErrorElement({onClick , error}:ErrorType) {


  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] p-4 bg-destructive/10 text-destructive rounded-md">
      <AlertCircle className="h-10 w-10 mb-4" />
      <h2 className="text-xl font-semibold mb-2">{error || 'Oops! Something went wrong'}</h2>
      <p className="text-center mb-4">{'An unexpected error occurred.'}</p>
      <Button variant="outline" onClick={onClick}>
        Try again
      </Button>
    </div>
  )
}

