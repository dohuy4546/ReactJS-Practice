import { useState } from 'react';
import OtpInput from 'react-otp-input';
import CountDown from './CountDown';
function InputOTP(props) {
    const [otp, setOtp] = useState("")
    const handleChange = (otp) => {
        setOtp(otp)
        props.setUserOTPParent(otp)
    }
    const handleCofirmOTP = () => {
        props.handleSubmitOTP()
    }
    return (
        <div className='input-otp-container'>
            <div className='title'>Enter verification code</div>
            <OtpInput
                value={otp}
                onChange={handleChange}
                numInputs={6}
                separator={<span>-</span>}
                inputStyle={"input-otp"}
                isInputNum={true}
            />
            <CountDown setIsDisableBtn={props.setIsDisableBtn} />
            <div className="action">
                <button className='clear-btn'>clear</button>
                <button className='confirm-btn' onClick={handleCofirmOTP} disabled={props.isDisableBtn}>confirm</button>
            </div>
        </div>
    )
}
export default InputOTP