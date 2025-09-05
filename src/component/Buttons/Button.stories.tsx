
import LoginButton from "./LoginButton";
import FbButton from "./FbButton";
import GgButton from "./GgButton";
import TwitterButton from "./TwitterButton";

export default {
  title: "Components/Buttons",
  component: LoginButton, 
  tags: ["autodocs"],

};

export const Login = () => (
  <LoginButton text="LOGIN NOW" className="bg-[#F44336] hover:bg-[#d32f2f] text-white font-bold px-6 py-2 rounded min-w-[140px]" />
);

export const Facebook = () => (
  <FbButton text="SIGN IN WITH FACEBOOK" className="w-full" />
);

export const Google = () => (
  <GgButton text="SIGN IN WITH GOOGLE" className="w-full" />
);

export const Twitter = () => (
  <TwitterButton text="SIGN IN WITH TWITTER" className="w-full" />
); 

export const Register = () => (
  <LoginButton text="REGISTER NOW" className="bg-[#F44336] hover:bg-[#d32f2f] text-white font-bold px-6 py-2 rounded mb-8 min-w-[140px]" />
);