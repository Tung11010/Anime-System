import { ChevronUp } from 'lucide-react';

const FooterClient = () => {
  return (
    <footer className="relative bg-[#070720] pt-10 pb-8">
      {/* Nút cuộn lên */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-[#D62828] hover:bg-red-600 text-white p-3 rounded-full shadow-md transition-all"
        >
          <ChevronUp size={20} />
        </button>
      </div>

      {/* Nội dung */}
      <div className="w-[90%] max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Logo */}
        <div className="text-[1.5rem] font-bold text-white text-center md:text-left ml-0 md:ml-[8rem]">
          <a href="/" className="no-underline text-white">
            Ani<span className="text-red-500">me</span>
          </a>
        </div>

        {/* Menu */}
        <nav>
          <ul className="flex flex-col md:flex-row text-[#cccccb] list-none gap-2 md:gap-6 items-center justify-center text-sm m-0 p-0 mr-0 md:mr-[22rem]">
            <li>
              <a href="/" className="no-underline px-2 py-1 block hover:text-white">Homepage</a>
            </li>
            <li>
              <a href="/categories" className="no-underline px-2 py-1 block hover:text-white">Categories</a>
            </li>
            <li>
              <a href="#" className="no-underline px-2 py-1 block hover:text-white">Our blog</a>
            </li>
            <li>
              <a href="#" className="no-underline px-2 py-1 block hover:text-white">Contacts</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default FooterClient;