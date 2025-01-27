import { SignupForm } from "@/demo/signup-demo/SignupForm"
import { Link } from "react-router-dom"

const SignupPage = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-48 gap-2">
    <SignupForm />
    <div className="flex items-center gap-2 font-semibold">
            <p>Already logged in?</p>
            <Link to='/login' className="text-amber-600">Log In</Link>
        </div>
    </div>
  )
}

export default SignupPage
