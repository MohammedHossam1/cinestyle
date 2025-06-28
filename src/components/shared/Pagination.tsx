// components/shared/Pagination.tsx

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center gap-2 mt-6 flex-wrap">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded border transition text-white ${
            currentPage === page
              ? "bg-primary-500 border-primary-500"
              : "bg-main-color border-gray-500 hover:bg-primary-600"
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
