import React from "react";

// Define the interface for the props
interface ButtonProps {
  title: string;
  styles?: string;
}

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button className={`bg-blue-600 text-white transition-all hover:bg-blue-700 ${styles}`}>
      {title}
    </button>
  );
};

export default Button;