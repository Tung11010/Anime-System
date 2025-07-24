
import BreadCrumb from "./BreadCrumb";

export default {
  title: "Components/BreadCrumb",
  component: BreadCrumb,
};

export const LoginBreadCrumb = () => (
  <div className="w-full min-h-screen bg-[#0B0C2A] flex items-center justify-center">
    <div className="w-full">
      <BreadCrumb />
    </div>
  </div>
);
