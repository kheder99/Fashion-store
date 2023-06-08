import React from 'react';
import {FcGoogle} from 'react-icons/fc';
import {FaFacebookF,FaTwitter} from 'react-icons/fa';
import {MdOutlineMail} from 'react-icons/md';
import {RiLockPasswordLine} from 'react-icons/ri'
import { NavLink } from 'react-router-dom';
import GoToTop from '../components/GoToTop';

export default function Login() {
    return (
        <div className="login">
            <form className='login-form'>
                <div className="login-header">
                <h1 className='title'>Welcome Back</h1>
                <p>Sign in with your email and password or continue with social media</p>
                </div>
                <div className="input">
                    <span className='title-field'>Email</span>
                    <input type='text' placeholder='Enter your email'/>
                    <span className="icon">
                        <MdOutlineMail />
                    </span>
                </div>
                <div className="input">
                    <span className='title-field'>Password</span>
                    <input type='password' placeholder='Enter your password'/>
                    <span className="icon">
                        <RiLockPasswordLine />
                    </span>
                </div>
                <div className="others">
                    <div className="checkbox">
                        <input type="checkbox" name="remember_me" id="remember_me"  />
                        <label htmlFor='remember_me'> Remember me</label>
                    </div>
                    <a href='/'>Forgot Password</a>
                </div>
                <button type='submit'>Continue</button>
                <div className="social-media">
                    <a href="/"><FcGoogle /></a>
                    <a href="/" id='facebook'><FaFacebookF /></a>
                    <a href="/" id='twitter'><FaTwitter /></a>
                </div>
                <div className="go-to-sign-up">
                    <p>Don't have an account?</p>
                    <NavLink to="/signUp">Sign Up</NavLink>
                </div>
            </form>
            <GoToTop />
        </div>
    )
}
