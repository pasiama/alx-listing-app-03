const FilterPill: React.FC<{ label: string }> = ({ label }) => {
      return (
          <button className="px-4 py-2 bg-gray-200 rounded-full text-gray-800 hover:bg-gray-300">
              {label}
          </button>
      );
  };
  
  export default FilterPill;
  