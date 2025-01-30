// components/Card.js
import Image from 'next/image';

const Card = ({ imageUrl, title, description, price, onClick }: { imageUrl: string, title: string, description: string, price: string, onClick: () => void }) => {
  return (
    <div
      className="border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      onClick={onClick}
    >
      {/* Image */}
      {imageUrl && (
        <div className="relative h-48 w-full">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-gray-600 text-sm">{description}</p>
        <div className="mt-2 text-green-600 font-semibold">{price}</div>
      </div>
    </div>
  );
};

export default Card;
