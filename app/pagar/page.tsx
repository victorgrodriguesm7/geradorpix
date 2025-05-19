import { GeradorPix } from "@/@types/geradorPix";
import PaymentHeader from "@/components/PaymentHeader";
import { PaymentSectionSkeleton } from "@/components/PaymentSectionSkeleton";
import { PaymentSectionWrapper } from "@/components/PaymentSectionWrapper";
import { Suspense } from "react";

type Props = {
  searchParams: Promise<GeradorPix.Payload>;
};


export default function Charge({ searchParams }: Props) {

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto pt-8 pb-12 px-4 sm:px-6">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <PaymentHeader
            payload={searchParams}
          />
          
          <Suspense fallback={<PaymentSectionSkeleton/>}>
            <PaymentSectionWrapper payload={searchParams}/>
          </Suspense>
        </div>
      </div>
    </div>
  );
}