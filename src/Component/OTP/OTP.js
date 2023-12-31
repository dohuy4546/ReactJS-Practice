import { useState } from "react";
import GenerateOTP from "./GenerateOTP";
import InputOTP from "./InputOTP";
import "./OTP.scss"

function OTP() {
    const [orgOTPParent, setOrgOTPParent] = useState("")
    const [userOTPParent, setUserOTPParent] = useState("")
    const [isDisableBtn, setIsDisableBtn] = useState(false)
    const handleSubmitOTP = () => {
        if (+orgOTPParent === +userOTPParent) {
            alert("Correct OTP ^^")
        }
        else {
            alert("Incorrect --")
        }
    }
    return (
        <div className="otp-parrent-container">
            <GenerateOTP setOrgOTPParent={setOrgOTPParent} />
            <InputOTP setUserOTPParent={setUserOTPParent} handleSubmitOTP={handleSubmitOTP} isDisableBtn={isDisableBtn} setIsDisableBtn={setIsDisableBtn} />
        </div>
    )
}
export default OTP