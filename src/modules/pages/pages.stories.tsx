import SignUp from "../../component/SignUp";
import Login from "../../component/login";

export default {
  title: "Pages/pages",
  component: Login,
};

export const LoginPage = () => <Login />; 

export const SignUpPage = () => <SignUp />;