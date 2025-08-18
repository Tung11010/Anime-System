import React from "react";
import bgLogin from "../../assets/images/normal-breadcrumb.jpg";

interface BreadCrumbProps {
  title: string;
  subtitle?: string;
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({
  title,
  subtitle = "Welcome to the official Anime blog.",
}) => {
  return (
    <div
      className="relative w-full h-[180px] md:h-[240px] flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${bgLogin})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="relative z-10 w-full flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-2">{title}</h1>
        <p className="text-lg md:text-2xl text-white font-light drop-shadow">{subtitle}</p>
      </div>
    </div>
  );
};

export default BreadCrumb; 