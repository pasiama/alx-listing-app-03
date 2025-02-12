import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import PropertyCard from "@/components/PropertyCard";
import { useRouter } from "next/router";

const ListingSection = () => {
    const router = useRouter();
const handleCardClick = (propertyName: string) => {
    router.push(`/booking?name=${encodeURIComponent(propertyName)}`);
};
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {PROPERTYLISTINGSAMPLE.map((property) => (
        <div
          key={property.name}
          onClick={() => handleCardClick(property.name)}
          className="cursor-pointer"
        >
          <PropertyCard property={property} />
        </div>
      ))}
    </section>
  );
};

export default ListingSection;
