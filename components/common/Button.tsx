// components/Button.js
const Button = ({ label, onClick, variant = 'primary', disabled = false }: { label: string, onClick: () => void, variant?: string, disabled?: boolean }) => {
      const baseStyles = `
        px-4 py-2 font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200
      `;
      const variants: { [key: string]: string } = {
            primary: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500',
            secondary: 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500',
            danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500',
      };
      const disabledStyles = `
        bg-gray-300 text-gray-500 cursor-not-allowed hover:bg-gray-300
      `;
    
      return (
        <button
          className={`${baseStyles} ${disabled ? disabledStyles : variants[variant]}`}
          onClick={onClick}
          disabled={disabled}
        >
          {label}
        </button>
      );
    };
    
    export default Button;
    