
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
import { LoginURL } from "@/constants"
import { toast } from "@/hooks/use-toast"
import { ErrorType } from "@/types/ErrorType"
import axios from "axios"
import { UserCircle } from "lucide-react"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"


export function LoginForm() {
  const navigate = useNavigate();
  const [error, setError] = useState<ErrorType | null>(null)  

  const handleSignin = async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement)
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      const res  = await axios.post(LoginURL,{email, password})
      const {errors, status, message, success, jwtToken, _id, name} = res.data;
      console.log({errors, status, message, success, jwtToken, _id, name});
      setError(errors)
      if(success)
        {
        localStorage.setItem("token",jwtToken)
        localStorage.setItem("_id",_id)
        localStorage.setItem("name",name)
       // localStorage.setItem("email",email)
        navigate('/')
        toast({title:'Success', description:message, variant:"default"})
      }
      else {
        if(status !== 422)
        {
          console.log(message); 
          toast({title:'Failed', description:message, variant:"destructive"})
        }
    }
      
    } catch (error) {
      console.error(error);
      toast({title:'Failed', description: 'Unable to login', variant:"destructive"})
    }
  }
  return (
    <Card className="border-none shadow-none w-[450px] space-y-3">
      <CardHeader className="flex flex-col gap-5 justify-center items-center ">
        <CardTitle>
          <UserCircle size={48} color="purple"/>
        </CardTitle>
        <CardDescription className="text-2xl font-bold text-black">Login in to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSignin}>
          <div className="grid w-full items-center gap-7">
            <div className="flex flex-col space-y-3">
              <Label htmlFor="email">Email Id</Label>
              <Input 
              id="email" 
              type="email" 
              name="email"
              required 
              autoComplete="email"
              placeholder="Eg. nandypritam07@gmail.com" 
              className="bg-white dark:bg-black"
              />
            <span className="text-red-500 text-sm">{error?.email}</span>
            </div>
            <div className="flex flex-col space-y-3">
              <Label htmlFor="name">Password</Label>
              <Input 
                id="name" 
                type="password" 
                name="password"
                required 
                autoComplete="password"
                placeholder="Enter a strong password" 
                className="bg-white dark:bg-black"
                />
             <span className="text-red-500 text-sm">{error?.password}</span>
            </div>
            <Button 
              type="submit" 
              className="bg-purple-800">
                Login
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
