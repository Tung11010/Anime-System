import EmailInput from "./email";
import NameInput from "./name";
import PasswordInput from "./password";

export default {
  title: "Components/Inputs",
  component: EmailInput,
  tags: ["autodocs"],
};

export const Email = () => <EmailInput placeholder="Email address" />;

export const Password = () => <PasswordInput placeholder="Password" />; 

export const Name = () => <NameInput placeholder="Your Name" />;

