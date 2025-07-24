import { Eye } from "lucide-react";

const HorizonCard = () => {
  return (
    <div
      className="relative bg-cover bg-center w-[280px] h-[135px] mt-2 rounded-md overflow-hidden"
      style={{
        backgroundImage: "url('https://i.redd.it/w6541yr1pamb1.jpg')",
      }}
    >
      {/* Episode + View */}
      <div className="absolute top-[6%] left-0 w-full flex justify-between px-3">
        <div className="bg-red-600 text-white text-xs px-2 py-[1px] rounded">
          11/98
        </div>
        <div className="bg-gray-700 text-white text-xs px-2 py-[1px] rounded font-semibold flex items-center gap-1">
          <Eye size={11} />
          9149
        </div>
      </div>

      {/* Description */}
      <div className="absolute bottom-0 left-0 w-full px-2 pb-2 pt-10 bg-gradient-to-t from-black/60 to-transparent text-white font-bold text-[16px]">
        Boruto: Naruto Next Generations
      </div>
    </div>
  );
};

export default HorizonCard;