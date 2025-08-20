import { ChevronDown, LogIn, Search, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderLayoutProps {
  onSearchClick: () => void;
}

const HeaderClient = ({ onSearchClick }: HeaderLayoutProps) => {
  return (
    <header className="bg-[#070720] h-17">
      <div className="w-[90%] max-w-[1200px] font-semibold h-full mx-auto flex flex-col md:flex-row items-center justify-between ">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-white w-full md:w-auto px-4 md:px-0 flex-1 text-center">
          <Link to="" className="no-underline text-white">
            Ani<span className="text-red-500">me</span>
          </Link>
        </div>

        {/* Menu */}
        <nav className="w-full md:w-auto flex-2">
          <ul className="flex flex-col md:flex-row text-white list-none items-center justify-center gap-7 md:gap-10 text-sm m-0 p-0">
            <li className="px-6 py-6  bg-[red]">
              <Link to="/" className="no-underline text-[#fff2f2]">Homepage</Link>
            </li>
            <li className="relative group">
              <div className="text-[#cccccb] font-semibold py-2 text-sm hover:text-white cursor-pointer flex items-center">
                Categories <ChevronDown className="ml-2 mt-1" size={16} strokeWidth={2}/>
                <Link to={'category'} className="fa-solid fa-angle-down text-xs text-[#676767] ml-1.5"></Link>
              </div>
              <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 absolute bg-[#f9f9f9] min-w-[120px] shadow-md z-20 top-full left-0">
                <Link to="category/anime" className="block text-[#120707] px-3 py-1.5 no-underline text-sm">Anime</Link>
                <Link to="category/live-action" className="block text-[#120707] px-3 py-1.5 no-underline text-sm">Live Action</Link>
                <Link to="category/china-3d" className="block text-[#120707] px-3 py-1.5 no-underline text-sm">China 3D</Link>
                <Link to="category/romance" className="block text-[#120707] px-3 py-1.5 no-underline text-sm">Romance</Link>
                <Link to="category/tu-tien" className="block text-[#120707] px-3 py-1.5 no-underline text-sm">Tu tiên</Link>
                <Link to="category/co-trang" className="block text-[#120707] px-3 py-1.5 no-underline text-sm">Cổ trang</Link>
              </div>
            </li>
            <li><a href="#" className="no-underline text-[#cccccb] px-2 hover:text-white">Our blog</a></li>
            <li><a href="#" className="no-underline text-[#cccccb] px-2 hover:text-white">Contacts</a></li>
          </ul>
        </nav>

        {/* Icons */}
        <div className="flex flex-1 gap-4 text-white justify-center md:justify-center w-full md:w-auto px-4 md:px-0">
          <Search onClick={onSearchClick} size={18} className="cursor-pointer hover:opacity-80" />
          <Link to="/login">
            {/* <User size={18} /> */}
             <LogIn className='cursor-pointer hover:opacity-80' size={18} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderClient;