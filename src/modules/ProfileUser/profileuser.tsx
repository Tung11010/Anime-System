import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Auth/store/store";
import BreadCrumb from "@/component/Banner/BreadCrumb";
import { logout } from "../Auth/store/authSlice"; // Adjust path as needed
import { useNavigate } from "react-router-dom";

const ProfileUser: React.FC = () => {
  const { isAuthenticated, currentUser } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("persist:user"); // Clear persisted data
    navigate("/"); // Redirect to homepage after logout
  };

  if (!isAuthenticated || !currentUser) {
    return (
      <div>
        <BreadCrumb title="Profile" />
        <div className="min-h-screen bg-gradient-to-br from-[#0B0C2A] to-[#1a1b3d] flex items-center justify-center text-white">
          <div className="p-6 bg-[#070720]/80 rounded-2xl shadow-xl text-center">
            <p className="text-lg">🚀 Please log in to view your profile.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <BreadCrumb title="Profile" />
      <div className="min-h-screen bg-gradient-to-br from-[#0B0C2A] to-[#1a1b3d] flex justify-center items-center px-4">
        <div className="bg-[#070720]/90 p-8 rounded-2xl shadow-2xl w-full max-w-lg text-white border border-gray-700">
          {/* Avatar */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full border-4 border-indigo-500 overflow-hidden shadow-md mb-4">
              <img
                src={`https://ui-avatars.com/api/?name=${currentUser.username}&background=0D8ABC&color=fff`}
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-3xl font-bold">{currentUser.username}</h2>
            <p className="text-indigo-400">{currentUser.role}</p>
          </div>

          {/* Info Card */}
          <div className="mt-6 space-y-4">
            <div className="bg-[#1a1b3d] p-4 rounded-lg hover:bg-[#23244d] transition">
              <p className="text-sm text-gray-400">📧 Email</p>
              <p className="text-lg font-semibold">{currentUser.email}</p>
            </div>

            <div className="bg-[#1a1b3d] p-4 rounded-lg hover:bg-[#23244d] transition">
              <p className="text-sm text-gray-400">👤 Username</p>
              <p className="text-lg font-semibold">{currentUser.username}</p>
            </div>

            <div className="bg-[#1a1b3d] p-4 rounded-lg hover:bg-[#23244d] transition">
              <p className="text-sm text-gray-400">🔑 Role</p>
              <p className="text-lg font-semibold capitalize">{currentUser.role}</p>
            </div>
          </div>

          {/* Logout Button */}
          <div className="mt-8 text-center">
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;