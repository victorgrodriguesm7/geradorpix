import { GeradorPix } from "@/@types/geradorPix";
import PaymentTabs from "./PaymentTabs";
import { getPixData } from "@/utils/pix";

interface Props {
  payload: Promise<GeradorPix.Payload>;
}

export const PaymentSectionWrapper = async ({ payload }: Props) => {
  const data = await payload;
  const pixData = await getPixData(data);

  // A API limita o nome há 25 caraceteres, mantemos o nome passado pela URL ao invés do retorno da API
  pixData.name = data.name;

  return (
    <PaymentTabs data={pixData}>
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
    </PaymentTabs>
  );
};
