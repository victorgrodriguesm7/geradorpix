import { GeradorPix } from "@/@types/geradorPix";
import PaymentHeader from "@/components/PaymentHeader";
import { PaymentSectionSkeleton } from "@/components/PaymentSectionSkeleton";
import { PaymentSectionWrapper } from "@/components/PaymentSectionWrapper";
import { formatCurrency } from "@/utils/formatters";
import { getPixUrlImage } from "@/utils/pix";
import { Metadata } from "next";
import { headers } from "next/headers";
import { Suspense } from "react";

type Props = {
  searchParams: Promise<GeradorPix.Payload>;
};

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const payload = await searchParams;
  const title = `Pix para ${payload.name}`;
  const headerList = await headers();
  const url = new URL(headerList.get("x-url") ?? "");

  let description = `${payload.name} gerou um pix para você pagar`;

  if (payload.amount != null && payload.amount != 0)
    description += ` de ${formatCurrency(payload.amount)}!`;
  else description += "!";

  const image = getPixUrlImage(payload);

  return {
    metadataBase: url,
    title,
    description,
    openGraph: {
      title,
      type: "website",
      images: image,
      url
    },
  };
}

export default function Charge({ searchParams }: Props) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto pt-8 pb-12 px-4 sm:px-6">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <PaymentHeader payload={searchParams} />

          <Suspense fallback={<PaymentSectionSkeleton />}>
            <PaymentSectionWrapper payload={searchParams} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
