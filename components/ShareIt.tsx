"use client";

import { Link } from 'lucide-react';
import toast from 'react-hot-toast';

interface CopyButtonProps {
  textToCopy: string;
  variant?: 'primary' | 'secondary';
}

function CopyButton({ 
  textToCopy,
  variant = 'primary' 
}: CopyButtonProps) {

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      toast.success('Copiado!');
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const baseClasses = "flex items-center gap-2 font-medium text-sm rounded-r-lg px-4 py-2 transition-all duration-200 cursor-pointer";
  
  const variantClasses = {
    primary: "text-primary-600 text-white hover:text-primary-400",
    secondary: "bg-secondary-600 text-white hover:bg-secondary-700"
  };

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={handleCopy}
    >
        <span className="flex gap-2">
            <Link size={16} />
        </span>
    </button>
  );
}

export default CopyButton;