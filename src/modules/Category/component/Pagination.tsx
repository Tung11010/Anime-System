interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center gap-2 mt-2">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-9 h-9 rounded-full flex items-center justify-center text-xs transition
            ${
              page === currentPage
                ? "border-white border-solid bg-transparent text-gray-300 font-normal"
                : "bg-[rgb(3,3,43)] text-gray-300 hover:bg-blue-950 hover:text-gray-100"
            }`}
          style={{
            borderWidth: page === currentPage ? "1px" : undefined,
          }}
        >
          {page}
        </button>
      ))}

      {/* Nút next page */}
      {currentPage < totalPages && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="w-9 h-9 rounded-full flex items-center justify-center bg-[rgb(3,3,43)] text-white hover:bg-blue-950 hover:text-gray-100 transition"
        >
          &raquo;
        </button>
      )}
    </div>
  );
};

export default Pagination;
