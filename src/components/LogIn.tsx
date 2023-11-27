import PhoneInput from "react-phone-input-2";
import { useEffect, useState } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../config/firebase.ts";
import "react-phone-input-2/lib/style.css";
import { Button } from "./Button.tsx";
import OtpInput from "react-otp-input";
import "./input.css";
import { useNavigate } from "react-router-dom";
import { formatPhoneNumber } from "../utils/format.phone.ts";
export function LogIn() {
  const [phone, setPhone] = useState("");
  const [user, setUser] = useState(null);
  const [otp, setOtp] = useState("");
  const [isAccess, setIsAccess] = useState(false);
  const [numberForDisplay, setNumberForDisplay] = useState<string | null>(null);
  const navigate = useNavigate();

  const sendOtp = async () => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
      const formattedPhoneNumber = formatPhoneNumber(phone);
      setNumberForDisplay(formattedPhoneNumber);
      const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha);
      setUser(confirmation);
    } catch (e) {
      console.error(e);
    }
  };

  const verifyOtp = async () => {
    try {
      const res = await user.confirm(otp);
      setIsAccess(true);
    } catch (e) {
      console.error(e.message);
    }
  };

  useEffect(() => {
    if (isAccess) {
      navigate("/content");
    }
  }, [isAccess]);

  return (
    <div className="h-screen bg-customBackground flex justify-center items-center flex-col">
      <div className="h-[100px] flex items-center" id="recaptcha"></div>

      {!user ? (
        <div className="flex-col flex gap-6 justify-center items-center">
          <div className="flex flex-col items-center">
            <div className="py-8">
              <svg
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M44.2787 19.5887V9.80864L27.0831 0.0285645L9.88749 9.82302V19.4794L0.942871 24.5823V44.1741L18.1385 53.9714L27.0015 48.9203L35.8616 53.9714L53.0572 44.1741V24.5823L44.2787 19.5887ZM47.5575 41.0473L35.8528 47.7179L32.4778 45.7964L35.3224 44.1741V26.2161L29.8373 29.3975V32.9328V34.5004V40.7539V41.0416L25.0721 43.757L18.1326 47.7179L6.42797 41.0473V27.7033L9.89915 25.7243V29.386L25.4539 38.2485V32.0008L21.0355 29.4838L15.4717 26.3197L15.3784 26.265V21.0413V12.9268L27.0889 6.25617L38.7936 12.9268V16.462L35.8528 14.7878L33.6145 16.065L19.9163 23.8661L25.4131 26.987L28.3625 25.3072L29.8198 24.4672V24.5046L35.3399 21.3031L35.8266 21.0155L40.1401 23.4749L40.4811 23.6676L44.2524 25.8192L47.5313 27.6889L47.5575 41.0473Z"
                  fill="#FAFAFA"
                />
              </svg>
            </div>
            <h2 className="text-[32px] text-white py-4">
              Let’s get you started.
            </h2>
            <p className="text-gray-500 font-bold pb-6">
              Sign in or create an account.
            </p>
          </div>

          <PhoneInput
            placeholder="Phone number"
            inputStyle={{ borderRadius: 50 }}
            value={phone}
            onChange={(phone) => {
              setPhone("+" + phone);
            }}
          />
          <Button onClick={sendOtp}>Continue</Button>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="flex justify-center flex-col items-center">
            <h2 className="text-[32px] text-white ">Verify</h2>
            <p className="text-gray-500 font-bold pb-6">
              Enter the code we’ve sent to
              <span className="text-white px-3">{numberForDisplay}</span>
            </p>
          </div>
          <div>
            <OtpInput
              containerStyle="otp-input-container"
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span></span>}
              // inputStyle={{width: 50, height: 50}}
              inputStyle="otp-single-input"
              renderInput={(props) => <input {...props} />}
            />
          </div>
          <div>
            <Button className="m-2" customBackground="dark" size="small">
              Back
            </Button>
            <Button onClick={verifyOtp} className="m-2" size="small">
              Continue
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
