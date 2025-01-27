
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UserCircle } from "lucide-react"


export function SignupForm() {
  return (
    <Card className="border-none shadow-none w-[450px] space-y-3">
      <CardHeader className="flex flex-col gap-5 justify-center items-center ">
        <CardTitle>
          <UserCircle size={48} color="purple"/>
        </CardTitle>
        <CardDescription className="text-2xl font-bold text-black">Create a new Account</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-7">
            <div className="flex flex-col space-y-3">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" type="text" placeholder="Eg. Pritam Nandy" required className="bg-white dark:bg-black"/>
            </div>
            <div className="flex flex-col space-y-3">
              <Label htmlFor="name">Email Id</Label>
              <Input id="name" type="email" placeholder="Eg. nandypritam07@gmail.com" required className="bg-white dark:bg-black"/>
            </div>
            <div className="flex flex-col space-y-3">
              <Label htmlFor="name">Password</Label>
              <Input id="name" type="password" placeholder="Enter a strong password" required className="bg-white dark:bg-black"/>
            </div>
            <Button type="submit" className="bg-purple-800">Signup</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
