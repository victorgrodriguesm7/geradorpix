import { GeradorPix } from "@/@types/geradorPix";
import PaymentTabs from "./PaymentTabs";

interface Props {
  payload: Promise<GeradorPix.Payload>;
}

function getPixData(payload: GeradorPix.Payload) {
  const queryParams = new URLSearchParams();

  Object.entries(payload).forEach(([key, value]) => {
    if (key == "key") return;

    queryParams.set(key, `${value}`);
  });

  return fetch(
    `https://pix.v7r.dev/${payload.key}?${queryParams.toString()}`
  ).then((res) => res.json() as Promise<GeradorPix.PixData>);
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
