'use client';

import Image from 'next/image';
import { formatCurrency } from '../utils/formatters';
import CopyCode from './CopyCode';

interface PaymentQrCodeSectionProps {
  copyAndPaste: string;
  image: string;
  amount?: number;
}

function PaymentQrCodeSection({ copyAndPaste, image,amount }: PaymentQrCodeSectionProps) {
  image = image == "" ? "data:image/png;base64," : image;

  return (
    <div className="flex flex-col items-center">
      <p className="text-sm text-gray-600 text-center mb-5">
        Pague com o QR Code
      </p>
      
      <div className="relative p-4 bg-gray-50 rounded-lg mb-5 group">
        <div className="w-48 h-48 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md overflow-hidden">
          <Image
            src={image}
            alt="Pix QR Code"
            className="max-w-full max-h-full"
            fill
          />
        </div>
      </div>
      
      <p className={`text-sm text-gray-600 mb-1 ${amount == null ? "hidden" : ""}`}>Amount</p>
      <p className={`text-lg font-semibold text-gray-900 mb-6 ${amount == null ? "hidden" : ""}`}>
        {formatCurrency(amount ?? 0)}
      </p>
      
      <div className="w-full">
        <p className="text-sm text-gray-600 mb-2">Pix Copia e Cola</p>
        <div className="flex items-center mb-6">
          <div className="flex-1 bg-gray-50 px-3 py-2 rounded-l-lg border border-gray-200 truncate text-sm text-gray-500">
            {copyAndPaste.substring(0, 30)}...
          </div>
          <CopyCode textToCopy={copyAndPaste} label="Copiar" />
        </div>
      </div>
    </div>
  );
}

export default PaymentQrCodeSection;