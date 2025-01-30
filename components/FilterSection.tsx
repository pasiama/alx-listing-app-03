import FilterPill from "@/components/FilterPill";

const FilterSection = () => {
    const filters = ["Top Villa", "Self Checkin", "Beachfront", "Mountain View"];
    return (
        <section className="flex space-x-2 overflow-x-auto px-6 py-4">
            {filters.map((filter) => (
                <FilterPill key={filter} label={filter} />
            ))}
        </section>
    );
};

export default FilterSection;
