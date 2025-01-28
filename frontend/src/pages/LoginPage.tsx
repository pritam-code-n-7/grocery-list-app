import { LoginForm } from "@/demo/login-demo/LoginForm"
import { Link } from "react-router-dom"

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:pt-48 pt-20 gap-2">
    <LoginForm />
    <div className="flex items-center text-sm gap-1">
            <p className="text-gray-500">Dont have an Account? </p>
            <Link to='/signup' className="text-purple-800 font-semibold">Signup</Link>
        </div>
    </div>
  )
}

export default LoginPage
