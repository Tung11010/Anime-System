import React, { useState } from "react";
import BreadCrumb from "../../component/Banner/BreadCrumb";
import EmailInput from "../../component/input/email";
import PasswordInput from "../../component/input/password";
import NameInput from "../../component/input/name"; 
import LoginButton from "../../component/Buttons/LoginButton";
import FbButton from "../../component/Buttons/FbButton";
import GgButton from "../../component/Buttons/GgButton";
import TwitterButton from "../../component/Buttons/TwitterButton";
import { registerUser } from "./services/authService";
import { toast } from "react-toastify";

export const SignUpPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const res = await registerUser({ email, username, password });
      toast.success(" Register success!");
      console.log("Register success:", res);
    } catch (err: any) {
      toast.error(`❌ ${err.message}`);
      
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0C2A] w-full">
      <BreadCrumb title="Sign Up" />
      <div className="flex flex-col items-center justify-center w-full px-2 py-10">
        <div className="bg-transparent w-full max-w-4xl flex flex-col md:flex-row md:space-x-8 md:bg-[#0B0C2A] md:rounded-lg md:shadow-none">
          
          {/* Sign Up Form */}
          <div className="flex-1 flex flex-col items-center md:items-start md:pr-8">
            <h2 className="text-white text-2xl font-bold mb-6 w-full">Sign Up</h2>
            <form className="w-full max-w-sm space-y-4" onSubmit={handleSubmit}>
              <EmailInput placeholder="Email address" value={email} onChange={(e: any) => setEmail(e.target.value)} />
              <NameInput placeholder="Your Name" value={username} onChange={(e: any) => setName(e.target.value)} />
              <PasswordInput placeholder="Password" value={password} onChange={(e: any) => setPassword(e.target.value)} />
              <div className="flex items-center justify-between mt-2">
                <LoginButton
                  className="bg-[#F44336] hover:bg-[#d32f2f] text-white font-bold px-6 py-2 rounded min-w-[140px]"
                  text={loading ? "Processing..." : "SIGN UP NOW"}
                />
              </div>
            </form>
            {message && <p className="text-white mt-3">{message}</p>}
            <div className="mt-4 text-center w-full">
              <span className="text-white text-sm">Already have an account? </span>
              <a href="#" className="text-[#F44336] text-sm hover:underline">Log In!</a>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-gray-600 mx-4" />

          {/* Login With Social */}
          <div className="flex-1 flex flex-col items-center md:items-start md:pl-8 mt-8 md:mt-0">
            <h2 className="text-white text-2xl font-bold mb-6 w-full">Login With:</h2>
            <div className="space-y-3 w-full">
              <FbButton className="w-full" text="SIGN IN WITH FACEBOOK" />
              <GgButton className="w-full" text="SIGN IN WITH GOOGLE" />
              <TwitterButton className="w-full" text="SIGN IN WITH TWITTER" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
