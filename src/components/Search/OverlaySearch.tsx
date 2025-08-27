import { X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface OverlaySearchProps {
  isActive: boolean;
  OnClose: () => void;
}


const OverlaySearch = ({ isActive, OnClose }: OverlaySearchProps) => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  return (
    <div
      className={`
        fixed inset-0 z-[1000] flex flex-col justify-center items-center bg-black
        transition-opacity duration-400 ease-in-out
        ${isActive ? 'opacity-100 visible' : 'opacity-0 invisible'}
      `}
    >
      <div
        className="
          absolute top-[6%] text-white text-[26px] px-2 py-2 
          bg-[#444141] rounded-[22px] font-light
        "
      >
        <X onClick={OnClose} className="cursor-pointer" />
      </div>

      <div className="search-placeholder w-full px-4 max-w-[600px]">
        <input
          type="text"
          placeholder="Search here......"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && keyword.trim()) {
              navigate(`/search?q=${encodeURIComponent(keyword.trim())}`);
              OnClose()
            }
          }}
          className="
            w-full bg-black text-[30px] text-[#e6e5e5] border-b border-[#807c7c] 
            focus:outline-none placeholder-gray-400
          "
        />
      </div>
    </div>
  );
};

export default OverlaySearch;