import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import CopyCode from "./CopyCode";

export const PaymentSectionSkeleton = () => {
  return (
    <>
      <div className="flex border-b border-gray-200">
        <button className="flex-1 py-3 text-sm font-medium transition-colors duration-200 text-primary-600 border-b-2 border-primary-600">
          QR Code
        </button>
        <button className="flex-1 py-3 text-sm font-medium transition-colors duration-200 text-gray-500 hover:text-gray-700">
          Chave Pix
        </button>
      </div>
      <div className="p-6">
        <section>
          <div className="flex flex-col items-center">
            <p className="text-sm text-gray-600 text-center mb-5">
              Pague com o QR Code
            </p>

            <div className="relative p-4 bg-gray-50 rounded-lg mb-5 group">
              <div className="relative w-48 h-48 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md overflow-hidden">
                <Skeleton style={{ position: "absolute", top: 0, right: 0, left: 0, bottom: 0 }}/>
              </div>
            </div>

              <div className="w-full">
                <p className="text-sm text-gray-600 mb-2">Pix Copia e Cola</p>
                <div className="flex items-center mb-6">
                  <div className="flex-1 bg-gray-50 px-3 py-2 rounded-l-lg border border-gray-200 truncate text-sm text-gray-500">
                    <Skeleton />
                  </div>
                  <CopyCode textToCopy="" label="Copiar" />
                </div>
            </div>
          </div>
        </section>
        <div key="footer" className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            Made with ❤️ by{" "}
            <a
              href="https://github.com/victorgrodriguesm7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 transition-colors"
            >
              victorgrodriguesm7
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
