import { LoginForm } from "@/demo/login-demo/LoginForm"
import { Link } from "react-router-dom"

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-48 gap-2">
    <LoginForm />
    <div className="flex items-center gap-2 font-semibold">
            <p>Not a registered user?</p>
            <Link to='/signup' className="text-amber-600">Register</Link>
        </div>
    </div>
  )
}

export default LoginPage
