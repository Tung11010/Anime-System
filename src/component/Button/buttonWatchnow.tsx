
const ButtonWatchnow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="flex items-center gap-2 px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md shadow transition"
  >
    WATCH NOW
  </button>
);

export default ButtonWatchnow;