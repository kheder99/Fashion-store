import {FcGoogle} from 'react-icons/fc';
import {FaFacebookF,FaTwitter} from 'react-icons/fa';
import {MdOutlineMail} from 'react-icons/md';
import {RiLockPasswordLine} from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import GoToTop from '../components/GoToTop';


export default function SignUp() {

    return (
        <div className="sign-up">
            <form className='sign-up-form'>
                <div className="sign-up-header">
                <h1 className='title'>Register Account</h1>
                <p>Complete your details or continue with social media</p>
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
                <div className="input">
                    <span className='title-field'>Confirm Password</span>
                    <input type='password' placeholder='Re-enter your password'/>
                    <span className="icon">
                        <RiLockPasswordLine />
                    </span>
                </div>
                <NavLink to="/Verification"><button type='submit'>Continue</button></NavLink>
                <div className="social-media">
                    <a href="/"><FcGoogle /></a>
                    <a href="/" id='facebook'><FaFacebookF /></a>
                    <a href="/" id='twitter'><FaTwitter /></a>
                </div>
                <div className="sign-up-footer">
                    <p>By continuing your confirm that you agree with our Term and Condition</p>
                </div>
            </form>
            <GoToTop />
        </div>
    )
}
