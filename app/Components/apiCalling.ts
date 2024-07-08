



//SignInComp Function
export default async function SignInComp(username:string,useremail:string,password:string){

const data = {
    username: username,
    useremail: useremail,
    password: password
}
    const res = await fetch('http://localhost:3000/api/authentication',{
    method:"PUT",
    headers:{
        "Content-Type":"application/json"
    },
    body: JSON.stringify(data)
}
)
if (!res.ok) {
    throw new Error("Error in SignIn Component");
}

const response = await res.json();
return response.message;
}


//SignUpComp Function
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

return res.json();
}