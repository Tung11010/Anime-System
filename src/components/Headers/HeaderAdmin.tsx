import React from "react";

interface HeaderProps {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
  title?: string;
}

export const Header: React.FC<HeaderProps> = ({ dark, setDark, title }) => {
  return (
    <header className="fixed top-0 left-64 right-0 z-50 h-16 bg-white dark:bg-gray-800 shadow flex items-center justify-between px-8">
      <h1 className="text-xl font-bold dark:text-white">{title}</h1>

      <div className="flex items-center space-x-4">
        {/* Nút đổi dark/light mode */}
        <button
          className="focus:outline-none"
          onClick={() => setDark((d) => !d)}
          title={dark ? "Chế độ sáng" : "Chế độ tối"}
        >
          {dark ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 text-yellow-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v1.5M12 19.5V21M4.219 4.219l1.061 1.061M17.657 17.657l1.061 1.061M3 12h1.5M19.5 12H21M4.219 19.781l1.061-1.061M17.657 6.343l1.061-1.061M12 7.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0 1 12 21.75c-5.385 
                0-9.75-4.365-9.75-9.75 0-4.136 2.635-7.64 
                6.348-9.123a.75.75 0 0 1 .908.325.75.75 
                0 0 1-.082.976A7.501 7.501 0 0 0 12 
                19.5a7.48 7.48 0 0 0 6.072-3.075.75.75 
                0 0 1 .976-.082.75.75 0 0 1 .325.908z"
              />
            </svg>
          )}
        </button>

        {/* Email & avatar */}
        <span className="text-gray-600 dark:text-gray-200">
          admin@example.com
        </span>
        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="rounded-full w-10 h-10"
        />
      </div>
    </header>
  );
};
