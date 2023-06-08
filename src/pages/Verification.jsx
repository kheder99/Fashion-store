import React from 'react'
import GoToTop from '../components/GoToTop'

export default function Verification() {
    return (
        <div className="verification">
            <form className='verification-form'>
                <div className="verification-header">
                <h1 className='title'>OTP Verification</h1>
                <p>We sent your code to +1 898 860 *** This code will expired in <span>00:23:349764</span></p>
                </div>
                <div className="verification-fields">
                    <div className="input">
                        <input type='text' maxLength= '1'/>
                    </div>
                    <div className="input">
                        <input type='text' maxLength= '1'/>
                    </div>
                    <div className="input"> 
                        <input type='text' maxLength= '1'/>
                    </div>
                    <div className="input">
                        <input type='text' maxLength= '1'/>
                    </div>
                </div>
                <button type='submit'>Continue</button>
            </form>
            <GoToTop />
        </div>
    )
}
