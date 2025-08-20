import React, { useState } from "react";
import BreadCrumb from "../../../component/Banner/BreadCrumb";
import EmailInput from "../../../component/input/email";
import PasswordInput from "../../../component/input/password";
import LoginButton from "../../../component/Buttons/LoginButton";
import FbButton from "../../../component/Buttons/FbButton";
import GgButton from "../../../component/Buttons/GgButton";
import TwitterButton from "../../../component/Buttons/TwitterButton";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../services/authService";
import { toast } from "react-toastify";
import { LoginRequest, AuthResponse } from "../types/auth.types";
import { loginSuccess } from "../store/authSlice";

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<LoginRequest["email"]>("");
  const [password, setPassword] = useState<LoginRequest["password"]>("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please enter both email and password");
      return;
    }
    setLoading(true);
    try {
      const payload: LoginRequest = { email, password };
      const res: AuthResponse = await loginUser(payload);

      dispatch(
        loginSuccess({
          user: {
            id: res.user.id,
            email: res.user.email,
            username: res.user.username,
            role: res.user.role,
          },
          accessToken: res.accessToken,
          refreshToken: res.refreshToken,
        })
      );

      toast.success("Login successful!");
      navigate("/"); // Redirect to homepage after login
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || "Login failed. Please try again.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0C2A] w-full">
      <BreadCrumb title="Login" />
      <div className="flex flex-col items-center justify-center w-full px-2 py-10">
        <div className="bg-transparent w-full max-w-4xl flex flex-col md:flex-row md:space-x-8 md:bg-[#0B0C2A] md:rounded-lg md:shadow-none">
          {/* Login Form */}
          <div className="flex-1 flex flex-col items-center md:items-start md:pr-8">
            <h2 className="text-white text-2xl font-bold mb-6 w-full">Login</h2>
            <form className="w-full max-w-sm space-y-4" onSubmit={handleLogin}>
              <EmailInput value={email} onChange={(e) => setEmail(e.target.value)} disabled={loading} />
              <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} disabled={loading} />
              <div className="flex items-center justify-between mt-2">
                <LoginButton
                  className="bg-[#F44336] hover:bg-[#d32f2f] text-white font-bold px-6 py-2 rounded min-w-[140px]"
                  text={loading ? "Processing..." : "LOGIN NOW"}
                  disabled={loading}
                />
                <Link to="/forgot-password" className="text-xs text-white ml-2 hover:underline">
                  Forgot Your Password?
                </Link>
              </div>
            </form>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-gray-600 mx-4" />

          {/* Register */}
          <div className="flex-1 flex flex-col items-center md:items-start md:pl-8 mt-8 md:mt-0">
            <h2 className="text-white text-2xl font-bold mb-6 w-full">Don’t Have An Account?</h2>
            <Link to="/signup">
              <button className="bg-[#F44336] hover:bg-[#d32f2f] text-white font-bold px-6 py-2 rounded mb-8 min-w-[140px]">
                REGISTER NOW
              </button>
            </Link>
          </div>
        </div>

        {/* Social Login */}
        <div className="w-full max-w-md mt-10">
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