"use client";

import { useState } from "react";
import PaymentQrCodeSection from "./PaymentQrCode";
import { GeradorPix } from "@/@types/geradorPix";
import PaymentKeySection from "./PaymentKeySection";

type Tabs = "qrcode" | "copyAndpaste";

interface Props {
    data: GeradorPix.PixData;
}

const PaymentTabs: React.FC<React.PropsWithChildren & Props> = ({ data, children }) => {
  const { key, keyType, amount, copyAndPaste, image, reference, name } = data;
  const [activeTab, setTab] = useState<Tabs>("qrcode");
  
  return (
    <>
      <div className="flex border-b border-gray-200">
        <button
          className={`flex-1 py-3 text-sm font-medium transition-colors duration-200 ${
            activeTab === "qrcode"
              ? "text-primary-600 border-b-2 border-primary-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setTab("qrcode")}
        >
          QR Code
        </button>
        <button
          className={`flex-1 py-3 text-sm font-medium transition-colors duration-200 ${
            activeTab === "copyAndpaste"
              ? "text-primary-600 border-b-2 border-primary-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setTab("copyAndpaste")}
        >
          Pix Key
        </button>
      </div>
      <div className="p-6">
        <section className={activeTab === "qrcode" ? "" : "hidden"}>
          <PaymentQrCodeSection
            amount={amount}
            copyAndPaste={copyAndPaste}
            image={image}
          />
        </section>
        <section className={activeTab === "qrcode" ? "hidden" : ""}>
          <PaymentKeySection
            _key={key}
            keyType={keyType}
            name={name}
            reference={reference}
          />
          
        </section>
        {children}
      </div>
    </>
  );
};

export default PaymentTabs;