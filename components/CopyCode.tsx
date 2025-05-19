"use client";

import { useState } from 'react';
import { Copy, CheckCircle2 } from 'lucide-react';

interface CopyButtonProps {
  textToCopy: string;
  label?: string;
  variant?: 'primary' | 'secondary';
}

function CopyButton({ 
  textToCopy, 
  label = 'Copiar', 
  variant = 'primary' 
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const baseClasses = "flex items-center gap-2 font-medium text-sm rounded-r-lg px-4 py-2 transition-all duration-200 cursor-pointer";
  
  const variantClasses = {
    primary: "bg-primary-600 text-white hover:bg-primary-700",
    secondary: "bg-secondary-600 text-white hover:bg-secondary-700"
  };

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={handleCopy}
    >
        <span className={copied ? "flex gap-2" : "hidden"}>
            <CheckCircle2 size={16} />
            <span className="whitespace-nowrap">Copiado!</span>
        </span>
        <span className={copied ? "hidden" : "flex gap-2"}>
            <Copy size={16} />
            <span className="whitespace-nowrap">{label}</span>
        </span>
    </button>
  );
}

export default CopyButton;