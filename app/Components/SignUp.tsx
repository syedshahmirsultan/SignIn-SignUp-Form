import Link from 'next/link';
import React from 'react';

const SignUp = () => {
    return (
        <section className="mt-10 mb-20 bg-white shadow-md border h-[600px] mx-auto w-full  md:w-4/12 border-gray-100">
         <h1 className='text-gray-950 font-bold text-2xl text-center mt-8'>SignUp Form</h1>
         <form className='mt-12 flex flex-col gap-y-8'>
<div className="space-y-2 ml-8">
<label className='text-gray-950 font-medium text-lg'>
    Full Name
</label>
<input required type="text" placeholder='   Enter your Full Name ...' 
className=" text-center h-12 w-80 md:w-96 outline-2 outline-blue-700 border border-gray-200 text-gray-900 text-lg rounded-md"/>
</div>
<div className="space-y-2 ml-8">
<label className='text-gray-950 font-medium text-lg'>
    Email
</label>
<input type="email" required placeholder='   Enter your Email ...' 
className="text-center h-12 w-80 md:w-96 outline-2 outline-blue-700 border border-gray-200 text-gray-900 text-lg rounded-md"/>
</div>
<div className="space-y-2 ml-8">
<label className='text-gray-950 font-medium text-lg'>
    Password
</label>
<input type='password'required placeholder='   Enter your Password ...' 
className="text-center h-12 w-80 md:w-96 outline-2 outline-blue-700 border border-gray-200 text-gray-900 text-lg rounded-md"/>
</div>

<div className='flex justify-center'>
    <button type="submit" className=" h-12 w-72 md:w-80 text-center font-white font-semibold text-white text-lg bg-blue-700 hover:bg-blue-600 rounded-lg">Continue</button>
    </div>
    <p className='text-gray-900 flex justify-center gap-x-2'> Already have an account?<Link href="/SignIn" className="text-blue-700 font-medium"> SignIn </Link></p>
         </form>
        </section>
    );
}

export default SignUp;
