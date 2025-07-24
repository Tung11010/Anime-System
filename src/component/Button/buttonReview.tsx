import { Navigation } from 'lucide-react';
const ButtonReview = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="flex items-center gap-2 px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md shadow transition"
  >
    <Navigation size={15}/>
    REVIEW
  </button>
);

export default ButtonReview;