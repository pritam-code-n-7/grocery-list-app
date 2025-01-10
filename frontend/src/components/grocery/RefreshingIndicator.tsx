import { Loader2 } from 'lucide-react'

interface RefreshingIndicatorProps {
  message?: string
}

export default function RefreshingIndicator({ message = "Refreshing data..." }: RefreshingIndicatorProps) {
  return (
    <div className="flex items-center justify-center p-4 bg-muted text-muted-foreground rounded-md h-[300px]">
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      <span>{message}</span>
    </div>
  )
}

