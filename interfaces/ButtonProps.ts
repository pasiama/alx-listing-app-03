export interface ButtonProps {
      label: string; // Text displayed on the button
      onClick: () => void; // Function to execute on click
      variant?: 'primary' | 'secondary' | 'danger'; // Style variant
      disabled?: boolean; // Disable the button
    }
    