import z from "zod";

export const signupValidation = z.object({
    name:z.string({message:"Name is required"}).min(3,{message:"Name must be 3 characters long"}),
    email:z.string({message:"Email is required"}).email({message:"Please eneter a valid email"}),
    password:z.string({message:"Password is required"}).min(6,{message:"Password must be 6 characters long"})
})

export const loginValidation = z.object({
    email:z.string({message:"Email is required"}).email({message:"Please eneter a valid email"}),
    password:z.string({message:"Password is required"}).min(6,{message:"Password must be 6 characters long"})
})