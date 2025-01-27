
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
import { SignupURL } from "@/constants"
import { toast } from "@/hooks/use-toast"
import { ErrorType } from "@/types/ErrorType"
import axios from "axios"
import { UserCircle } from "lucide-react"
import React, {useState } from "react"
import { useNavigate } from "react-router-dom"


export function SignupForm() {
  const navigate = useNavigate();
  const [error, setError] = useState<ErrorType | null>(null);

  
  const handleSignup = async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password')

    try {
      const res = await axios.post(SignupURL,{name, email, password})
      console.log(res.data);

      const {errors, message, success, status} = res.data;
      console.log({errors, message, success, status});
      
      
      console.log("validation error"+error);
      setError(errors)
      
      if(success)
      {
        navigate('/login')
        toast({title:'Success', description:message, variant:'default'})
      }
      else {if(status !== 422)
      {
        toast({title:'Failed', description:message, variant:'destructive'})
      }}
     
    } catch (error) {
      console.error(error);
      toast({title:'Failed', description:'Unable to create new account', variant:'destructive'}) 
    }
  }
  return (
    <Card className="border-none shadow-none w-[450px] space-y-3">
      <CardHeader className="flex flex-col gap-5 justify-center items-center ">
        <CardTitle>
          <UserCircle size={48} color="purple"/>
        </CardTitle>
        <CardDescription className="text-2xl font-bold text-black">Create a new Account</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSignup}>
          <div className="grid w-full items-center gap-7">
            <div className="flex flex-col space-y-3">
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name" 
                name="name"
                required 
                type="text" 
                placeholder="Eg. Pritam Nandy" 
                autoComplete='name'
                className="bg-white dark:bg-black"/>
              <span className="text-red-500 text-sm">{error?.name}</span>

            </div>
            <div className="flex flex-col space-y-3">
              <Label htmlFor="email">Email Id</Label>
              <Input 
                id="email" 
                name="email"
                required 
                autoComplete="email"
                type="email" 
                placeholder="Eg. nandypritam07@gmail.com" 
                className="bg-white dark:bg-black"/>
              <span className="text-red-500 text-sm">{error?.email}</span>

            </div>
            <div className="flex flex-col space-y-3">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                name="password"
                required 
                type="password" 
                placeholder="Enter a strong password" 
                className="bg-white dark:bg-black"/>
              <span className="text-red-500 text-sm">{error?.password}</span>

            </div>
            <Button 
              type="submit" 
              className="bg-purple-800">Signup</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
