import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info } from "lucide-react"

interface CalloutProps {
  children: React.ReactNode;
}

export function Callout({ children }: CalloutProps) {
  return (
    <Alert className="my-6 bg-primary/5 border-primary/20">
      <Info className="h-4 w-4 text-primary" />
      <div className="prose-p:m-0 [&>p]:!m-0">
         <AlertDescription>{children}</AlertDescription>
      </div>
    </Alert>
  )
}
