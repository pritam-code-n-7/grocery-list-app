
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export function LoginForm() {
  return (
    <Card className="w-[400px] bg-gray-50 dark:bg-gray-500">
      <CardHeader>
        <CardTitle className="font-bold text-violet-800 text-2xl font-serif">Login</CardTitle>
        <CardDescription>You can login here</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Email Id</Label>
              <Input id="name" type="email" placeholder="e.g. - nandypritam07@gmail.com" required className="bg-white dark:bg-black"/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Password</Label>
              <Input id="name" type="password" placeholder="Enter a strong password" required className="bg-white dark:bg-black"/>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button type="submit">Login</Button>
      </CardFooter>
    </Card>
  )
}
