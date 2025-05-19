import CopyButton from "./CopyCode";

interface PaymentKeySection {
  _key: string;
  keyType: string;
  name: string;
  reference: string | undefined;
}

function PaymentKeySection({
  _key,
  keyType,
  name,
  reference,
}: PaymentKeySection) {
  return (
    <div className="flex flex-col">
      <div className="pb-4 mb-4 border-b border-gray-100">
        <p className="text-sm text-gray-600 mb-2">Chave Pix ( {keyType.slice(0,1).toUpperCase() + keyType.slice(1)} )</p>
        <div className="flex items-center mb-4">
          <div className="flex-1 bg-gray-50 px-3 py-2 rounded-l-lg border border-gray-200 truncate text-sm text-gray-500">
            {_key.substring(0, 30)}...
          </div>
          <CopyButton textToCopy={_key} label="Copiar Chave" />
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <p className="text-xs text-gray-500 mb-0.5">Beneficiário</p>
          <p className="text-sm font-medium text-gray-800">{name}</p>
        </div>

        <div>
          <p className="text-xs text-gray-500 mb-0.5">Identificador</p>
          <p className="text-sm font-medium text-gray-800">
            {reference ?? "***"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PaymentKeySection;
