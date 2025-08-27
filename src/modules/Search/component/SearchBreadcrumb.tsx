import { ChevronRight } from "lucide-react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom"

const SearchBreadcrum = () => {
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
                    Search
                </span>
            </Link>
           
        </div>
    )
}

export default SearchBreadcrum