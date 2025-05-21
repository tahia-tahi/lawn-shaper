import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import GoogleSignIn from '../Provider/GoogleSignIn';

const LogIn = () => {

    const {signIn} = use(AuthContext)

    const handleLogIn = (e) => {
          e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value

    signIn(email, password)
    .then( (result) =>{
        const user = result.user
        console.log(user);
    } )
    .catvh((error)=>{
        console.log(error);
    })
    }


    return (
        <div>
            <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleLogIn} className="card-body">
                    <h1 className="text-3xl text-center text-accent font-bold">Login now!</h1>
                    <fieldset className="fieldset">

                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" required />

                        <ShowHidePassword></ShowHidePassword>



                        <button type='submit' className="btn btn-primary hover:btn-secondary mt-4">Login</button>

                        <p className='text-center font-bold my-2 text-primary'>OR</p>

                        <GoogleSignIn></GoogleSignIn>
                        <p className='mt-3'>Don't have an account? <Link className='text-primary font-semibold hover:text-secondary' to={'/auth/signup'}>Register</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default LogIn;