




export default async function SignInComp(username:string,useremail:string,password:string){

const data = {
    username: username,
    useremail: useremail,
    password: password
}
    const res = await fetch('http://localhost:3000/api/authentication',{
    method:"GET",
    headers:{
        "Content-Type":"application/json"
    },
    body: JSON.stringify(data)
}
)


if (!res.ok){
    return "Error in SignIn Component"
}

return "Okay";
}



export async function SignUpComp(username:string,useremail:string,password:string){
   
    const data = {
        username: username,
        useremail: useremail,
        password: password
    }

    const res = await fetch('http://localhost:3000/api/authentication',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
})

}