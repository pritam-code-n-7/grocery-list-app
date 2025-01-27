import { SignupForm } from "@/demo/signup-demo/SignupForm"
import { Link } from "react-router-dom"

const SignupPage = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-48 gap-2">
    <SignupForm />
    <div className="flex items-center gap-1 text-sm">
            <p className="text-gray-500">Already have an Account?</p>
            <Link to='/login' className="text-purple-800 font-semibold">Login</Link>
        </div>
    </div>
  )
}

export default SignupPage
