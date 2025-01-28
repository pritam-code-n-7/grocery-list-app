export const formatZodError = (error)=>{
    let errors={}
    error.errors?.map((issue)=>{
        errors[issue.path?.[0]] = issue.message
    })

    return errors;
}