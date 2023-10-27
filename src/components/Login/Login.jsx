import { useState } from "react";
import "../../App.css"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


function Login({ setIsOtp }) {

    const [phoneNumber, setPhoneNumber] = useState('');
    const [valid, setValid] = useState(true);


    const handleChange = (value) => {
        setPhoneNumber(value)
        setValid(validatePhoneNumber(value));
    }

    const validatePhoneNumber = (phoneNumber) => {
        const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;
        return phoneNumberPattern.test(phoneNumber);
    };

    return (
        <div className="loginPageContainer">


            <div className="login">
                <h3>Sign In</h3>
                <div>
                    <p>Please enter your mobile number to login. We will send an OTP to verify your number.</p>

                    <PhoneInput
                        country={'in'}
                        value={phoneNumber}
                        onChange={handleChange}
                        inputProps={{
                            required: true,
                            style: {
                                width: '100%',
                                height: '59px',
                                borderRadius: '2px',
                                border: '1px solid #E4E8F0',
                                color: ' #101920',
                                fontSize: '1.125rem',
                                fontWeight: '400',
                            },
                        }}
                        containerClass={'phoneInput'}
                    />

                </div>

                <button onClick={() => setIsOtp(prev => !prev)}>Sign In</button>
            </div>
        </div>
    )
}

export default Login;