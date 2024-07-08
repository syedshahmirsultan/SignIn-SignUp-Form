"use client"
import { useToast } from '@/components/ui/use-toast';
import Link from 'next/link';
import React, { useState } from 'react';
import SignInComp from '../Components/apiCalling';


//SignUp Component Function
const SignIn = () => {

    const [fullName, setFullName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const { toast } = useToast();

    async function handleSubmit(event: React.FormEvent){
        event.preventDefault();
        try {
            await SignInComp(fullName,email,password);
            toast({
                title: "Successfully",
                description: "Signed In Successfully"
            });
        
        
        } catch (error) {
            toast({
                title: "Unsuccessfully",
                description: "Signed In Unsuccessfuly",
                variant: "destructive"
            });
        }
        }

    return (
        <section className="mt-4 mb-20 bg-white shadow-md border h-[600px] mx-auto w-full  md:w-4/12 border-gray-100">
        {/* SignIn Form Heading*/}
         <h1 className='text-gray-950 font-bold text-2xl text-center mt-8'>SignIn Form</h1>
         <form onSubmit={handleSubmit} className='mt-12 flex flex-col gap-y-8'>

 {/* Full Name*/}
 <div className="space-y-2 ml-8">
<label className='text-gray-950 font-medium text-lg'>
    Full Name
</label>
<input required type="text" placeholder='   Enter your Full Name ...' 
value={fullName}
onChange={(e)=> setFullName(e.target.value)}
className=" text-center h-12 w-80 md:w-96 outline-2 outline-blue-700 border border-gray-200 text-gray-900 text-lg rounded-md"/>
</div>

{/* Email */}
<div className="space-y-2 ml-8">
<label className='text-gray-950 font-medium text-lg'>
    Email
</label>
<input type="email" required placeholder='   Enter your Email ...' 
value={email}
onChange={(e)=> setEmail(e.target.value)}
className="text-center h-12 w-80 md:w-96 outline-2 outline-blue-700 border border-gray-200 text-gray-900 text-lg rounded-md"/>
</div>

{/* Password */}
<div className="space-y-2 ml-8">
<label className='text-gray-950 font-medium text-lg'>
    Password
</label>
<input type='password'required placeholder='   Enter your Password ...' 
value={password}
onChange={(e)=> setPassword(e.target.value)}
className="text-center h-12 w-80 md:w-96 outline-2 outline-blue-700 border border-gray-200 text-gray-900 text-lg rounded-md"/>
</div>
{/* Button*/}
<div className='flex justify-center'>
    <button type="submit"
   onSubmit={handleSubmit} className=" h-12 w-72 md:w-80 text-center font-white font-semibold text-white text-lg bg-blue-700 hover:bg-blue-600 rounded-lg">Continue</button>
    </div>
    {/* Text  */}
    <p className='text-gray-900 flex justify-center gap-x-2'> No account?<Link href="/" className="text-blue-700 font-medium"> Create One </Link></p>
         </form>
        </section>
    );
}

export default SignIn;
