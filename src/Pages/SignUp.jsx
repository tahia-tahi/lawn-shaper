import React, { use, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import GoogleSignIn from '../Provider/GoogleSignIn';
import ShowHidePassword from '../Components/ShowHidePassword';

const SignUp = () => {


    const {createUser,setUser} = use(AuthContext)

    const [passwordError, setPasswordError] = useState('')

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;



    const handleSignUp = (e) => {
        e.preventDefault();


        const form = e.target;
        // const name = form.name.value
        const email = form.email.value
        // const photo = form.photo.value
        const password = form.password.value
        createUser(email, password)
        .then(( result)=>{
            const user = result.user
             console.log(user);
             setUser(user)
        })
        .catch((error)=> {
            console.log(error);
        })



        if (passwordRegex.test(password) === false) {
            setPasswordError('The password should be at least 8 characters and include 1 uppercase, 1 lowercase, and a special character.')
            return;
        }
    }


    return (
        <div>
            <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleSignUp} className="card-body">
                    <h1 className="text-3xl text-center text-accent font-bold">Register now!</h1>
                    <fieldset className="fieldset">

                        <label className="label">Name</label>
                        <input type="text" name='name' className="input" placeholder="Name" required />



                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" required />

                        <label className="label">Photo</label>
                        <input type="text" name='photo' className="input" placeholder="Photo URL" required />

                        <ShowHidePassword></ShowHidePassword>


                        <button type='submit' className="btn btn-primary hover:btn-secondary mt-4">Register</button>
                        <p className='text-center font-bold my-2 text-primary'>OR</p>

                        <GoogleSignIn></GoogleSignIn>

                        <p className='mt-3'>Already have an account? <Link className='text-primary font-semibold hover:text-secondary' to={'/auth/login'}>Log In</Link></p>
                    </fieldset>

                    {passwordError && <p className='text-xs text-error'>{passwordError}</p>}
                </form>
            </div>
        </div>
    );
};

export default SignUp;