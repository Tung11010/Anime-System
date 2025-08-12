import React from "react";
import BreadCrumb from "../../component/BreadCrumb/BreadCrumb";
import EmailInput from "../../component/input/email";
import PasswordInput from "../../component/input/password";
import LoginButton from "../../component/Buttons/LoginButton";
import FbButton from "../../component/Buttons/FbButton";
import GgButton from "../../component/Buttons/GgButton";
import TwitterButton from "../../component/Buttons/TwitterButton";

export const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0B0C2A] w-full">
      <BreadCrumb title="Login" />
      <div className="flex flex-col items-center justify-center w-full px-2 py-10">
        <div className="bg-transparent w-full max-w-4xl flex flex-col md:flex-row md:space-x-8 md:bg-[#0B0C2A] md:rounded-lg md:shadow-none">
          {/* Login Form */}
          <div className="flex-1 flex flex-col items-center md:items-start md:pr-8">
            <h2 className="text-white text-2xl font-bold mb-6 w-full">Login</h2>
            <form className="w-full max-w-sm space-y-4">
              <EmailInput />
              <PasswordInput />
              <div className="flex items-center justify-between mt-2">
                <LoginButton className="bg-[#F44336] hover:bg-[#d32f2f] text-white font-bold px-6 py-2 rounded min-w-[140px]" text="LOGIN NOW" />
                <a href="#" className="text-xs text-white ml-2 hover:underline">Forgot Your Password?</a>
              </div>
            </form>
          </div>
          {/* Divider */}
          <div className="hidden md:block w-px bg-gray-600 mx-4" />
          {/* Register */}
          <div className="flex-1 flex flex-col items-center md:items-start md:pl-8 mt-8 md:mt-0">
            <h2 className="text-white text-2xl font-bold mb-6 w-full">Don’t Have An Account?</h2>
            <button className="bg-[#F44336] hover:bg-[#d32f2f] text-white font-bold px-6 py-2 rounded mb-8 min-w-[140px]">REGISTER NOW</button>
          </div>
        </div>
        {/* Social Login */}
        <div className="w-full max-w-sm mt-10">
          <div className="flex items-center mb-4">
            <div className="flex-1 h-px bg-gray-600" />
            <span className="text-gray-400 px-2 text-sm">OR</span>
            <div className="flex-1 h-px bg-gray-600" />
          </div>
          <div className="space-y-3">
            <FbButton className="w-full" text="SIGN IN WITH FACEBOOK" />
            <GgButton className="w-full" text="SIGN IN WITH GOOGLE" />
            <TwitterButton className="w-full" text="SIGN IN WITH TWITTER" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage; 