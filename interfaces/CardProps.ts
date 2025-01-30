export interface CardProps {
      title: string; // Title displayed on the card
      description: string; // Card description
      imageSrc?: string; // Optional image source URL
      onClick?: () => void; // Optional action when the card is clicked
    }
    