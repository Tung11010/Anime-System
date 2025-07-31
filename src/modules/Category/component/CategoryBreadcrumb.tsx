import { ChevronRight } from "lucide-react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom";

const sectionTitleMap: Record<string, string> = {
    "trending-now": "Trending now",
    "popular-show": "Popular show",
    "live-action": "Live action"
};

const CategoryBreadcrum = () => {
    const { slug } = useParams();
    return (
        <div className="flex text-xs text-white gap-1">
            <Link to={'/'} className="flex gap-2">
                <FaHome color="red" className="mt-[0.1rem]" />
                <span className="">
                    Home
                </span>
            </Link>
            <ChevronRight size={13} color="white" className="mt-[0.1rem]" />
            <Link to={'/category'}>
                <span>
                    Categories
                </span>
            </Link>
            <ChevronRight size={13} color="white" className="mt-[0.1rem]"  />
            <span className="text-gray-300">{sectionTitleMap[slug || ""] }</span>
        </div>
    )
}

export default CategoryBreadcrum