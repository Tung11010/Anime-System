import { Heart } from 'lucide-react';
const ButtonFollow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="flex items-center gap-2 px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md shadow transition"
  >
    <Heart size={15}/>
    FOLLOW
  </button>
);

export default ButtonFollow;