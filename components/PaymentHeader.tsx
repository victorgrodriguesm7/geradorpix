import { GeradorPix } from "@/@types/geradorPix";
import { formatCurrency } from "@/utils/formatters";
import { Link } from "lucide-react";
import ShareIt from "./ShareIt";
import { headers } from "next/headers";

interface PaymentHeaderProps {
  payload: Promise<GeradorPix.Payload>;
}

async function PaymentHeader({ payload }: PaymentHeaderProps) {
  const data = await payload;
  const { amount, name } = data;

  const headerList = await headers();
  const url = headerList.get("x-url") ?? "";

  return (
    <div className="relative bg-primary-600 px-6 py-6 text-white">
      <div className="text-center">
        <section className={amount == null ? "hidden" : ""}>
            <h2 className="text-sm font-medium opacity-90 mb-1">Valor a pagar</h2>
            <p className="text-3xl font-bold mb-4 tracking-tight">
            {formatCurrency(amount ?? 0)}
            </p>
            <div className="w-12 h-0.5 bg-white/30 mx-auto mb-4"></div>
        </section>
        <h3 className="text-sm font-medium opacity-90 mb-1">Para</h3>
        <p className="text-xl font-semibold tracking-tight">{name}</p>
        <div className="absolute top-2 right-2 cursor-pointer">
          <ShareIt textToCopy={url}/>
        </div>
      </div>
    </div>
  );
}

export default PaymentHeader;