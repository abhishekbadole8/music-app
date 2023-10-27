import { useState } from "react";
import "../../App.css"

function Otp() {
    const [otp, setOtp] = useState(new Array(4).fill(""));

    const handleOtpChange = (e, index) => {
        const newOtp = [...otp];
        newOtp[index] = e.target.value.substring(0, 1);
        setOtp(newOtp);

        if (index < otp.length - 1 && e.target.value) {
            document.getElementById(`otp-input-${index + 1}`).focus();
        }
    };

    return (
        <div className="loginPageContainer">
            <div className="login">

                <h3>OTP Verification</h3>

                <div>
                    <p>We have sent and OTP to +919889898989. Please enter the code received to verify.</p>

                    <div className='otp-input-container'>
                        {otp.map((data, index) => {
                            return (
                                <input
                                    key={index}
                                    type="tel"
                                    id={`otp-input-${index}`}
                                    value={data}
                                    onChange={(e) => handleOtpChange(e, index)}
                                />)
                        })}
                    </div>

                </div>

                <button>Verify</button>

                <div className='otp-bottom-click'>
                    <a >Resend OTP</a>
                    <a >Use another number</a>
                </div>
            </div>
        </div>
    )
}

export default Otp;