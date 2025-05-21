import React from 'react';

const LogIn = () => {
    return (
        <div>
            <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleLogIn} className="card-body">
                    <h1 className="text-3xl text-center text-accent font-bold">Login now!</h1>
                    <fieldset className="fieldset">

                        <label className="label">Email</label>
                        <input type="email" name='email' ref={emailRef} className="input" placeholder="Email" required />

                        <ShowHidePassword></ShowHidePassword>

                        <div><a onClick={handleForgetPassword} className="link link-hover">Forgot password?</a></div>

                        {error && <p className='text-red-600'>{error}</p>}

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