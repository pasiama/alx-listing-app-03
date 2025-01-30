import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import PropertyCard from "@/components/PropertyCard";

const ListingSection = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {PROPERTYLISTINGSAMPLE.map((property) => (
                <PropertyCard key={property.name} property={property} />
            ))}
        </section>
    );
};

export default ListingSection;
